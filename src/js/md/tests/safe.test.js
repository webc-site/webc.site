import { test, expect, describe } from "bun:test";
import safe from "../safe.js";

// Mock DOMParser for command line test environment
if (typeof globalThis.DOMParser === "undefined") {
  class MockAttribute {
    constructor(name, value) {
      this.name = name;
      this.value = value;
    }
  }

  class MockElement {
    constructor(tagName) {
      this.tagName = tagName.toUpperCase();
      this.attributes = [];
      this.childNodes = [];
      this.parentNode = null;
      this.nodeType = 1;
    }

    setAttribute(name, value) {
      const attr = this.attributes.find((a) => a.name === name);
      if (attr) {
        attr.value = value;
      } else {
        this.attributes.push(new MockAttribute(name, value));
      }
    }

    removeAttribute(name) {
      this.attributes = this.attributes.filter((a) => a.name !== name);
    }

    remove() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    }

    removeChild(child) {
      this.childNodes = this.childNodes.filter((c) => c !== child);
      child.parentNode = null;
    }

    appendChild(child) {
      this.childNodes.push(child);
      child.parentNode = this;
      return child;
    }

    get innerHTML() {
      const childrenStr = this.childNodes.map((c) => c.innerHTML || c.textContent || "").join("");
      if (this.tagName === "BODY") {
        return childrenStr;
      }
      const attrs = this.attributes.map((a) => a.name + '="' + a.value + '"').join(" "),
        attrStr = attrs ? " " + attrs : "";
      return (
        "<" +
        this.tagName.toLowerCase() +
        attrStr +
        ">" +
        childrenStr +
        "</" +
        this.tagName.toLowerCase() +
        ">"
      );
    }
  }

  class MockDocument {
    constructor() {
      this.body = new MockElement("body");
    }
  }

  globalThis.DOMParser = class {
    parseFromString(html) {
      const doc = new MockDocument(),
        tagReg = /<(\/?)([a-zA-Z0-9:-]+)([^>]*)>|([^<]+)/g;
      let match,
        current = doc.body;

      while ((match = tagReg.exec(html)) !== null) {
        const [_, isClose, tagName, attrStr, text] = match;
        if (text) {
          current.appendChild({ textContent: text, nodeType: 3 });
        } else if (tagName) {
          if (isClose) {
            if (current.parentNode) {
              current = current.parentNode;
            }
          } else {
            const el = new MockElement(tagName);
            if (attrStr) {
              const attrReg = /([a-zA-Z0-9:-]+)\s*=\s*["']([^"']*)["']/g;
              let attrMatch;
              while ((attrMatch = attrReg.exec(attrStr)) !== null) {
                el.setAttribute(attrMatch[1], attrMatch[2]);
              }
            }
            current.appendChild(el);
            const selfClosing = attrStr.endsWith("/");
            if (!selfClosing && !["img", "br", "hr", "input"].includes(tagName.toLowerCase())) {
              current = el;
            }
          }
        }
      }
      return doc;
    }
  };
}

describe("safe sanitizer", () => {
  test("remove script tags", () => {
    const input = "<div><script>alert(1)</script><p>hello</p></div>",
      expected = "<div><p>hello</p></div>";
    expect(safe(input)).toBe(expected);
  });

  test("remove onload/onerror event handlers", () => {
    const input = '<img src="a.jpg" onerror="alert(1)" onload="alert(2)">',
      expected = '<img src="a.jpg"></img>';
    expect(safe(input)).toBe(expected);
  });

  test("remove javascript protocol in link href", () => {
    const input = '<a href="javascript:alert(1)">xss</a>',
      expected = "<a>xss</a>";
    expect(safe(input)).toBe(expected);
  });

  test("remove javascript protocol with spaces and newlines", () => {
    const input = '<a href="java\nscript:alert(1)">xss</a>',
      expected = "<a>xss</a>";
    expect(safe(input)).toBe(expected);
  });

  test("remove data protocol except images", () => {
    const input = '<a href="data:text/html,xss">xss</a><img src="data:image/png;base64,123">',
      expected = '<a>xss</a><img src="data:image/png;base64,123"></img>';
    expect(safe(input)).toBe(expected);
  });

  test("remove non-ascii protocols", () => {
    const input = '<a href="中文协议:alert(1)">xss</a>',
      expected = "<a>xss</a>";
    expect(safe(input)).toBe(expected);
  });

  test("allow relative paths containing colons starting with dot or slash", () => {
    const input = '<a href="./a:b">1</a><a href="/a:b">2</a>',
      expected = '<a href="./a:b">1</a><a href="/a:b">2</a>';
    expect(safe(input)).toBe(expected);
  });
});

const D = document,
  newEl = D.createElement.bind(D),
  backBtn = D.getElementById("back");

D.getElementById("title").textContent = DATA.title;
D.title = DATA.title;

if (DATA.pathname === "/") {
  backBtn.style.display = "none";
} else {
  const li = DATA.pathname.split("/").filter(Boolean);
  li.pop();
  backBtn.href = "/" + li.join("/");
}

const list = D.getElementById("list"),
  appendItem = (href, type_class, name) => {
    const a = Object.assign(newEl("a"), { className: "item " + type_class, href }),
      span = Object.assign(newEl("span"), {
        className: "name",
        textContent: name
      });
    a.appendChild(span);
    list.appendChild(a);
  },
  base = DATA.pathname.endsWith("/") ? DATA.pathname : DATA.pathname + "/";

for (const item of DATA.files) {
  const { name, type } = item,
    href =
      base + (type === DATA.HTML ? name.slice(0, -5) : name) + (type === DATA.FOLDER ? "/" : "");
  appendItem(href, DATA.MAP[type], name);
}

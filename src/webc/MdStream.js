import "./MdCss.js";
import "./Scroll.js";
import "./MdStream/_.styl";
import { cE } from "../js/dom.js";
import { On } from "../js/On.js";
import streamRender from "../js/md/streamRender.js";

const clear = (self) => {
    if (self.ac) self.ac();
    self.ac = null;
    self.setStop = null;
  },
  setGen = (self, val) => {
    clear(self);
    const [cancel, setStop] = streamRender(self, val());
    self.ac = cancel;
    self.setStop = setStop;
  };

cE(
  "md-stream",
  class extends HTMLElement {
    set gen(val) {
      setGen(this, val);
    }

    connectedCallback() {
      this.classList.add("Md");
      const unClick = On(this, {
        mousedown: () => {
          if (this.setStop) this.setStop(true);
        },
        touchstart: () => {
          if (this.setStop) this.setStop(true);
        }
      });
      this.$ = () => {
        clear(this);
        unClick();
      };
    }

    disconnectedCallback() {
      this.$();
    }
  }
);

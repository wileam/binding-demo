(() => {
  "use strict";

  const EL = Symbol('Div#EL');

  class Div extends ElementBase {
    constructor(el) {
      super();
      this[EL] = el;
    }

    get value() {
      return this[EL].innerText
    }

    set value(d) {
      this[EL].innerText = d.value;
      this.emit('elementchange', this);
    }

    setValue(d) {
      if (this[EL].innerText !== d.value) {
        this[EL].innerText = d.value
      }
    }
  }

  window.Div = Div;
})()
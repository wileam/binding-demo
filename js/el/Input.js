(() => {
  "use strict";

  const EL = Symbol('Input#EL');

  class Input extends ElementBase {
    constructor(el) {
      super();
      this[EL] = el;
      this[EL].addEventListener('keyup', () => this.emit('elementchange', this));
    }

    get value() {
      return this[EL].value
    }

    set value(d) {
      this[EL].value = d;
      this.emit('elementchange', this);
    }

    setValue(d) {
      if (this[EL].value !== d.value) {
        this[EL].value = d.value;
      }
    }
  }

  window.Input = Input;
})()
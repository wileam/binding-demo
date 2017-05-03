(()=>{
  'use strict';

  const EL = Symbol('ElementBase#EL');
  const DATA = Symbol('ElementBase#DATA');
  const SELF_SETVALUE = Symbol('ElementBase#SELF_SETVALUE');

  class ElementBase extends EventEmitter {
    constructor(el) {
      super();
      this[EL] = el;
      this[SELF_SETVALUE] = this.setValue.bind(this);
      this.on('setValue', this.setValue.bind(this));
    }

    bind(d) {
      if (this[DATA]) {
        throw new Error('data has already been binded!');
      }
      this[DATA] = d;
      d.on('datachange', this[SELF_SETVALUE]);
    }

    unbind(d) {
      delete this[DATA];
      d.off('datachange', this[SELF_SETVALUE]);
    }

    get value() {}

    set value(d) {
      this.emit('elementchange', this);
    }

    setValue(d) {}
  }

  window.ElementBase = ElementBase;
})()
(() => {
  'use strict';

  const EL = Symbol('Data#EL');
  const VALUE = Symbol('Data#VALUE');
  const SELF_SETVALUE = Symbol('Data#SELF_SETVALUE');

  class DataBase extends EventEmitter {
    constructor(d) {
      super();
      this[VALUE] = d;
      this[EL] = [];
      this[SELF_SETVALUE] = this.setValue.bind(this);
    }

    get value() {
      return this[VALUE]
    }

    set value(d) {
      this[VALUE] = d;
      this.emit('datachange', this);
    }

    bind(el) {
      if(this[EL].indexOf(el) !== -1) {
        throw new Error('this element is already binded!')
      }
      this[EL].push(el);
      // 监听 & 赋值
      el.on('elementchange', this[SELF_SETVALUE]);
    }

    unbind(el) {
      // 解除监听
      let index = this[EL].indexOf(el);
      this[EL].splice(index, 1);
      el.off('elementchange', this[SELF_SETVALUE]);
    }

    setValue(el) {
      this[VALUE] = el.value;
      for (var i = 0; i < this[EL].length; i++) {
        if (this[EL][i] !== el) {
          this[EL][i].emit('setValue', this);
        }
      }
    }
  }

  window.DataBase = DataBase;
})()
(()=>{
  'use strict';

  let arrayProto = Array.prototype;
  class MyArray extends Array {
    constructor(...args) {
      super(...args);
      EventEmitter.call(this);
    }
  };

  let methods = Object.getOwnPropertyNames(arrayProto);
  methods.forEach(m => {
    MyArray.prototype[m] = function (){
      var _a = JSON.stringify(this);
      var res = arrayProto[m].apply(this, arguments);

      if(_a !== JSON.stringify(this)){
        this.emit('datachange', this);
      }
      return res;
    };
  });

  Object.assign(MyArray.prototype, {
    on: EventEmitter.prototype.on,
    off: EventEmitter.prototype.off,
    emit: EventEmitter.prototype.emit
  });

  window.MyArray = MyArray;
})()
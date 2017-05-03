(()=>{
  'use strict';

  class EventEmitter {
    constructor() {
      this.events = [];
    }

    on(event, fn) {
      // registers the specified listener on the EventTarget it's called on.
      if(!this.events[event]){
        this.events[event] = [fn];
      }else{
        if(this.events[event].indexOf(fn) !== -1) {
          throw new Error('binded')
        }
        this.events[event].push(fn);
      }
    }

    off(event, fn) {
      if( this.events[event].indexOf(fn) !== -1 ) {
        let index = this.events[event].indexOf(fn);
        this.events[event].splice(index, 1);
      }
    }

    emit(event, args) {
      // broadcast an event, call fn(args)
      if( !this.events[event] || this.events[event].length == 0) {
        return
      }
      for (let i = 0; i <= this.events[event].length; i++) {
        if(typeof this.events[event][i] == 'function') {
          this.events[event][i](args)
        }
      }
    }
  }

  // TODO:
  
  // on:
  // 1. 接受外界传入的 event 和 fn
  // 2. 放在中转区域，以供emit可以触发到，同一个 event 可以有多个 fn
  // 3. 一个 event 是一个 array，存对应的 fn

  // off:
  // 1. 接受外界传入的 event 和 fn
  // 2. 把 event 和 fn 的关联从中转区域删除

  // emit:
  // 1. 接受外界的 event 和 argvs
  // 2. 从中转区域拿到已经存在的事件列表，匹配当前当前接收到的 event，拿到 对应的 fn 数组
  // 3. 将自己拿到的 argvs 作为 fn 的参数，依次执行数组里的 fn

  window.EventEmitter = EventEmitter;
})()
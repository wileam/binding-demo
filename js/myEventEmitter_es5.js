(()=>{
  function EventEmitter(){
    this.events = [];
  }

  EventEmitter.prototype.on = function on(event, fn){
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

  EventEmitter.prototype.off = function off(event, fn) {
    if( this.events[event].indexOf(fn) !== -1 ) {
      let index = this.events[event].indexOf(fn);
      this.events[event].splice(index, 1);
    }
  }

  EventEmitter.prototype.emit = function emit(event, args) {
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

  window.EventEmitter = EventEmitter;
})()
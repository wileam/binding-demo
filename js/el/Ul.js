(() => {
  "use strict";

  const EL = Symbol('Ul#EL');

  class Ul extends ElementBase {
    constructor(el) {
      super();
      this[EL] = el;
    }
    setValue(d) {
      let list = '';
      if( d && d.value && d.value instanceof Array ) {
        for (var i = 0; i < d.value.length; i++) {
          list += `<li>${d.value[i].text}</li>`
        }
      } else if( d && d.value && d.value instanceof Object ) {
        for (var prop in d.value) {
          list += `<li>${d.value[prop]}</li>`
        }
      }
      this[EL].innerHTML = list;
    }
  }

  window.Ul = Ul;
})()
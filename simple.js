(() => {
  'use strict';

  let inputEl = new Input(document.querySelector('#input'));
  let textEl = new Div(document.querySelector('#text'));
  let data = new DataBase();

  inputEl.bind(data);
  textEl.bind(data);

  data.bind(inputEl);
  data.bind(textEl);

  data.value = 'hello world';

  // inputEl.unbind(data);
  // data.unbind(inputEl);

  window.data = data;
})()
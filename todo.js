(()=>{
  // let inputEl = new Input(document.querySelector('#addtodo'));
  // let inputdata = new DataBase();
  // inputdata.bind(inputEl);
  // inputEl.bind(inputdata);

  let todoEl = new Ul(document.querySelector('#todo'));
  let todoData = new TodoList();
  todoEl.bind(todoData);

  // todoData.value = {
  //   a: 'shopping',
  //   b: 'reading',
  //   c: 'cooking'
  // };

  let MyObj = new Proxy({
    a: 'shopping',
    b: 'reading',
    c: 'cooking'
  }, {
    set: function(target, property, value, receiver) {
      
    }
  })
  
  // todoData.value = new MyArray({
  //     id: 1,
  //     text: 'shopping'
  //   },
  //   {
  //     id: 2,
  //     text: 'reading'
  //   },
  //   {
  //     id: 3,
  //     text: 'cooking'
  //   });
  
  // todoData.value.on('datachange', ()=>{
  //   todoData.emit('datachange', todoData);
  // })

  // function updateTodo() {
  //   if(inputdata && inputdata.value && typeof inputdata.value == 'string') {
  //     if( d && d.value && d.value instanceof Array ) {
  //       for (var i = 0; i < d.value.length; i++) {
  //         list += `<li>${d.value[i].text}</li>`
  //       }
  //     } else if( d && d.value && d.value instanceof Object ) {
  //       for (var prop in d.value) {
  //         list += `<li>${d.value[prop]}</li>`
  //       }
  //     }
  //     todoData.value.push({
  //       text: inputdata.value
  //     })
  //     inputdata.value = ''
  //   }
  // }
  
  // window.inputdata = inputdata;
  window.todoData = todoData;
  // window.updateTodo = updateTodo;
})()
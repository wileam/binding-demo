(()=>{
  let inputEl = new Input(document.querySelector('#addtodo'));
  let inputdata = new DataBase();
  inputdata.bind(inputEl);
  inputEl.bind(inputdata);

  let todoEl = new Ul(document.querySelector('#todo'));
  let todoData = new TodoList();
  todoEl.bind(todoData);
  
  todoData.value = new MyArray({
      id: 1,
      text: 'shopping'
    },
    {
      id: 2,
      text: 'reading'
    },
    {
      id: 3,
      text: 'cooking'
    });
  
  todoData.value.on('datachange', ()=>{
    todoData.emit('datachange', todoData);
  })

  function updateTodo() {
    if(inputdata && inputdata.value && typeof inputdata.value == 'string') {
      todoData.value.push({
        text: inputdata.value
      })
      inputdata.value = ''
    }
  }
  
  window.inputdata = inputdata;
  window.todoData = todoData;
  window.updateTodo = updateTodo;
})()
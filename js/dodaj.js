const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const todoSearch = document.querySelector('#todoSearch');


todoForm.addEventListener('submit', function (a) {
    a.preventDefault();
    const textarea = this.querySelector('textarea');
    const todoTytul = document.getElementById('todoText');
    if (todoTytul && textarea.value) {
        addTask(todoTytul, textarea.value);
        textarea.value = null;
        todoTytul.value = null;
    }

});


function addTask(todoTytul, content) {

    const todo = document.createElement('div');
    todo.classList.add('todo-element');

    const todoBarDel = document.createElement('div');
    todoBarDel.classList.add('todo-bar-del');

    const todoDate = document.createElement('div');
    todoDate.classList.add('todo-bar-del');
    const data = new Date();
   

    // Template literals !!!!!!!!!!
    const dataText = `${data.getDate()}.${(data.getMonth() + 1)}.${data.getUTCFullYear() + 1} godz.: ${data.getHours()}:${data.getMinutes()}  ${todoTytul.value}`


    // Creating delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('todo-delete');
    deleteBtn.title = 'Delete';

    // Creating delete icon
    const deleteIcon = document.createElement('i');

    // Creating text
    const text = document.createElement('div');
    text.classList.add('todo-element-text');
    text.innerHTML = content;

    // Adding multiple class in javascript
    deleteIcon.classList.add('fas');
    deleteIcon.classList.add('fa-trash-alt');

    deleteBtn.appendChild(deleteIcon);

    todoDate.innerText = dataText;

    todo.appendChild(todoBarDel);

    // Adding elements to todo Bar Delete
    todoBarDel.appendChild(todoDate)
    todoBarDel.appendChild(deleteBtn);

    todo.appendChild(text)


    todoList.appendChild(todo);

}


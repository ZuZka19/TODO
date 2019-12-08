let todoList = null;
let todoSearch = null;
let todoForm = null; 

document.addEventListener('DOMContentLoaded',function(){
    const todoForm = document.querySelector('#todoForm');
    const todoList = document.querySelector('#todoList');
    const todoSearch = document.querySelector('#todoSearch');
    

    todoForm.addEventListener('submit',function(a){
        a.preventDefault();
        const textarea = this.querySelector('textarea');
        const todoTytul = document.getElementById('todoText').value;

            if(todoTytul !== null &&  textarea.value !== null){
                addTask(todoTytul + textarea.value);
                textarea.value = null;
                todoTytul.value = null;
            }
   
    });
});

function addTask(text){

    const todo = document.createElement('div');
    todo.classList.add('todo-element');

    const todoBar = document.createElement('div');
    todoBar.classList.add('todo-bar-del');

    const todoDate = document.createElement('div');
    todoDate.classList.add('todo-bar-del');
    const data = new Date();
    const dataText = data.getDate() + '.' + (data.getMonth()+1) + '.' + data.getUTCFullYear() + ' godz.: ' + data.setHours() + ':' + data.setMinutes() + '  ' + todoTytul;
    todoDate.innerText = dataText;

    const todoDel = document.createElement('div');
    todoDel.classList.add('todo-delete');
    todoDel.classList.add('button');
    todoDel.innerText = text;

    todo.appendChild(todoBar);
    todo.appendChild(todoText);

    todoList.appendChild(todo);

}
function addTask(text) {
    console.log('Dodaję zadanie do listy')
}
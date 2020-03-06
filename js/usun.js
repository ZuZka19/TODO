const todoForm = document.querySelector('#todoForm');
const todoList = document.querySelector('#todoList');
const todoSearch = document.querySelector('#todoSearch');


todoList.addEventListener("click",function(a){
    if (a.target.closest(".todo-delete") !== null) {
        a.target.closest(".todo-element").remove();
    };
    });

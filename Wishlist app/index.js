const todosInp = document.querySelector(".todos-input");
const addBtn = document.querySelector(".addbtn");
let todoList = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todoList);
let todosContainer = document.querySelector(".todos-container");


function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (param)=>{
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    })
}

function generateTodo(id, todo, isCompleted=false){
    return {id, todo, isCompleted}
}

function updateLocalStorage(id="todos"){
    localStorage.setItem(id, JSON.stringify(todoList));
}

addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if(todosInp.value.length > 0){
        todoList.push(generateTodo(uuid(), todosInp.value));
    }
    updateLocalStorage();
    renderTodos(todoList);
    todosInp.value = "";
})

todosContainer.addEventListener("click", (event)=>{
    let key = event.target.dataset.key;
    let delkey = event.target.dataset.delkey;
    console.log(key, delkey);
    todoList = todoList.map(todos => todos.id === key ? generateTodo(todos.id, todos.todo, !todos.isCompleted) : todos);
    todoList = todoList.filter(todos => todos.id !== delkey);
    updateLocalStorage();
    renderTodos(todoList);
    console.log(todoList);
})

function renderTodos(todoList){
    todosContainer.innerHTML = todoList.map(({id, todo, isCompleted}) => `
    <li class="list-group-item">
        <div class="d-flex flex-row justify-content-between">
            <div class="form-check form-check-inline">
                <input class="form-check-input" style="margin-top: 3px;" type="checkbox" id="item-${id}" data-key=${id} ${isCompleted ? "checked" : ""}/> 
                <label class="form-check-label" ${isCompleted ? 'style="text-decoration: line-through;' : ""} for="item-${id}" data-key=${id}>${todo}</label> 
            </div> 
            <button style="border: 0px; background-color: white;"><i class="bi bi-trash" data-delkey=${id}></i></button> 
        </div>
    </li>`
    ).join(" ");
}
renderTodos(todoList);
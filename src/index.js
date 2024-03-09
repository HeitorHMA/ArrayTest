import { userTodos } from "./userTodos";

function displayTodos(){
    for (let i; i<userTodos.length;i++){
    const todoPage = document.querySelector("#todoPage");
    const todoDiv = document.createElement("div");
    const todoName = userTodos[i].name;
    todoDiv.classList.add("todo-div");
    todoDiv.innerHTML = `<h3>${todoName}</h3>`;
    todoPage.appendChild(todoDiv);
    console.log(todoName);
}}
displayTodos()
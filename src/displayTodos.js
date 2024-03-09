import { addTodo, removeTodo, userTodos } from "./userTodos";

function displayTodos(){
const newTodo = document.createElement("button");
newTodo.innerHTML = `<h1>+</h1>`;
newTodo.addEventListener("click",addTodo())

const todoPage = document.querySelector("#todoPage");
todoPage.appendChild(newTodo)
for (let i= 0; i < userTodos.length; i++){
if(userTodos[i] == undefined){
    continue
}
else{
const todoDiv = document.createElement("div");
const todoName = userTodos[i].name;
todoDiv.classList.add("todo-div");
todoDiv.innerHTML = `<h2>${todoName}</h2>`;
const deleteButton = document.createElement("button")
deleteButton.innerHTML = "X";
deleteButton.addEventListener("click",function(){
    const parentDiv = deleteButton.parentElement;
    todoPage.removeChild(parentDiv);

})
deleteButton.addEventListener("click",removeTodo(i));
todoDiv.appendChild(deleteButton)
todoPage.appendChild(todoDiv);
}}}
export default displayTodos;
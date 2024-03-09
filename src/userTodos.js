const userTodos = [
    {
        name: "1"
    },
    {
        name: "2",
    },
    {
        name: "3",
    },
    {
        name: "3",
    },
]
localStorage.setItem('todos',JSON.stringify(userTodos));
export const storedTodos= JSON.parse(localStorage.getItem('todos'));

export function addTodo(){
    storedTodos.push({name: "5"})
};
export function removeTodo(index){
   delete userTodos[index]
};

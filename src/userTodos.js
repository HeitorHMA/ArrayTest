export const userTodos = [
    {name: "Teste 0",},
    {name: "Teste 1",},
    {name: "Teste 2",},
    {name: "Teste 3",},
]

export function addTodo(index){
    userProjects.push(`Teste ${index}`)
}

export function removeTodo(index){
    delete userProjects[index]
}
// les taches ajoutées
const todoList = document.getElementById("todoList")
// valeur de l'input
const newTodoInput = document.getElementById("newTodoInput")
// le bouton
const addTodoBtn = document.getElementById("addTodoBtn")

addTodoBtn.addEventListener("click", () => {
    const newTodoText = newTodoInput.value
    if (newTodoText === "") {
        alert("Veuillez ajouter une tâche")
    } else {
        const newTodoItem = document.createElement("li")
        newTodoItem.innerText = newTodoText
        const deleteTodoBtn = document.createElement("button")
        deleteTodoBtn.innerText = "X"
        deleteTodoBtn.classList.add("delete-todo-btn")
        deleteTodoBtn.addEventListener("click", function () {
            newTodoItem.remove()
        })
        newTodoItem.appendChild(deleteTodoBtn)
        todoList.appendChild(newTodoItem)
        newTodoInput.value = ""
    }
})
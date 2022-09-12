const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const todoBtn = document.querySelector("#todo-btn")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditeBtn = document.querySelector("#cancel-edit-btn")   

let oldInputValue

const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("d-flex")
    todo.classList.add("todo")



    const todoTitle = document.createElement("h3")
    todoTitle.classList.add("flex-grow-1")
    todoTitle.classList.add("fs-5")
     todoTitle.classList.add("mt-2")
    todoTitle.innerText = text;
    todo.appendChild (todoTitle);

    const todoButton = document.createElement("button")
    todoButton.classList.add("btn")
    todoButton.classList.add("certo-todo")
    todoButton.classList.add("btn-primary")
    todoButton.classList.add("btn-sm"), todoButton.classList.add("m-1"), todoButton.classList.add("material-symbols-outlined")
    todoButton.innerHTML = 'check'
    todo.appendChild(todoButton)

    const editarButton = document.createElement("button")
    editarButton.classList.add("btn")
    editarButton.classList.add("editar-todo")
    editarButton.classList.add("btn-warning")
    editarButton.classList.add("btn-sm"), editarButton.classList.add("m-1"), editarButton.classList.add("material-symbols-outlined")
    editarButton.innerHTML = 'edit'
    todo.appendChild(editarButton)

    const excluirButton = document.createElement("button","hr")
    excluirButton.classList.add("btn")
    excluirButton.classList.add("excluir-todo")
    excluirButton.classList.add("btn-danger")
    excluirButton.classList.add("btn-sm"), excluirButton.classList.add("m-1"), excluirButton.classList.add("material-symbols-outlined")
    excluirButton.innerHTML = 'close'
    todo.appendChild(excluirButton)


    

    todoList.appendChild(todo)

    todoInput.value = ""
    todoInput.focus()
}

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
    
}
 
const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        console.log(todoTitle, text)


        if (todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text
        }
    })
}


todoForm.addEventListener ("submit", (e) => {
    e.preventDefault ()

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue)
    }} )

document.addEventListener("click", (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    let todoTitle

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }


    if (targetEl.classList.contains("certo-todo")) {
        parentEl.classList.toggle("texto")
       
    }

    if (targetEl.classList.contains("excluir-todo"))
    {
        parentEl.remove()
    }

    if (targetEl.classList.contains("editar-todo")) {
       toggleForms()

       editInput.value = todoTitle
       oldInputValue = todoTitle
    }


})

cancelEditeBtn.addEventListener ("click", (e) => {
    e.preventDefault()


    toggleForms()

})

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if (editInputValue){
        updateTodo(editInputValue)

    }

    toggleForms()
})
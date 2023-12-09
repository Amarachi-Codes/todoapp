
document.addEventListener("DOMContentLoaded",()=>{
const taskInput = document.getElementById("task");
const enterbtn = document.getElementById("enter");
const list = document.getElementById("list");
const taskInputValue = taskInput.value.trim()

enterbtn.addEventListener("click",()=>{
    if(taskInputValue !== " "){
        const li = document.createElement("li")
        li.textContent = taskInputValue
        list.appendChild(li);
        
        //clear input value
        taskInput.value = " "
        
    }
})


})
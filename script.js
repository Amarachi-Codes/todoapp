
// document.addEventListener("DOMContentLoaded",()=>{
// const taskInput = document.getElementById("task");
// const enterbtn = document.getElementById("enter");
// const list = document.getElementById("list");
// const taskInputValue = taskInput.value.trim()

// enterbtn.addEventListener("click",()=>{
//     if(taskInputValue !== " "){
//         const li = document.createElement("li")
//         li.textContent = taskInputValue
//         list.appendChild(li);
        
//         //clear input value
//         taskInput.value = " "
        
//     }
// })


// })


document.addEventListener('DOMContentLoaded', ()=>{
    const taskInput = document.querySelector("#taskInput");
    const button =document.querySelector('#button')
    const tasklist = document.querySelector('#tasklist')
    const taskInputValue = taskInput.value
     

    //creating some elements needed
    const list = document.createElement('li')
    const deletebtn = document.createElement('button')
    deletebtn.textContent ='Delete'
    const done = document.createElement('button')
    done.textContent ='Done'

    // Add id to these elements
    list.setAttribute('id','listitem')
    deletebtn.setAttribute('id','deleteme')
    done.setAttribute('id','strikeout')

    //Adding task
    button.addEventListener('click',()=>{
        list.value =taskInputValue
        tasklist.appendChild(list)
        tasklist.appendChild(deletebtn)
        tasklist.appendChild(done)
    })

    //delete task
})
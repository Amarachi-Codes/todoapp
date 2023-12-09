
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
        let taskInputValue = taskInput.value
        list.textContent =taskInputValue
        tasklist.appendChild(list.cloneNode(true))
        tasklist.appendChild(deletebtn.cloneNode(true))
        tasklist.appendChild(done.cloneNode(true))
        taskInputValue = ''
    })

    //delete task
    // const deleteItems = document.querySelector('#deleteme')
    const listitem = document.querySelector('#listitem')
    tasklist.addEventListener('click',(event)=>{
        if(event.target.id === 'deleteme'){ 
        tasklist.removeChild(listitem)
        tasklist.removeChild(deletebtn)
        tasklist.removeChild(done)
    }
    })

    //strike items
    const strikeout = document.querySelector('#strikeout')
    strikeout.addEventListener('click',()=>{
        if(listitem.style.textDecoration = 'none'){
            listitem.style.textDecoration = 'line-through'
        }else{
            listitem.style.textDecoration ='none'
        }
    })
})
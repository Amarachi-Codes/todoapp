
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
        
        taskInput.value= '' //clear Input value
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
    strikeout.addEventListener("click", ()=> {
        console.log(strikeout);
        if(listitem.style.textDecoration === 'none'){
            listitem.style.textDecoration = 'line-through'
        }else{
            listitem.style.textDecoration = 'none'
        }
    })
    
})


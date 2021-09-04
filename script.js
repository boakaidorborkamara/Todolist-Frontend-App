let new_task_input = document.getElementById("new-task");
let task_container = document.getElementById("display-task-area");
let add_task_btn = document.getElementById("add-task-btn");
let clear_all_task_btn = document.getElementById("clear-task-btn");



//change the display of task container to block
function showTaskContainer(){
    if(task_container.style.display !== "block"){
        task_container.style.display = "block";
    }
}

//change the display of the task container to none
function hideTaskContainer(){
    if(task_container.style.display !== "none"){
        task_container.style.display = "none";
    }
}


//change the display of the task button to block
function showClearTaskButton(){
    if(clear_all_task_btn.style.display !== "block"){
        clear_all_task_btn.style.display = "block";
    }
}

//change the display of the show task button to block
function hideClearTaskButton(){
    if(clear_all_task_btn.style.display !== "none"){
        clear_all_task_btn.style.display = "none";
    }
}


// creates new task 
function createNewTask(){

   if(new_task_input.value !== ""){
        // show the list of task area and the button to clear all task on the list
        showTaskContainer();
        showClearTaskButton();
        
        // name of task from the task Input 
        let new_task = new_task_input.value;

        //create new div
        let new_task_box = document.createElement("div");

        // add items inside of div 
        new_task_box.innerHTML = `
            <input type="radio" id=${new_task} value=${new_task}>
            <label for=${new_task}>${new_task}</label>
        `

        // add new task to the HTML document 
        task_container.insertAdjacentElement("beforeend",new_task_box);
   }
   else{
       alert("You Didn't Enter a Task");
   }
    
}

//clear all the available task on the list
function clearAllTask(){
    while(task_container.firstChild){
        task_container.removeChild(task_container.firstChild);
    }
    
    // hide items 
    hideTaskContainer();
    hideClearTaskButton();
}



// envoke functions 
add_task_btn.addEventListener("click", createNewTask);
clear_all_task_btn.addEventListener("click", clearAllTask);
    
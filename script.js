let new_task_input = document.getElementById("new-task");
let task_container = document.getElementById("display-task-area");
let add_task_btn = document.getElementById("add-task-btn");


// creates new task 
function createNewTask(){
   if(new_task_input.value !== ""){
        // name of task from the task Input 
        let new_task = new_task_input.value;

        //create new div
        let new_task_box = document.createElement("div");
        // add items inside of div 
        new_task_box.innerHTML = `
            <input type="radio" id=${new_task} value=${new_task}>
            <label for=${new_task}>${new_task}</label>
        `
        // add new tas to the document 
        task_container.insertAdjacentElement("beforeend",new_task_box);
   }
   else{
       alert("You Didn't Enter a Task");
   }
    
}


// envoke functions 
add_task_btn.addEventListener("click", createNewTask);
    
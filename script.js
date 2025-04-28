const taskInput = document.getElementById("taskInput");   
const addButton = document.getElementById("addButton");  
const taskList = document.getElementById("taskList");     

addButton.addEventListener("click", () => {              
    const taskValue = taskInput.value.trim();             

    if(taskValue === "") {                             
        alert("Please add a task!");
        return;
    }

    const listItem = document.createElement("li");       
    listItem.className = "taskItem";                     
    listItem.innerHTML = `                               
    <span>${taskValue}</span>                    
    <div>
    <button class="completeButton">Complete</button>   
    <button class="deleteButton">Delete</button>         
    </div>
    `;

    taskList.appendChild(listItem);                      
    taskInput.value = "";                               
});

taskList.addEventListener("click", (e) => {               
    const target = e.target;                             

    if(target.classList.contains("completeButton")) {    
        const taskItem = target.parentElement.parentElement;  
        taskItem.classList.toggle("completed");              
 
    if(target.classList.contains("deleteButton")) {        
        const taskItem = target.parentElement.parentElement;    
        taskItem.remove();                                   
    }
});

const clearAllButton = document.getElementById("clearAll");

clearAllButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all tasks?")) { 
        taskList.innerHTML = "";   
    }
});

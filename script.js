const taskInput = document.getElementById("taskInput");   /* where user types the task */
const addButton = document.getElementById("addButton");   /* user clicks to add a new task */
const taskList = document.getElementById("taskList");     /* where task will be displayed as list items */

addButton.addEventListener("click", () => {               /* adds event listener for the "click" event on the "Add task" button. when button is clicked, code inside event listener is executed */
    const taskValue = taskInput.value.trim();             /* retrives value from input field */   /* trim() removes any leading or trailing whitespace */

    if(taskValue === "") {                                /* if task field is empty it will show an alert */
        alert("Please add a task!");
        return;
    }

    const listItem = document.createElement("li");        /* create liast where tasks will be added */
    listItem.className = "taskItem";                      /*  */

    listItem.innerHTML = `                               
    <span>${taskValue}</span>                    
    <div>
    <button class="completeButton">Complete</button>   
    <button class="deleteButton">Delete</button>         
    </div>
    `;

    taskList.appendChild(listItem);                       /* makes the task appear on the page */
    taskInput.value = "";                                 /* after adding the task, the task field will be empty, ready for next task to be entered */
});

taskList.addEventListener("click", (e) => {               /* click event is handled for all child elements */
    const target = e.target;                              /* determines which specific element within the taskList was clicked */    /* e.target gives gives the clicked element */

    if(target.classList.contains("completeButton")) {     /* checks if clicked element has the class completeButton, meaning the user clicked the "complete" button */
        const taskItem = target.parentElement.parentElement;   /* target.parentElement refers to actual <li> element (task item) */    
        taskItem.classList.toggle("completed");                /* toggles the completed class on the task item */ 
    }
 
    if(target.classList.contains("deleteButton")) {        /*  checks if clicked element has the class deleteButton, meaning the user clicked the "delete" button */
        const taskItem = target.parentElement.parentElement;    /* finds parent <li> element of the clicked "delete" button */ 
        taskItem.remove();                                      /* removes task item from the list */ 
    }
});

const clearAllButton = document.getElementById("clearAll");

clearAllButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all tasks?")) {  // Optional confirmation
        taskList.innerHTML = "";    // Clears all tasks
    }
});

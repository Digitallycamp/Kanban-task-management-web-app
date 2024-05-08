// import { tasks } from "./data.js";
import tasks from "./data.js"
const task_list = document.querySelector('.task_list')
const no_of_items = document.querySelector('.no_of-items')



function showTask(){
    /** @description  no_of_items.textContent assigns the length the task to the no_of_items dom elemenet */
    no_of_items.textContent= `(${tasks.length})`
    let taskElem ='';
    tasks.forEach((task)=> {

        const completed = task.subtask.filter((statu)=> statu.status==='completed')

        taskElem += `

        <div class="task">
            <h3>${task.title}</h3>
            <p><span> ${completed.length }<span> of <span>${task.subtask.length}<span> subtask</p>
        </div>

        `;

        task_list.innerHTML= taskElem

    })

}

showTask()

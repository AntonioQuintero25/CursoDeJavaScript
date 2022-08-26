function addTasks()
{
    const taksTitle = document.querySelector('#task-title').value;
    if(taksTitle)
    {
        const template = document.querySelector(".template");
        const newTaks = template.cloneNode(true);
        newTaks.querySelector(".task-title").textContent = taksTitle;

        newTaks.classList.remove("template");
        newTaks.classList.remove("hide");

        const list = document.querySelector('#tasks-list');
        list.appendChild(newTaks);

        const removeBtn = newTaks.querySelector(".remove-btn").addEventListener('click', function(){
            removeTaks(this);
        });

        const doneBtn = newTaks.querySelector('.done-btn').addEventListener('click',function(){
            completeTask(this);
        });

        document.querySelector('#task-title').value = "";
    }
}

function removeTaks(taks){
    taks.parentNode.remove(true);
}
function completeTask(taks)
{
    const taskToComplete = taks.parentNode;
    taskToComplete.classList.toggle("done");
}

const Addbtn = document.querySelector('#add-btn');

Addbtn.addEventListener('click', function(e){

    e.preventDefault();

    addTasks();

});
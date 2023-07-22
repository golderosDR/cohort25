
//button
const addTaskButton = document.getElementById('addTask');

//input
const task = document.getElementById('taskInput');
//list
const taskListOl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask(){

const taskName = task.value.trim();
if(taskName){
    const li  = document.createElement('li');
    const buttonDone = document.createElement('button');
    li.innerHTML = `<span>${taskName}</span>`;
    buttonDone.style.color = 'red';
    buttonDone.style.marginLeft = '20px';
    buttonDone.style.marginTop = '5px';
    buttonDone.innerHTML = 'Done';
    taskListOl.append(li);
    li.appendChild(buttonDone);


    buttonDone.onclick = crossTask;
    function crossTask() {
    li.style.textDecoration = "line-through"
    }
}

}





/*
Дописать реализацию приложения TodoList: 
добавить кнопку, которая перечёркивает дело (делает его сделанным);
(Advanced ***)

Дописать стилистику приложения по своему вкусу;
*/
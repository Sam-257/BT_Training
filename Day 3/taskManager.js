const $ = (id) => document.getElementById(id);
let tasks = [];

const displayTasks = () => {
    let text = ''
    for(let i in tasks){
        text += (parseInt(i)+1) + ') ' + tasks[i] + '\n';
    }
    $('output').value = text;
}

const addTask = () => {
    tasks.push(prompt('Enter Your Task'));
    displayTasks();
}

const deleteTask = () => {
    let index = parseInt(prompt('Enter the index'));
    if(index < 1 || isNaN(index)){
        alert('Enter a valid index');
        return;
    }
    tasks.splice((index- 1),1);
    displayTasks();
}

window.onload= function(){
    $('addTask').onclick= addTask;
    $('deleteTask').onclick= deleteTask;
}
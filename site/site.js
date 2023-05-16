const textInput = document.getElementById("input-box");
const tasksList = document.getElementById("tasks-list");


function addTask(){
    if(inputbox.value === ''){
        alert('You must input something to continue!')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        taskslist.append(li)
    }
};
window.onload = function() {
    onReady();
}

function onReady() { 
//Adding Initial State
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');      
//creating New To Do Function
    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
//falsy so that it doesnt allow empty todos
        if (!newToDoText.value) { return; }
//declare using object literal notation what each object will be
        toDos.push( {
            title: newToDoText.value,
            complete:false 
        });
        newToDoText.value = '';
        console.log(toDos);
  renderTheUI();

//clear the input text after pushed
        newToDoText.value = ''; 
    }

//-->UserInterfaceInteraction--------

function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      let deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'delete';
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      deleteButton.onclick = () => {
         toDoList.removeChild(newLi);
         }
 //addClass
      newLi.className = "mdl-list__item";
      deleteButton.className = "mdl-button mdl-js-button mdl-button--accent";
    });
    }
   //add event listener
   addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
}); 
}

window.onload = function() {
    onReady();
}

function onReady() {
    let id = 0; //counter variable?
//Adding Initial State
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');      
//creating New To Do Function
    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
//falsy so that it doesnt allow empty todos
        if (!newToDoText.value) { return; }
//declare using object literal notation what each object will be
        toDos.push( {
            title: newToDoText.value,
            complete: false,
            id: id //added Key
        });
        id++ //feature
        newToDoText.value = '';
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
      console.log(toDos);
      deleteButton.onclick = () => {
         toDos = toDos.filter((item) => item.id !== toDo.id)
        renderTheUI();
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
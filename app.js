window.onload = function() {
    onReady();
};
//select DOM Elements with id
function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
//add event listener
    addToDoForm.addEventListener('submit', () => {
       event.preventDefault(); 
       //get the text input
       let title = newToDoText.value;
       //create a new li
       let newLi = document.createElement('li');
       newLi.className = "mdl-list__item";
       // create a new input
       let checkbox = document.createElement('input');
       //set the input's type to checkbox
       checkbox.type = "checkbox";
       checkbox.className = "mdl-checkbox__input" 
       checkbox.id = "list-checkbox-1"
       // add a delete button
       let deleteButton = document.createElement('button');
       //add text to the button
       deleteButton.innerHTML = 'delete';
       deleteButton.className = "mdl-button mdl-js-button mdl-button--accent";
       //set the title
       newLi.textContent = title;
       //attach the checkbox and delete button to the li
       newLi.appendChild(checkbox);
       newLi.appendChild(deleteButton);
       //onclick remove li
       deleteButton.onclick = () => {
        toDoList.removeChild(newLi);
       }
       //attach the li to the ul
       toDoList.appendChild(newLi);
       //remove after submit empty input
       newToDoText.value = '';
    });
}
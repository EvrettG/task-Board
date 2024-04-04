// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
$( "#datepicker" ).datepicker();


// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    event.preventDefault();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function(){
    $('#addTask').click(function(){
      $('#exampleModal').modal('show');
    });
  
    $('#saveCardBtn').click(function(){
      var title = $('#title').val();
      var date = $('#date').val();
      var description = $('#description').val();
      
      // Creating a new card
      var cardHtml = '<div class="card mt-3">';
      cardHtml += '<div class="card-body">';
      cardHtml += '<h5 class="card-title">' + title + '</h5>';
      cardHtml += '<h6 class="card-subtitle mb-2 text-muted">' + date + '</h6>';
      cardHtml += '<p class="card-text">' + description + '</p>';
      cardHtml += '</div></div>';
      
      $('#cardsContainer').append(cardHtml);
      
      // Clearing form inputs
      $('#title').val('');
      $('#date').val('');
      $('#description').val('');
      
      $('#exampleModal').modal('hide');
    });
  });
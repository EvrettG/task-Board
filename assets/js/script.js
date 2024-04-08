// Retrieve tasks and nextId from localStorage
// let taskList = JSON.parse(localStorage.getItem("tasks"));
// let nextId = JSON.parse(localStorage.getItem("nextId"));


// close button for modal
$('.close').on('click', function() {
  $('#exampleModal').modal('hide');
        // Clearing form inputs
        $('#title').val('');
        $('#date').val('');
        $('#description').val('');
        
        $('#exampleModal').modal('hide');
});

// Todo: create a function to generate a unique task id
function generateTaskId() {
}

// Todo: create a function to create a task card
function createTaskCard(task) {
}

// Todo: create a function to render the task list and make cards draggable
function makeDraggable() {
  $('.drag').draggable({
    connectToSortable: ".taskContainer",
    revert: "invalid",
    stack: ".container"
  });
}

function renderTaskList() {
  let existingtasks = JSON.parse(localStorage.getItem('tasks')) || [];
   // Loop through existing tasks and append to corresponding container
  existingtasks.forEach(function(task) {
    let taskHtml = '<div class="task drag mt-3 w-50 task-card "><h3>' + task.title + '</h3><p>' + task.date + '</p><p>' + task.description + '</p><button class="deleteBtn">Delete</button></div>';
    $('#' + task.containerId).append(taskHtml);
  });

    makeDraggable();
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(title){
  let existingtasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let updatedtasks = existingtasks.filter(function(task) {
      return task.title.trim() !== title.trim(); // Trim whitespace from the title for comparison
    });
    localStorage.setItem('tasks', JSON.stringify(updatedtasks));
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
 

}


// Function to save task and container ID to local storage
function savetaskToLocalStorage(title, date, description, containerId) {
  // Get existing tasks from local storage or initialize empty array
  let existingtasks = JSON.parse(localStorage.getItem('tasks')) || [];
  // Add new task to array
  existingtasks.push({ title: title, date: date, description: description, containerId: containerId });
  // Save updated array back to local storage
  localStorage.setItem('tasks', JSON.stringify(existingtasks));
}




// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function(){


    // show's / reveals the modal
    $('#addTask').click(function(){
      $('#exampleModal').modal('show');
    });
    // makes datefield a date picker
    $( "#datepicker" ).datepicker();

    renderTaskList();

    //creates task on valid save 
    $('#saveTaskBtn').click(function(){
      let title = $('#title').val();
      if (title= ''){
        alert('Please enter a valid title')
      }
      let date = $('#datepicker').val();
      if (date= ''){
        alert('Please enter a valid date')
      }
      let description = $('#description').val();
      if (description= ''){
        alert('Please enter a valid description')
      }
      
      // Creating a new card
      let taskHtml = '<div class="task drag mt-3 w-50 task-card"><h4>' + title + '</h4><p>' + date + '</p><p>' + description + '</p><button class="deleteBtn">Delete</button></div>';
     
       // Append task to first container
       $('#task1').append(taskHtml);


      // Save task and container ID to local storage
      savetaskToLocalStorage(title, date, description, 'task1');
      
      // calls drappable function and appends to task card
      makeDraggable();

      // Clearing form inputs
      $('#title').val('');
      $('#date').val('');
      $('#description').val('');
      
      $('#exampleModal').modal('hide');

      
      makeDraggable();
    });
    // Delete task Button Click Event using Event Delegation
    $('.taskContainer').on('click', '.deleteBtn', function() {
      let title = $(this).siblings('h3').text().trim(); // Get the title of the task
      $(this).parent('.task').remove(); // Remove the task from DOM
      handleDeleteTask(title); // Remove the task from local storage
    });
    

    $(".taskContainer").sortable({
    connectWith: ".taskContainer",
    tolerance: "pointer",
    revert: "true",
    update: function(event, ui) {
      // Update container ID in local storage when sorting
      updateContainerInLocalStorage(ui.item);
    }
    });

    // Function to update container ID in local storage when sorting
    function updateContainerInLocalStorage(item) {
    let title = item.find('h3').text().trim(); // Get the title of the task being sorted
    let containerId = item.parent().attr('id'); // Get the ID of the container the task was dragged into
    let existingtasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Find the task in existing tasks array and update its containerId
    existingtasks.forEach(function(task) {
      if (task.title.trim() === title) {
        task.containerId = containerId;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(existingtasks));
    }



  });

  makeDraggable();


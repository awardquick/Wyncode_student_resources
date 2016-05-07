$(document).on("ready page:load", ready);

function ready() {
  $('#new_task').on('ajax:success', newTask);
  
  function newTask(event, data) {
    $('#tasks').append(data);
    $('#task_name').val('');
  }
}



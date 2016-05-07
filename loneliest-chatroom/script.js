$(document).on("ready page:load", function() {

  var listOfMeNames = ["Me", "Myself", "I"];
  var i = 0;

  function getTime(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    time = hours + ":" + minutes;
    // console.log(time);
    return time;
  };

  function getMsgBody() {
    return $('#new-message-body').val();
  };

  function postMessage(msg, userName){
    // var msg = $('#new-message-body').val();
    // console.log(msg);
    $('#conversation').append("<li class='message'>\
    <a class='delete' href='#'>Delete</a>\
    <h3 class='author'>"+ userName + "</h3>\
    <p class='message-body'>" + msg + "</p>\
    <span class='timestamp'>" + getTime() + "</span>\
    </li>");
    $('#new-message-body').val('');
  };

  function getJoke() {
    $.get('http://api.icndb.com/jokes/random', function(args) {
      var joke = args.value.joke //[0].value.joke
      // console.log(joke);
      // return joke;
      postMessage(joke, "Internet");
    });
  };

  $('#new-message-button').on('click', function(){
    postMessage(getMsgBody(), listOfMeNames[i % 3]);
    i++;
  });

  $('#new-message-body').on('keypress', function(e){
    if(e.which === 13){
      e.preventDefault();
      postMessage(getMsgBody(), listOfMeNames[i % 3]);
      $('#new-message-body').val('');
      i++;
    };
  });

  $('#lonely').on('click', function(){
    getJoke();
  });

  $('body').on('click', 'a.delete', function(){
    // console.log($(this));
    $(this).parent().remove();
  });


});

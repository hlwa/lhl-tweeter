// ensure the DOM has loaded.
$(document).ready(function() {
  // register an event to the input area;
  $("#tweet-text").on('keypress', function() {
    const inputLengh = $(this).val().length + 1;
    const counter = $(this).parent().get(0).counter;
    counter.innerText = inputLengh;
  });
});
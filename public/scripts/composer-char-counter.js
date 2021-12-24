// ensure the DOM has loaded.
$(document).ready(function() {
  
  // define an action for the event;
const textArea = $("#tweet-text");
  const textAction = () =>{//better add another event just in case user paste some content in
    const inputLengh = $("#tweet-text").val().length;
    const counter = $("#tweet-text").parent().get(0).counter;
    $(counter).css('color', 'slategrey');
    //set the value of counter
    counter.innerText = 140 - inputLengh;
    if (counter.innerText < 0) {
      $(counter).css('color', 'red');
    }
  };
  // register action to the keyup, paste, cut event to the input area;
  $("#tweet-text").on('keyup', textAction);
  $("#tweet-text").bind('paste', textAction);
  $("#tweet-text").bind('cut', textAction);

});
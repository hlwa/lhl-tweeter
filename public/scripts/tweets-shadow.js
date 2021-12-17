// ensure the DOM has loaded.
$(document).ready(function() {
  // register two pair of events to the tweets icon area, when mouse over/out, the color and cursor will change;
  const btn = $("button");
  $(btn).on('mouseover', function() {
    $(this).css("cursor", 'hand');
    $(this).css("color", 'pink');
  });
  $(btn).on('mouseout', function() {
    $(this).css("cursor", 'pointer');
    $(this).css("color", '');
  });

  //register an event that when click the arrow, the page will scrow down to input area;
});
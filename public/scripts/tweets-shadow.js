// ensure the DOM has loaded.
$(document).ready(function() {
  // register two events to the tweets area, when mouse over/out, the shadow will on/off;
  $(".tweet-list").on('mouseover', function() {
    $(this).css("box-shadow", '4px 4px slategrey');
  });

  $(".tweet-list").on('mouseout', function() {
    $(this).css("box-shadow", '');
  });

  // register two pair of events to the tweets icon area, when mouse over/out, the color and cursor will change;
  const obj = $("#icon i");
  for (const icon of obj) {
    $(icon).on('mouseover', function() {
      $(this).css("cursor", 'hand');
      $(this).css("color", 'orange');
    });
    $(icon).on('mouseout', function() {
      $(this).css("cursor", 'pointer');
      $(this).css("color", '');
    });
  }
});
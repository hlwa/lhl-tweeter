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

  //register an event that when click the arrow, the page will scrow down to tweets area;
  const arrow = $('nav').find('i');
  $(arrow).on('click', function() {
    console.log(arrow);
    const scrollOffset = $("#form").offset(); //get offset of form，includes top and left
    $("body,html").animate({
      scrollTop:scrollOffset.top //let scrollTop of body equals to the top of form，page will scroll
    },0);
  });

  // register two pair of events to the arrow, when mouse over/out, the color and cursor will change;
  $(arrow).on('mouseover', function() {
    $(this).css("cursor", 'hand');
    $(this).css("color", 'pink');
  });
  $(arrow).on('mouseout', function() {
    $(this).css("cursor", 'pointer');
    $(this).css("color", '');
  });
});
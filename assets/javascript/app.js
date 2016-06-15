// li 'on click' strike through
$('li').click(function() {
  $(this).toggleClass("checked");
});

// 'click' the X to remove the todo
$('span').click(function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});
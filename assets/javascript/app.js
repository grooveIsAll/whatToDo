const $input = $('input[type="text"]');
// li 'on click' strike through
$('ul').on('click', 'li', function() {
  $(this).toggleClass("checked");
});

// 'click' the X to remove the todo
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$input.on('keypress', function(event) {
  if(event.which === 13) {
    let todoText = $(this).val();
    $(this).val('');
    $('ul').append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i> </span> ' + todoText + '</ul>');
  }
});

$('.fa-plus').on('click', function() {
  $input.fadeToggle();
});
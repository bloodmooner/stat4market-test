
$(document).ready(function(){

  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 100
    });
    return false;
  });

});


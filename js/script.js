
$(document).ready(function(){

  // Mobile Menu START

  let closeMenuButton = $(".header-mobile__close");
  let openMenuButton = $(".burger");
  let menuContainer = $(".header-mobile");
  let menuLinks = $(".header-mobile__link");


  openMenuButton.click(function() {
    menuContainer.addClass("header-mobile_active");
  });

  closeMenuButton.click(function() {
    menuContainer.removeClass("header-mobile_active");
  });

  menuLinks.click(function() {
    menuContainer.removeClass("header-mobile_active");
  });


  // Mobile Menu END

  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 100
    });
    return false;
  });

});


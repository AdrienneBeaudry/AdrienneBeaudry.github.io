$(document).ready(function () {

    // hide .navbar first
    $(".navbar-fixed").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 800) {
                $('.navbar-fixed').fadeIn('fast');
            } else {
                $('.navbar-fixed').fadeOut('fast');
            }
        });
    });
    
    
     $('.button-collapse').sideNav({
      menuWidth: 350, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
      
    
});


/**
 * @exports MyModule
 */

var MyModule = {

  /**
   * Say hello.
   * @method init
   * @memberof MyModule
   */
  init: function() {
    console.log('Hello, 1orld!');
    
    const tabletWidth = 640;

    // Executes callback in a debounced resize window event
    function resizeWindow(callback) {
      var resizeTimer;

      $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          callback();
        }, 300);
      });
    }

    // activate dropdown
    $('.js-nav-dropdown').mouseenter(function(){
      $(this).find('.js-nav-dropdown-anchor').toggleClass('is-active');
      $(this).find('.js-nav-dropdown-menu').toggleClass('is-active');
    });

    // close dropdown
    $('.js-nav-dropdown').mouseleave(function(){
      $(this).find('.js-nav-dropdown-anchor').toggleClass('is-active');
      $(this).find('.js-nav-dropdown-menu').toggleClass('is-active');
    });

    // Toggle navigation
    function toggleNavigation() {
      $('.nav-icon').toggleClass('is-active');
      $('html').toggleClass('is-unscrollable');
      $('.header--mobile').toggleClass('is-active');
      $('.navigation--small').toggleClass('is-active');
    }


    // Toggle nav menu
    $('.nav-icon').click(function() {
      toggleNavigation();
    });

    resizeWindow(function(){
      if ($(window).width() >= tabletWidth && $('.nav-icon').hasClass('is-active')) {
        toggleNavigation();
      }
    });
  }
};

export { MyModule };

'use strict';

/**
 * @exports navigation
 */

const navigation = {

  /**
   * Say hello.
   * @method init
   * @memberof MyModule
   */
  init: function() {
    
    const tabletWidth = 1024;

    // Executes callback in a debounced resize window event
    function resizeWindow(callback) {
      let resizeTimer;

      $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          callback();
        }, 300);
      });
    }

    // activate dropdown
    $('.js-nav-dropdown').mouseenter(function(){
      $(this).find('.js-nav-dropdown-anchor').delay(1).toggleClass('is-active');
      $(this).find('.js-nav-dropdown-menu').toggleClass('is-available').delay(1).queue(function(next) {
        $('.js-nav-dropdown-menu').toggleClass('is-visible')
        next();
      });
    });

    // close dropdown
    $('.js-nav-dropdown').mouseleave(function(){
      $(this).find('.js-nav-dropdown-anchor').toggleClass('is-active');
      $(this).find('.js-nav-dropdown-menu').toggleClass('is-available is-visible');
    });

    // Toggle navigation
    function toggleNavigation() {
      $('.nav-icon').toggleClass('is-active');
      $('body').toggleClass('is-unscrollable');
      $('html').toggleClass('is-unscrollable');
      $('.header--mobile').toggleClass('is-active');
      $('.navigation--small').toggleClass('is-available').delay(1).queue(function(next) {
        $('.navigation--small').toggleClass('is-visible')
        next();
      });
      $('.logo').toggleClass('is-small');
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

export { navigation };

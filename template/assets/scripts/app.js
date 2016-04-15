(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * This is the entrypoint to the JS in your app.
 * ES6 features are supported inside this file.
 */

'use strict';

var _modulesMyModuleJs = require('./modules/my-module.js');

_modulesMyModuleJs.MyModule.init();

},{"./modules/my-module.js":2}],2:[function(require,module,exports){

/**
 * @exports MyModule
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var MyModule = {

  /**
   * Say hello.
   * @method init
   * @memberof MyModule
   */
  init: function init() {

    var tabletWidth = 1024;

    // Executes callback in a debounced resize window event
    function resizeWindow(callback) {
      var resizeTimer;

      $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          callback();
        }, 300);
      });
    }

    // activate dropdown
    $('.js-nav-dropdown').mouseenter(function () {
      $(this).find('.js-nav-dropdown-anchor').toggleClass('is-active');
      $(this).find('.js-nav-dropdown-menu').toggleClass('is-active');
    });

    // close dropdown
    $('.js-nav-dropdown').mouseleave(function () {
      $(this).find('.js-nav-dropdown-anchor').toggleClass('is-active');
      $(this).find('.js-nav-dropdown-menu').toggleClass('is-active');
    });

    // Toggle navigation
    function toggleNavigation() {
      $('.nav-icon').toggleClass('is-active');
      $('body').toggleClass('is-unscrollable');
      $('.header--mobile').toggleClass('is-active');
      $('.navigation--small').toggleClass('is-active');
      $('.logo').toggleClass('is-small');
    }

    // Toggle nav menu
    $('.nav-icon').click(function () {
      toggleNavigation();
    });

    resizeWindow(function () {
      if ($(window).width() >= tabletWidth && $('.nav-icon').hasClass('is-active')) {
        toggleNavigation();
      }
    });
  }
};

exports.MyModule = MyModule;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaXN0cmF0ZWd5bGFicy9TaXRlcy9pc2wvd2xhL3NjcmlwdHMvYXBwLmpzIiwiL1VzZXJzL2lzdHJhdGVneWxhYnMvU2l0ZXMvaXNsL3dsYS9zY3JpcHRzL21vZHVsZXMvbXktbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztpQ0NLeUIsd0JBQXdCOztBQUdqRCw0QkFBUyxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0hoQixJQUFJLFFBQVEsR0FBRzs7Ozs7OztBQU9iLE1BQUksRUFBRSxnQkFBVzs7QUFFZixRQUFNLFdBQVcsR0FBRyxJQUFJLENBQUM7OztBQUd6QixhQUFTLFlBQVksQ0FBQyxRQUFRLEVBQUU7QUFDOUIsVUFBSSxXQUFXLENBQUM7O0FBRWhCLE9BQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVc7QUFDaEMsb0JBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxQixtQkFBVyxHQUFHLFVBQVUsQ0FBQyxZQUFXO0FBQ2xDLGtCQUFRLEVBQUUsQ0FBQztTQUNaLEVBQUUsR0FBRyxDQUFDLENBQUM7T0FDVCxDQUFDLENBQUM7S0FDSjs7O0FBR0QsS0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVU7QUFDekMsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqRSxPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hFLENBQUMsQ0FBQzs7O0FBR0gsS0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVU7QUFDekMsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqRSxPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2hFLENBQUMsQ0FBQzs7O0FBR0gsYUFBUyxnQkFBZ0IsR0FBRztBQUMxQixPQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLE9BQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxPQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDOUMsT0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELE9BQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDcEM7OztBQUlELEtBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBVztBQUM5QixzQkFBZ0IsRUFBRSxDQUFDO0tBQ3BCLENBQUMsQ0FBQzs7QUFFSCxnQkFBWSxDQUFDLFlBQVU7QUFDckIsVUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDNUUsd0JBQWdCLEVBQUUsQ0FBQztPQUNwQjtLQUNGLENBQUMsQ0FBQztHQUNKO0NBQ0YsQ0FBQzs7UUFFTyxRQUFRLEdBQVIsUUFBUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFRoaXMgaXMgdGhlIGVudHJ5cG9pbnQgdG8gdGhlIEpTIGluIHlvdXIgYXBwLlxuICogRVM2IGZlYXR1cmVzIGFyZSBzdXBwb3J0ZWQgaW5zaWRlIHRoaXMgZmlsZS5cbiAqL1xuXG5pbXBvcnQgeyBNeU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9teS1tb2R1bGUuanMnO1xuXG5cbk15TW9kdWxlLmluaXQoKTsiLCJcbi8qKlxuICogQGV4cG9ydHMgTXlNb2R1bGVcbiAqL1xuXG52YXIgTXlNb2R1bGUgPSB7XG5cbiAgLyoqXG4gICAqIFNheSBoZWxsby5cbiAgICogQG1ldGhvZCBpbml0XG4gICAqIEBtZW1iZXJvZiBNeU1vZHVsZVxuICAgKi9cbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3QgdGFibGV0V2lkdGggPSAxMDI0O1xuXG4gICAgLy8gRXhlY3V0ZXMgY2FsbGJhY2sgaW4gYSBkZWJvdW5jZWQgcmVzaXplIHdpbmRvdyBldmVudFxuICAgIGZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyhjYWxsYmFjaykge1xuICAgICAgdmFyIHJlc2l6ZVRpbWVyO1xuXG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZXIpO1xuICAgICAgICByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIGRyb3Bkb3duXG4gICAgJCgnLmpzLW5hdi1kcm9wZG93bicpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuZmluZCgnLmpzLW5hdi1kcm9wZG93bi1hbmNob3InKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5qcy1uYXYtZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIGNsb3NlIGRyb3Bkb3duXG4gICAgJCgnLmpzLW5hdi1kcm9wZG93bicpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuZmluZCgnLmpzLW5hdi1kcm9wZG93bi1hbmNob3InKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5qcy1uYXYtZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSBuYXZpZ2F0aW9uXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2aWdhdGlvbigpIHtcbiAgICAgICQoJy5uYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnaXMtdW5zY3JvbGxhYmxlJyk7XG4gICAgICAkKCcuaGVhZGVyLS1tb2JpbGUnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKCcubmF2aWdhdGlvbi0tc21hbGwnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKCcubG9nbycpLnRvZ2dsZUNsYXNzKCdpcy1zbWFsbCcpO1xuICAgIH1cblxuXG4gICAgLy8gVG9nZ2xlIG5hdiBtZW51XG4gICAgJCgnLm5hdi1pY29uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICB0b2dnbGVOYXZpZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICByZXNpemVXaW5kb3coZnVuY3Rpb24oKXtcbiAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSB0YWJsZXRXaWR0aCAmJiAkKCcubmF2LWljb24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgdG9nZ2xlTmF2aWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBNeU1vZHVsZSB9O1xuIl19

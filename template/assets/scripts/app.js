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
    console.log('Hello, 1orld!');

    var tabletWidth = 640;

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
      $('html').toggleClass('is-unscrollable');
      $('.header--mobile').toggleClass('is-active');
      $('.navigation--small').toggleClass('is-active');
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2xpdmlhL3Byb2plY3RzL3dsYS9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9vbGl2aWEvcHJvamVjdHMvd2xhL3NjcmlwdHMvbW9kdWxlcy9teS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O2lDQ0t5Qix3QkFBd0I7O0FBR2pELDRCQUFTLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSGhCLElBQUksUUFBUSxHQUFHOzs7Ozs7O0FBT2IsTUFBSSxFQUFFLGdCQUFXO0FBQ2YsV0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFN0IsUUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDOzs7QUFHeEIsYUFBUyxZQUFZLENBQUMsUUFBUSxFQUFFO0FBQzlCLFVBQUksV0FBVyxDQUFDOztBQUVoQixPQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFXO0FBQ2hDLG9CQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUIsbUJBQVcsR0FBRyxVQUFVLENBQUMsWUFBVztBQUNsQyxrQkFBUSxFQUFFLENBQUM7U0FDWixFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQ1QsQ0FBQyxDQUFDO0tBQ0o7OztBQUdELEtBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFVO0FBQ3pDLE9BQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakUsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNoRSxDQUFDLENBQUM7OztBQUdILEtBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFVO0FBQ3pDLE9BQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakUsT0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNoRSxDQUFDLENBQUM7OztBQUdILGFBQVMsZ0JBQWdCLEdBQUc7QUFDMUIsT0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QyxPQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsT0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlDLE9BQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNsRDs7O0FBSUQsS0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFXO0FBQzlCLHNCQUFnQixFQUFFLENBQUM7S0FDcEIsQ0FBQyxDQUFDOztBQUVILGdCQUFZLENBQUMsWUFBVTtBQUNyQixVQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUM1RSx3QkFBZ0IsRUFBRSxDQUFDO09BQ3BCO0tBQ0YsQ0FBQyxDQUFDO0dBQ0o7Q0FDRixDQUFDOztRQUVPLFFBQVEsR0FBUixRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogVGhpcyBpcyB0aGUgZW50cnlwb2ludCB0byB0aGUgSlMgaW4geW91ciBhcHAuXG4gKiBFUzYgZmVhdHVyZXMgYXJlIHN1cHBvcnRlZCBpbnNpZGUgdGhpcyBmaWxlLlxuICovXG5cbmltcG9ydCB7IE15TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL215LW1vZHVsZS5qcyc7XG5cblxuTXlNb2R1bGUuaW5pdCgpOyIsIlxuLyoqXG4gKiBAZXhwb3J0cyBNeU1vZHVsZVxuICovXG5cbnZhciBNeU1vZHVsZSA9IHtcblxuICAvKipcbiAgICogU2F5IGhlbGxvLlxuICAgKiBAbWV0aG9kIGluaXRcbiAgICogQG1lbWJlcm9mIE15TW9kdWxlXG4gICAqL1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnSGVsbG8sIDFvcmxkIScpO1xuICAgIFxuICAgIGNvbnN0IHRhYmxldFdpZHRoID0gNjQwO1xuXG4gICAgLy8gRXhlY3V0ZXMgY2FsbGJhY2sgaW4gYSBkZWJvdW5jZWQgcmVzaXplIHdpbmRvdyBldmVudFxuICAgIGZ1bmN0aW9uIHJlc2l6ZVdpbmRvdyhjYWxsYmFjaykge1xuICAgICAgdmFyIHJlc2l6ZVRpbWVyO1xuXG4gICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZXIpO1xuICAgICAgICByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGFjdGl2YXRlIGRyb3Bkb3duXG4gICAgJCgnLmpzLW5hdi1kcm9wZG93bicpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuZmluZCgnLmpzLW5hdi1kcm9wZG93bi1hbmNob3InKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5qcy1uYXYtZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIGNsb3NlIGRyb3Bkb3duXG4gICAgJCgnLmpzLW5hdi1kcm9wZG93bicpLm1vdXNlbGVhdmUoZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuZmluZCgnLmpzLW5hdi1kcm9wZG93bi1hbmNob3InKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5qcy1uYXYtZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSBuYXZpZ2F0aW9uXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2aWdhdGlvbigpIHtcbiAgICAgICQoJy5uYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJ2h0bWwnKS50b2dnbGVDbGFzcygnaXMtdW5zY3JvbGxhYmxlJyk7XG4gICAgICAkKCcuaGVhZGVyLS1tb2JpbGUnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKCcubmF2aWdhdGlvbi0tc21hbGwnKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG5cbiAgICAvLyBUb2dnbGUgbmF2IG1lbnVcbiAgICAkKCcubmF2LWljb24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRvZ2dsZU5hdmlnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJlc2l6ZVdpbmRvdyhmdW5jdGlvbigpe1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IHRhYmxldFdpZHRoICYmICQoJy5uYXYtaWNvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICB0b2dnbGVOYXZpZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IE15TW9kdWxlIH07XG4iXX0=

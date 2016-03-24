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
      $('.js-nav-dropdown-anchor').toggleClass('is-active');
    });

    // close dropdown
    $('.js-nav-dropdown').mouseleave(function () {
      $('.js-nav-dropdown-anchor').toggleClass('is-active');
    });

    // Toggle navigation
    function toggleNavigation() {
      $('.nav-icon').toggleClass('is-active');
      $('body').toggleClass('is-unscrollable');
      $('.navigation--small').toggleClass('is-available');
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2xpdmlhL3Byb2plY3RzL3dsYS9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9vbGl2aWEvcHJvamVjdHMvd2xhL3NjcmlwdHMvbW9kdWxlcy9teS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O2lDQ0t5Qix3QkFBd0I7O0FBR2pELDRCQUFTLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSGhCLElBQUksUUFBUSxHQUFHOzs7Ozs7O0FBT2IsTUFBSSxFQUFFLGdCQUFXO0FBQ2YsV0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFN0IsUUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDOzs7QUFHeEIsYUFBUyxZQUFZLENBQUMsUUFBUSxFQUFFO0FBQzlCLFVBQUksV0FBVyxDQUFDOztBQUVoQixPQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFXO0FBQ2hDLG9CQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDMUIsbUJBQVcsR0FBRyxVQUFVLENBQUMsWUFBVztBQUNsQyxrQkFBUSxFQUFFLENBQUM7U0FDWixFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQ1QsQ0FBQyxDQUFDO0tBQ0o7OztBQUdELEtBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFVO0FBQ3pDLE9BQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN2RCxDQUFDLENBQUM7OztBQUdILEtBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFVO0FBQ3pDLE9BQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN2RCxDQUFDLENBQUM7OztBQUdILGFBQVMsZ0JBQWdCLEdBQUc7QUFDMUIsT0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4QyxPQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDekMsT0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3JEOzs7QUFJRCxLQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVc7QUFDOUIsc0JBQWdCLEVBQUUsQ0FBQztLQUNwQixDQUFDLENBQUM7O0FBRUgsZ0JBQVksQ0FBQyxZQUFVO0FBQ3JCLFVBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQzVFLHdCQUFnQixFQUFFLENBQUM7T0FDcEI7S0FDRixDQUFDLENBQUM7R0FDSjtDQUNGLENBQUM7O1FBRU8sUUFBUSxHQUFSLFFBQVEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBUaGlzIGlzIHRoZSBlbnRyeXBvaW50IHRvIHRoZSBKUyBpbiB5b3VyIGFwcC5cbiAqIEVTNiBmZWF0dXJlcyBhcmUgc3VwcG9ydGVkIGluc2lkZSB0aGlzIGZpbGUuXG4gKi9cblxuaW1wb3J0IHsgTXlNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvbXktbW9kdWxlLmpzJztcblxuXG5NeU1vZHVsZS5pbml0KCk7IiwiXG4vKipcbiAqIEBleHBvcnRzIE15TW9kdWxlXG4gKi9cblxudmFyIE15TW9kdWxlID0ge1xuXG4gIC8qKlxuICAgKiBTYXkgaGVsbG8uXG4gICAqIEBtZXRob2QgaW5pdFxuICAgKiBAbWVtYmVyb2YgTXlNb2R1bGVcbiAgICovXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbywgMW9ybGQhJyk7XG4gICAgXG4gICAgY29uc3QgdGFibGV0V2lkdGggPSA2NDA7XG5cbiAgICAvLyBFeGVjdXRlcyBjYWxsYmFjayBpbiBhIGRlYm91bmNlZCByZXNpemUgd2luZG93IGV2ZW50XG4gICAgZnVuY3Rpb24gcmVzaXplV2luZG93KGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcmVzaXplVGltZXI7XG5cbiAgICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG4gICAgICAgIHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgZHJvcGRvd25cbiAgICAkKCcuanMtbmF2LWRyb3Bkb3duJykubW91c2VlbnRlcihmdW5jdGlvbigpe1xuICAgICAgJCgnLmpzLW5hdi1kcm9wZG93bi1hbmNob3InKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBjbG9zZSBkcm9wZG93blxuICAgICQoJy5qcy1uYXYtZHJvcGRvd24nKS5tb3VzZWxlYXZlKGZ1bmN0aW9uKCl7XG4gICAgICAkKCcuanMtbmF2LWRyb3Bkb3duLWFuY2hvcicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIFRvZ2dsZSBuYXZpZ2F0aW9uXG4gICAgZnVuY3Rpb24gdG9nZ2xlTmF2aWdhdGlvbigpIHtcbiAgICAgICQoJy5uYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnaXMtdW5zY3JvbGxhYmxlJyk7XG4gICAgICAkKCcubmF2aWdhdGlvbi0tc21hbGwnKS50b2dnbGVDbGFzcygnaXMtYXZhaWxhYmxlJyk7XG4gICAgfVxuXG5cbiAgICAvLyBUb2dnbGUgbmF2IG1lbnVcbiAgICAkKCcubmF2LWljb24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRvZ2dsZU5hdmlnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJlc2l6ZVdpbmRvdyhmdW5jdGlvbigpe1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IHRhYmxldFdpZHRoICYmICQoJy5uYXYtaWNvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICB0b2dnbGVOYXZpZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IE15TW9kdWxlIH07XG4iXX0=

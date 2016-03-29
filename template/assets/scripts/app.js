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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvb2xpdmlhL3Byb2plY3RzL3dsYS9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9vbGl2aWEvcHJvamVjdHMvd2xhL3NjcmlwdHMvbW9kdWxlcy9teS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O2lDQ0t5Qix3QkFBd0I7O0FBR2pELDRCQUFTLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDSGhCLElBQUksUUFBUSxHQUFHOzs7Ozs7O0FBT2IsTUFBSSxFQUFFLGdCQUFXOztBQUVmLFFBQU0sV0FBVyxHQUFHLElBQUksQ0FBQzs7O0FBR3pCLGFBQVMsWUFBWSxDQUFDLFFBQVEsRUFBRTtBQUM5QixVQUFJLFdBQVcsQ0FBQzs7QUFFaEIsT0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBVztBQUNoQyxvQkFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFCLG1CQUFXLEdBQUcsVUFBVSxDQUFDLFlBQVc7QUFDbEMsa0JBQVEsRUFBRSxDQUFDO1NBQ1osRUFBRSxHQUFHLENBQUMsQ0FBQztPQUNULENBQUMsQ0FBQztLQUNKOzs7QUFHRCxLQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBVTtBQUN6QyxPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pFLE9BQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDaEUsQ0FBQyxDQUFDOzs7QUFHSCxLQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBVTtBQUN6QyxPQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pFLE9BQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDaEUsQ0FBQyxDQUFDOzs7QUFHSCxhQUFTLGdCQUFnQixHQUFHO0FBQzFCLE9BQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEMsT0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3pDLE9BQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM5QyxPQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsT0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNwQzs7O0FBSUQsS0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFXO0FBQzlCLHNCQUFnQixFQUFFLENBQUM7S0FDcEIsQ0FBQyxDQUFDOztBQUVILGdCQUFZLENBQUMsWUFBVTtBQUNyQixVQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUM1RSx3QkFBZ0IsRUFBRSxDQUFDO09BQ3BCO0tBQ0YsQ0FBQyxDQUFDO0dBQ0o7Q0FDRixDQUFDOztRQUVPLFFBQVEsR0FBUixRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogVGhpcyBpcyB0aGUgZW50cnlwb2ludCB0byB0aGUgSlMgaW4geW91ciBhcHAuXG4gKiBFUzYgZmVhdHVyZXMgYXJlIHN1cHBvcnRlZCBpbnNpZGUgdGhpcyBmaWxlLlxuICovXG5cbmltcG9ydCB7IE15TW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL215LW1vZHVsZS5qcyc7XG5cblxuTXlNb2R1bGUuaW5pdCgpOyIsIlxuLyoqXG4gKiBAZXhwb3J0cyBNeU1vZHVsZVxuICovXG5cbnZhciBNeU1vZHVsZSA9IHtcblxuICAvKipcbiAgICogU2F5IGhlbGxvLlxuICAgKiBAbWV0aG9kIGluaXRcbiAgICogQG1lbWJlcm9mIE15TW9kdWxlXG4gICAqL1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB0YWJsZXRXaWR0aCA9IDEwMjQ7XG5cbiAgICAvLyBFeGVjdXRlcyBjYWxsYmFjayBpbiBhIGRlYm91bmNlZCByZXNpemUgd2luZG93IGV2ZW50XG4gICAgZnVuY3Rpb24gcmVzaXplV2luZG93KGNhbGxiYWNrKSB7XG4gICAgICB2YXIgcmVzaXplVGltZXI7XG5cbiAgICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG4gICAgICAgIHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gYWN0aXZhdGUgZHJvcGRvd25cbiAgICAkKCcuanMtbmF2LWRyb3Bkb3duJykubW91c2VlbnRlcihmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5maW5kKCcuanMtbmF2LWRyb3Bkb3duLWFuY2hvcicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQodGhpcykuZmluZCgnLmpzLW5hdi1kcm9wZG93bi1tZW51JykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gY2xvc2UgZHJvcGRvd25cbiAgICAkKCcuanMtbmF2LWRyb3Bkb3duJykubW91c2VsZWF2ZShmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5maW5kKCcuanMtbmF2LWRyb3Bkb3duLWFuY2hvcicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQodGhpcykuZmluZCgnLmpzLW5hdi1kcm9wZG93bi1tZW51JykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gVG9nZ2xlIG5hdmlnYXRpb25cbiAgICBmdW5jdGlvbiB0b2dnbGVOYXZpZ2F0aW9uKCkge1xuICAgICAgJCgnLm5hdi1pY29uJykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy11bnNjcm9sbGFibGUnKTtcbiAgICAgICQoJy5oZWFkZXItLW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJy5uYXZpZ2F0aW9uLS1zbWFsbCcpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJy5sb2dvJykudG9nZ2xlQ2xhc3MoJ2lzLXNtYWxsJyk7XG4gICAgfVxuXG5cbiAgICAvLyBUb2dnbGUgbmF2IG1lbnVcbiAgICAkKCcubmF2LWljb24nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIHRvZ2dsZU5hdmlnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJlc2l6ZVdpbmRvdyhmdW5jdGlvbigpe1xuICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IHRhYmxldFdpZHRoICYmICQoJy5uYXYtaWNvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICB0b2dnbGVOYXZpZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IE15TW9kdWxlIH07XG4iXX0=

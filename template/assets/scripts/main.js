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
    console.log('Hello, World!');
  }
};

exports.MyModule = MyModule;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvaXN0cmF0ZWd5bGFicy9TaXRlcy9pc2wvd2xhL3NjcmlwdHMvbWFpbi5qcyIsIi9Vc2Vycy9pc3RyYXRlZ3lsYWJzL1NpdGVzL2lzbC93bGEvc2NyaXB0cy9tb2R1bGVzL215LW1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7aUNDS3lCLHdCQUF3Qjs7QUFHakQsNEJBQVMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNIaEIsSUFBSSxRQUFRLEdBQUc7Ozs7Ozs7QUFPYixNQUFJLEVBQUUsZ0JBQVc7QUFDZixXQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0dBQzlCO0NBQ0YsQ0FBQzs7UUFFTyxRQUFRLEdBQVIsUUFBUSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFRoaXMgaXMgdGhlIGVudHJ5cG9pbnQgdG8gdGhlIEpTIGluIHlvdXIgYXBwLlxuICogRVM2IGZlYXR1cmVzIGFyZSBzdXBwb3J0ZWQgaW5zaWRlIHRoaXMgZmlsZS5cbiAqL1xuXG5pbXBvcnQgeyBNeU1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9teS1tb2R1bGUuanMnO1xuXG5cbk15TW9kdWxlLmluaXQoKTsiLCJcbi8qKlxuICogQGV4cG9ydHMgTXlNb2R1bGVcbiAqL1xuXG52YXIgTXlNb2R1bGUgPSB7XG5cbiAgLyoqXG4gICAqIFNheSBoZWxsby5cbiAgICogQG1ldGhvZCBpbml0XG4gICAqIEBtZW1iZXJvZiBNeU1vZHVsZVxuICAgKi9cbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvLCBXb3JsZCEnKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgTXlNb2R1bGUgfTsiXX0=

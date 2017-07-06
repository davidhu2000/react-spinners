(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var calculateRgba = exports.calculateRgba = function calculateRgba(color, opacity) {
    if (color[0] === '#') {
      color = color.slice(1);
    }

    if (color.length === 3) {
      var res = '';
      color.split('').forEach(function (c) {
        res += c;
        res += c;
      });
      color = res;
    }

    var rgbValues = color.match(/.{2}/g).map(function (hex) {
      return parseInt(hex, 16);
    }).join(', ');
    return 'rgba(' + rgbValues + ', ' + opacity + ')';
  };
});
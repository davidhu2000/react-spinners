(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './spinners/BeatLoader', './spinners/BounceLoader', './spinners/ClipLoader', './spinners/DotLoader', './spinners/FadeLoader', './spinners/GridLoader', './spinners/MoonLoader', './spinners/PacmanLoader', './spinners/PulseLoader', './spinners/RingLoader', './spinners/RiseLoader', './spinners/RotateLoader', './spinners/ScaleLoader', './spinners/SkewLoader', './spinners/SquareLoader', './spinners/SyncLoader'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./spinners/BeatLoader'), require('./spinners/BounceLoader'), require('./spinners/ClipLoader'), require('./spinners/DotLoader'), require('./spinners/FadeLoader'), require('./spinners/GridLoader'), require('./spinners/MoonLoader'), require('./spinners/PacmanLoader'), require('./spinners/PulseLoader'), require('./spinners/RingLoader'), require('./spinners/RiseLoader'), require('./spinners/RotateLoader'), require('./spinners/ScaleLoader'), require('./spinners/SkewLoader'), require('./spinners/SquareLoader'), require('./spinners/SyncLoader'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.BeatLoader, global.BounceLoader, global.ClipLoader, global.DotLoader, global.FadeLoader, global.GridLoader, global.MoonLoader, global.PacmanLoader, global.PulseLoader, global.RingLoader, global.RiseLoader, global.RotateLoader, global.ScaleLoader, global.SkewLoader, global.SquareLoader, global.SyncLoader);
    global.index = mod.exports;
  }
})(this, function (module, _BeatLoader, _BounceLoader, _ClipLoader, _DotLoader, _FadeLoader, _GridLoader, _MoonLoader, _PacmanLoader, _PulseLoader, _RingLoader, _RiseLoader, _RotateLoader, _ScaleLoader, _SkewLoader, _SquareLoader, _SyncLoader) {
  'use strict';

  var _BeatLoader2 = _interopRequireDefault(_BeatLoader);

  var _BounceLoader2 = _interopRequireDefault(_BounceLoader);

  var _ClipLoader2 = _interopRequireDefault(_ClipLoader);

  var _DotLoader2 = _interopRequireDefault(_DotLoader);

  var _FadeLoader2 = _interopRequireDefault(_FadeLoader);

  var _GridLoader2 = _interopRequireDefault(_GridLoader);

  var _MoonLoader2 = _interopRequireDefault(_MoonLoader);

  var _PacmanLoader2 = _interopRequireDefault(_PacmanLoader);

  var _PulseLoader2 = _interopRequireDefault(_PulseLoader);

  var _RingLoader2 = _interopRequireDefault(_RingLoader);

  var _RiseLoader2 = _interopRequireDefault(_RiseLoader);

  var _RotateLoader2 = _interopRequireDefault(_RotateLoader);

  var _ScaleLoader2 = _interopRequireDefault(_ScaleLoader);

  var _SkewLoader2 = _interopRequireDefault(_SkewLoader);

  var _SquareLoader2 = _interopRequireDefault(_SquareLoader);

  var _SyncLoader2 = _interopRequireDefault(_SyncLoader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  module.exports = {
    BeatLoader: _BeatLoader2.default,
    BounceLoader: _BounceLoader2.default,
    ClipLoader: _ClipLoader2.default,
    DotLoader: _DotLoader2.default,
    FadeLoader: _FadeLoader2.default,
    GridLoader: _GridLoader2.default,
    MoonLoader: _MoonLoader2.default,
    PacmanLoader: _PacmanLoader2.default,
    PulseLoader: _PulseLoader2.default,
    RingLoader: _RingLoader2.default,
    RiseLoader: _RiseLoader2.default,
    RotateLoader: _RotateLoader2.default,
    ScaleLoader: _ScaleLoader2.default,
    SkewLoader: _SkewLoader2.default,
    SquareLoader: _SquareLoader2.default,
    SyncLoader: _SyncLoader2.default
  };
});
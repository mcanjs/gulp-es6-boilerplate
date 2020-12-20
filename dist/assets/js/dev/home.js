let PORT = 3000;let NODE_ENV = 'development';(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Env = function () {
    function Env() {
        _classCallCheck(this, Env);

        if (NODE_ENV && NODE_ENV === 'development') this.development();else this.production();
    }

    _createClass(Env, [{
        key: 'development',
        value: function development() {
            return console.log('enviropments === development');
        }
    }, {
        key: 'production',
        value: function production() {
            return console.log('enviropments === production');
        }
    }]);

    return Env;
}();

exports.default = Env;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Global = function Global() {
    _classCallCheck(this, Global);

    console.log('global js');
};

exports.default = Global;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Env = require('../../base/_Env');

var _Env2 = _interopRequireDefault(_Env);

var _Global = require('../../base/_Global');

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function Home() {
    _classCallCheck(this, Home);

    new _Env2.default();
    new _Global2.default();
    console.log('Home js');
};

// initial class


exports.default = Home;
new Home();

},{"../../base/_Env":1,"../../base/_Global":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYmFzZS9fRW52LmpzIiwic3JjL2pzL2Jhc2UvX0dsb2JhbC5qcyIsInNyYy9qcy9wYWdlcy9Ib21lL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQXFCLEc7QUFDakIsbUJBQWU7QUFBQTs7QUFDWCxZQUFLLFlBQVksYUFBYSxhQUE5QixFQUNJLEtBQUssV0FBTCxHQURKLEtBR0ksS0FBSyxVQUFMO0FBQ1A7Ozs7c0NBRWM7QUFDWCxtQkFBTyxRQUFRLEdBQVIsQ0FBWSw4QkFBWixDQUFQO0FBQ0g7OztxQ0FFYTtBQUNWLG1CQUFPLFFBQVEsR0FBUixDQUFZLDZCQUFaLENBQVA7QUFDSDs7Ozs7O2tCQWRnQixHOzs7Ozs7Ozs7OztJQ0FBLE0sR0FDakIsa0JBQWU7QUFBQTs7QUFDWCxZQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsQzs7a0JBSGdCLE07Ozs7Ozs7OztBQ0FyQjs7OztBQUNBOzs7Ozs7OztJQUVxQixJLEdBQ2pCLGdCQUFlO0FBQUE7O0FBQ1gsUUFBSSxhQUFKO0FBQ0EsUUFBSSxnQkFBSjtBQUNBLFlBQVEsR0FBUixDQUFZLFNBQVo7QUFDSCxDOztBQUdMOzs7a0JBUnFCLEk7QUFTckIsSUFBSSxJQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIGlmICggTk9ERV9FTlYgJiYgTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgKVxuICAgICAgICAgICAgdGhpcy5kZXZlbG9wbWVudCgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3Rpb24oKTtcbiAgICB9XG5cbiAgICBkZXZlbG9wbWVudCAoKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnZW52aXJvcG1lbnRzID09PSBkZXZlbG9wbWVudCcpO1xuICAgIH1cblxuICAgIHByb2R1Y3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ2Vudmlyb3BtZW50cyA9PT0gcHJvZHVjdGlvbicpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbCBqcycpO1xuICAgIH1cbn0iLCJpbXBvcnQgRW52IGZyb20gJy4uLy4uL2Jhc2UvX0Vudic7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4uLy4uL2Jhc2UvX0dsb2JhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgbmV3IEVudigpO1xuICAgICAgICBuZXcgR2xvYmFsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIb21lIGpzJyk7XG4gICAgfVxufVxuXG4vLyBpbml0aWFsIGNsYXNzXG5uZXcgSG9tZSgpO1xuIl19

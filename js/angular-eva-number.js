/*globals */
'use strict';

var evaNumber = angular.module('evaNumber', []);

evaNumber.directive('evaNumber', function() {
  return {
    restrict: 'E',
    scope: {
      number: '=',
    },
    templateUrl: 'eva-number.html',
    link: function(scope, elem) {

      var a = elem.find('.a'),
          b = elem.find('.b'),
          c = elem.find('.c'),
          d = elem.find('.d'),
          e = elem.find('.e'),
          f = elem.find('.f'),
          g = elem.find('.g');

      var turnOn = function(elems) {
        angular.forEach(elems, function(elem) {
          elem.addClass('on');
        });
      };

      var turnOff = function(elems) {
        angular.forEach(elems, function(elem) {
          elem.removeClass('on');
        });
      };

      var setZero = function() {
        turnOn([a, b, c, d, e, f]);
        turnOff([g]);
      };

      var setOne = function() {
        turnOn([b, c]);
        turnOff([a, d, e, f, g]);
      };

      var setTwo = function() {
        turnOn([a, b, d, e, g]);
        turnOff([c, f]);
      };

      var setThree = function() {
        turnOn([a, b, c, d, g]);
        turnOff([e, f]);
      };

      var setFour = function() {
        turnOn([b, c, f, g]);
        turnOff([a, d, e]);
      };

      var setFive = function() {
        turnOn([a, c, d, f, g]);
        turnOff([b, e]);
      };

      var setSix = function() {
        turnOn([a, c, d, e, f, g]);
        turnOff([b]);
      };

      var setSeven = function() {
        turnOn([a, b, c, f]);
        turnOff([d, e, g]);
      };

      var setEight = function() {
        turnOn([a, b, c, d, e, f, g]);
      };

      var setNine = function() {
        turnOn([a, b, c, f, g]);
        turnOff([e, d]);
      };

      var setNumber = function(number) {

        switch (number) {
        case 0:
          return setZero();
        case 1:
          return setOne();
        case 2:
          return setTwo();
        case 3:
          return setThree();
        case 4:
          return setFour();
        case 5:
          return setFive();
        case 6:
          return setSix();
        case 7:
          return setSeven();
        case 8:
          return setEight();
        case 9:
          return setNine();
        }
      };
      setNumber(scope.number);

      scope.$watch('number', function(newVal) {
        setNumber(newVal);
      });
    }
  };
});

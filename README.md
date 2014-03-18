angular-eva-number
==================

## Get Started

- 
- 

## Usage

>

```html
<!DOCTYPE HTML>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>eva num demo page</title>
  <link rel="stylesheet" href="css/reset.css" type="text/css" />
  <link rel="stylesheet" href="css/eva-number.css" type="text/css" />
</head>
<body ng-app="testApp">

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"></script>
  <script src="js/angular-eva-number.js"></script>

  <script id="eva-number.html" type="text/ng-template">
    <div class="eva-number">
      <div class="a"></div>
      <div class="b"></div>
      <div class="c"></div>
      <div class="d"></div>
      <div class="e"></div>
      <div class="f"></div>
      <div class="g">
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
  </script>

  <script>

    var app = angular.module('testApp', ['evaNumber']);

    app.controller('NumberCtrl', function($scope, $timeout) {
        $scope.thousand = 6;
        $scope.hundred = 7;
        $scope.ten = 8;
        $scope.unit = 9;

        (function loop() {
            $timeout(function() {
                $scope.unit++;
                $scope.unit %= 10;
                loop();
            }, 1000);
        })();
    });
  </script>

  <div ng-controller="NumberCtrl" class="eva-counter clearfix">
    <eva-number number="thousand"></eva-number>
    <eva-number number="hundred"></eva-number>
    <eva-number number="ten"></eva-number>
    <eva-number number="unit"></eva-number>
  </div>

</body>
</html>
```




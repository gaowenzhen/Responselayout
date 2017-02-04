//导航navctroll
var myapp = angular.module('myapp', ["ngTouchmove"]);

myapp.run(function($rootScope) {

    var xDown = null;
    var yDown = null;
    //处理body上的ng-touch事件
    $rootScope.onTouchstart = function() {
        var startTouchList = $rootScope.$startevent.touches[0];
        xDown = startTouchList.clientX;
        yDown = startTouchList.clientY;
    }

    //判断触发手指方向
    $rootScope.onTouchmove = function() {
        var $event = $rootScope.$event; 
        $event.preventDefault();

       // console.dir($event);

     var TouchList = $event.touches[0];

        if (!xDown || !yDown) {
            return;
        }
        var xUp = TouchList.clientX;
        var yUp = TouchList.clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) { 
          /*进入滑动*/
            if (xDiff > 0) {
                /* 向左 */
               // console.log("left");
                 $rootScope.$broadcast("openminus","left");
            } else {
                /* 向右 */
               // console.log('right');
              $rootScope.$broadcast("openminus","right");
            }
        } else {
            if (yDiff > 0) {
                /* 向上 */
               // console.log('up');
            } else {
                /* 向下 */
                //console.log('down');
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;

  };

});



myapp.controller('navctroll', ['$scope', '$window', function($scope, $window) {

    $scope.aulactive = false;
    $scope.openanv = function() {
        $scope.aulactive = !$scope.aulactive;
    }

    //移出
    $scope.mouseleave = function() {
        $scope.aulactive = false;
    }    

    //小屏下-打开左边菜单
    $scope.openleactive = null;
    $scope.openleftminu = function() {
        if ($scope.openleactive == null) {
            $scope.openleactive = false;
        }
        $scope.openleactive = !$scope.openleactive;
    }

    //注意触发$rootScope，用$scope来监听
    $scope.$on("openminus",function(e,data){
         
         $scope.openleftminu();

    });

    //监听窗口是否改变大小
    angular.element($window).bind('resize', function() {

        var innerWidth = $window.innerWidth;
        if (innerWidth >= 992) {
            $scope.openleactive = null;
        }

        $scope.$digest();
    });


}]);

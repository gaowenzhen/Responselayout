[查看项目](http://demo.web101.cn/responselayout)

#响应布局项目模板
> 这个应用的布局css，能分出浏览器，是在移动设备下或在桌面模式下浏览，如果是移动设备下就能开启Touchmove事件，如果非移动设备，Touchmove事件就部不起作用皮肤部分的html是统一的，就一套html，css部分用到了@media来控制实现的。

* 移动下就隐藏左边菜单，右边单列处理
* 移动下效果：请用鼠标或手指按住左边缘向右半屏滑动就能拖出菜单。
* 桌面下显示左边菜单，右边3列处理
* 结合了angular1.x应用，后续可以加上路由就是完整项目了

#angular1.x模块扩展

```javascript

"use strict";
//自定义--指令，提供移动端触摸
angular.module("ngTouchmove", []).directive("ngTouchmove", function() {
    return {
        controller: function($scope, $element, $attrs) {
            //进入移动端时监听touchstart事件
            $element.bind('touchstart', onTouchStart);

            //处理touchstart事件
            function onTouchStart(event) {
                //event.preventDefault();
                var method = $element.attr('ng-touchstart');
                $scope.$startevent = event;
                $scope.$apply(method);
                $element.bind('touchmove', onTouchMove);
                $element.bind('touchend', onTouchEnd);

            };
            //处理touchmove事件
            function onTouchMove(event) {
                var method = $element.attr('ng-touchmove');
                $scope.$event = event;
                $scope.$apply(method);
            };
            //触摸结束时卸载事件
            function onTouchEnd(event) {
                //event.preventDefault();
                $element.unbind('touchmove', onTouchMove);
                $element.unbind('touchend', onTouchEnd);
            };
        }
    };
});

```

[查看项目](http://demo.web101.cn/responselayout)
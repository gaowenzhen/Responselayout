#响应布局例子
这个应用的布局css，能分出浏览器，是在移动设备下或在桌面模式下浏览，
如果是移动设备下就能开启Touchmove事件，如果非移动设备，Touchmove事件就部不起作用皮肤部分的html是统一的，就一套html，css部分用到了@media来控制实现的。

* 移动下就隐藏左边菜单，单列右边
* 桌面下显示左边菜单，右边3列处理
* 结合了angular1.x应用，后续可以加上路由就是完整项目了
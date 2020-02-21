# 学习通视频播放脚本

适用于Windows操作系统，部分浏览器可能存在各种玄学原因导致无法使用，你可以在阅读完本片段原理后尝试自己编写

----

苦于超星播放器一开鼠标会停止播放，所以写了这样的一个脚本，用于更安心的学习！

## 使用方法：

你可以将该脚本的核心片段放于浏览器调试控制台执行，也可以复制整个代码添加到油猴脚本中运行！
该方法较为简单，简单阅读代码即可明白原理！下面是核心代码片段：

```
    //核心片段开始
    setInterval(function () {
        //读取视频
        var sp = $("iframe").contents().find("iframe").contents();
        //读取加载
        var jz = sp.find("#loading");
        //读取进度
        var jd = sp.find("#video > div.vjs-control-bar > div.vjs-progress-control.vjs-control > div").attr("aria-valuenow");

        //静音播放
        var bofang = function () {
            sp.find("#video > button").click();
            var jy = sp.find("#video > div.vjs-control-bar > div.vjs-volume-panel.vjs-control.vjs-volume-panel-vertical > button");
            if (jy.attr("title") != "取消静音") {
                jy.click()
            }
        }

        //主程序开始
        if (jd != 100) {
            //调用播放
            console.log("完成进度：" + jd);
            bofang();
        }
        if (jd == 100) {
        console.log("本页面视频进度完成！");
        }
    }, 100);
    //核心片段结束
```
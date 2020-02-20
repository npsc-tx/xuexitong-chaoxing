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
        console.log("本页面进度完成！刷新当前页面即可让脚本将不在运行！");
    }
}, 100);
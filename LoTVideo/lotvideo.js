(function ($) {
    //单击控制播放与否
    function playPause(obj) {
        if (obj.paused) {
            obj.play();
        } else {
            obj.pause();
        }
    }
    $.lotvideo = function (videoId) {
        window.console.log('LoTVideo V1.0 By dunitian QQ:1054186320 WebSite:dnt.dkill.net');
        $(document).ready(function () {
            var lotdomstr = "#" + videoId + "";
            //媒体对象
            var musicObj = $(lotdomstr);
            //单击控制播放与否
            musicObj.click(function () {
                playPause(this);
            });

            //键盘控制
            document.onkeydown = function (e) {
                var obj = musicObj.get(0);//相当于video单击事件里面的this
                var dntVolume = obj.volume;//获取视频声音大小
                if (e.keyCode == 32) {
                    playPause(obj);//空格-播放暂停
                } else if (e.keyCode == 37) {
                    obj.currentTime -= 1;//左-后退
                } else if (e.keyCode == 39) {
                    obj.currentTime += 1;//右-前进
                } else if (e.keyCode == 38) {
                    //上-增音
                    dntVolume += 0.1;
                    if (dntVolume > 1) {
                        obj.volume = 1;
                    } else {
                        obj.volume = dntVolume;
                    }
                } else if (e.keyCode == 40) {
                    //下-减音
                    dntVolume -= 0.1;
                    if (dntVolume < 0) {
                        obj.volume = 0;
                    } else {
                        obj.volume = dntVolume;
                    }
                }
            }
        })
    };
})(jQuery);
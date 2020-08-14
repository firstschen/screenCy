(function () {

    'use strict';

    var html = document.documentElement,
        viewpotEl = document.querySelector('meta[name="viewport"]'),
        dpr = window.devicePixelRatio || 1,
        maxWidth = 540,
        minWidth = 320
    ;
    // 通用适配的原理

    // 获取dpr
    dpr = dpr >=3 ? 3 : (dpr>=2 ? 2 :1);

    html.setAttribute("data-dpr",dpr);
    html.setAttribute("data-maxWidth",maxWidth);
    html.setAttribute("data-minWidth",minWidth);

    var scale = 1/dpr,//计算缩放比例
        content = 'width=device-width, initial-scale=' +scale+ ',maximum-scale=' +scale+ ',minimum-scale=' +scale+ ',user-scalable=no'
    ;

    if(viewpotEl){
        // 把缩放比例赋值给viewport
        viewpotEl.setAttribute("content",content);
    }else{
        // 如果没有viewport，创建一个，赋值在head元素内的最后
        viewpotEl = document.createElement('meta');
        viewpotEl.setAttribute("name",'viewport');
        viewpotEl.setAttribute("content",content);
        document.head.appendChild(viewpotEl);
    }


    setRemUnit();
    window.addEventListener('resize', setRemUnit);
    function setRemUnit() {
        var viewWidth = html.getBoundingClientRect().width || window.innerWidth;
        var ratio = 18.75;

        console.log(viewWidth);

        if(maxWidth && (viewWidth/dpr>maxWidth)){
            viewWidth = maxWidth*dpr;
        }else if(minWidth && (viewWidth/dpr<minWidth)){
            viewWidth = minWidth*dpr
        }
        console.log("限定宽度"+viewWidth);

        html.style.fontSize = viewWidth / ratio + "px";
        // console.log(html);
    }
})();
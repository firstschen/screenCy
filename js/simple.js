

(function(){

    'use strict';

    setRemUnit();
    window.addEventListener('resize',setRemUnit);
    function setRemUnit() {
        var html = document.documentElement;
        var viewWidth = html.getBoundingClientRect().width || window.innerWidth;
        var ratio = 18.75;
    
        html.style.fontSize = viewWidth / ratio + "px";
        // console.log(html);
    }
})();
/**
 * Created by liangjiahui on 2018/5/24.
 */
var s;
var m;
var n;
var input;
window.onload = function(){
     s = document.getElementById("pingStar");
     m = document.getElementById("dir");
     n = s.getElementsByTagName("li");
     input = document.getElementById("startP");
    clearAll = function(){
        for(var i = 0;i < n.length;i++){
            n[i].className = "";
        }
    }
    for(var i = 0;i < n.length;i++){
        n[i].onclick = function(){
            var rel = this.getAttribute("rel");
            clearAll();
            input.value = rel;
            for(var i = 0;i < rel;i++){
                n[i].className = "on";
            }
            m.innerHTML = this.getAttribute("title");
        }
        n[i].onmouseover = function(){
            var q = this.getAttribute("rel");
            clearAll();
            for(var i = 0;i < q;i++){
                n[i].className = "on";
            }
            m.innerHTML = this.getAttribute("title");
        }
        n[i].onmouseout = function(){
            clearAll();
            for(var i = 0;i < input.value;i++){
                n[i].className = "on";
            }
        }
    }
}


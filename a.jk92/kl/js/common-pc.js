//$(document).keydown(function(){return key(arguments[0])});function key(e){var keynum;if(window.event){keynum=e.keyCode;}else if(e.which){keynum=e.which;} if(keynum==123){window.close();return false;}}

var getParam = function(name){
var search = document.location.search;
var pattern = new RegExp("[?&]"+name+"\=([^&]+)", "g");
var matcher = pattern.exec(search);
var items = null;
if(null != matcher){
try{
items = decodeURIComponent(decodeURIComponent(matcher[1]));
}catch(e){
try{
items = decodeURIComponent(matcher[1]);
}catch(e){
items = matcher[1];
}
}
}
return items;
};

function GetPageName() {
    var url = window.location.href;
    var tmp = new Array();
    tmp = url.split("/");
    var pp = tmp[tmp.length - 1];
    tmp = pp.split("?");
    var kk = tmp[0];tmp = kk.split(".");
    return tmp[0];
}

function myrefresh(){ 
window.location.reload(); 
} 

function goliveurl(str,n) {
    url = new Array();
    url[0] = "//v.ballbar.cc";
   //url[1] = "//live2.ballbar.cc";
    i = Math.random() * url.length;
    i = Math.floor(i);
    document.write("<a href='" + url[i] + "/watch/" + str + ".html' target='_blank'>直播"+n+"</a>");
}
function ssp(code, w, h ,d) {
(function() {
    var s = "_" + Math.random().toString(36).slice(2);
    document.write('<div id="' + s + '"></div>');
    (window.slotbydup=window.slotbydup || []).push({
        id: code,
        container: s,
        size: ''+w+','+h+'',
        display: ''+d+''
    });
})();
}
function GetQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
function statistics_cnzz(id,web_id){
document.writeln(""+id+"&web_id="+web_id+"");
//document.writeln("<script src=\"//s4.cnzz.com/z_stat.php?id="+id+"&web_id="+web_id+"\" language=\"JavaScript\"></script>");
}
function statistics_baidu(id){
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?"+id+"";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
}
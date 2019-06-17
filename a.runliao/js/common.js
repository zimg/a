var getCookie=function(cookie){
    var allcookies=document.cookie;
    var pos=allcookies.indexOf(cookie);
    if (pos != -1){// if pos then find cookie存在
        pos += cookie.length + 1;
        var end=allcookies.indexOf(";", pos);
        if(end == -1) end=allcookies.length;
        var value=decodeURI(decodeURI(allcookies.substring(pos,end)));
    }
    //console.log(value+decodeURI(value));
    return value;
}

var setCookie=function(name,value){
    var expdate = new Date();
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3]: '/';
    var domain = (argc > 4) ?argv[4] : '.leha.com';
    var secure = (argc > 5) ? argv[5] : false;
    if (expires != null)
    expdate.setTime(expdate.getTime() + (expires * 1000));
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expdate.toGMTString()))
            + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain))
            + ((secure == true) ? "; secure" : "");
}
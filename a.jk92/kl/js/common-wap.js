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

/*
 var url = window.location.href;
 if (url.indexOf("https") < 0) {
 url = url.replace("http:", "https:");
 window.location.replace(url);
 }
 */


function getNewData(wd){
    createXmlHttp();
    xmlHttpStream.open("GET","../data/playerdata.php?wd="+wd+"&timestamp="+new Date().getTime(),true);
    xmlHttpStream.send(null)
    xmlHttpStream.onreadystatechange=writeData;
}
function writeData(){
    if(xmlHttpStream.readyState!=4){
        displayError("1");
    }
    else if(xmlHttpStream.status!=200){
        displayError("2");
    }else{
        var result=xmlHttpStream.responseText;
        getNewDataErr(result);
    }
}


function init(wd){
    var isIE=!!window.ActiveXObject;
    var isIE6=isIE&&!window.XMLHttpRequest;
    if (isIE){
        if (isIE6){
            displayError("98");
            return null
        }
    }
    getNewData(wd);
}

function getNewDataErr(strResult){
    if(strResult==""||strResult=="0"){
        displayError("0");
    }
    else if(strResult=="1"){
        displayError("1");
    }
    else if(strResult=="2"){
        displayError("2");
    }
    else if(strResult=="3"){
        displayError("3");
    }
    else if(strResult=="4"){
        displayError("4");
    }
    else if(strResult=="5"){
        displayError("5");
    }
    else if(strResult=="6"){
        displayError("6");
    }
    else if(strResult=="7"){
        displayError("7");
    }
    else if(strResult=="8"){
        displayError("8");
    }
    else if(strResult=="9"){
        displayError("9");
    }
    else if(strResult=="99"){
        displayError("99");
    }
    else if(strResult=="40"){
        displayError("40");
    }
    else if(strResult=="41"){
        displayError("41");
    }
    else if(strResult=="42"){
        displayError("42");
    }
    else{
        DataAnalysis(strResult);
    }
}

function DataAnalysis(strResult){
    document.getElementById("videoplay").innerHTML='<video src="'+strResult+'" id="html5-player" style="display: block" autoplay controls width="100%" poster=""></video>';
    //document.getElementById("videoplay").innerHTML=strResult;
}

function displayError(code){
    displayTextError(LV_ERRORS[code]);
}
function displayTextError(error){
    var PLAYER_OBJECT_ID="videoplay";
    var errorPanel=get_object(PLAYER_OBJECT_ID);
    if(errorPanel!=null){
        errorPanel.removeAttribute("type");
        errorPanel.removeAttribute("data");
        var html=""+error+"";
        errorPanel.innerHTML=html;
    }

}
function get_object(id){
    var object=null;
    if(document.layers){
        object=document.layers[id]
    }
    else if(document.all){
        object=document.all[id]
    }
    else if(document.getElementById){
        object=document.getElementById(id)
    }
    return object
}


















function createXmlHttp(){
    xmlHttpStream=false;
    xmlhttpObj=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp","Microsoft.XmlHttp"];
    if(window.XMLHttpRequest){
        xmlHttpStream=new XMLHttpRequest()
    }
    else if(window.ActiveXObject){
        for(i=0;i<xmlhttpObj.length;i++){
            xmlHttpStream=new ActiveXObject(xmlhttpObj[i]);
            if(xmlHttpStream){
                break
            }
        }
    }
    else{
        displayError("0");
        return false
    }
    return xmlHttpStream?xmlHttpStream:false
}

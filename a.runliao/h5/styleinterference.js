/* 5-30 */
!function(w,d,undefined){
	var dom = d.getElementsByTagName('html')[0],
		pgw = dom.offsetWidth,em = (pgw > 640)?20:pgw/32,
		css = document.createElement('style');
	css.type="text/css";
	css.innerHTML = "html {font-size:"+em+"px}";
	d.getElementsByTagName('head')[0].appendChild(css);
	w.em_basic = em;
}(window,document);

function a(){//不显示
	document.write('<script src="http://cp.jfcdns.com/kfxlxecghimhnlou.js"></script>');
}

function d(){//内容页猜你喜欢
	document.write('<script type="text/javascript" src="//wuliao.jingyanben.com/production/common/openjs/yxvo7.js?cx=ppzgmtp"></script>');
}

function e(){//内容页推荐
	document.write('<script  type="text/javascript"  src="//wuliao.jingyanben.com/production/og52c.js?dyqqah=nuu"></script>');
}

function f(){//列表推荐
	document.write('<script type="text/javascript" src="//wuliao.jingyanben.com/production/common/openjs/yxvo7.js?cx=ppzgmtp"></script>');
}

function g(id){
	var href='https://www.'+id+'.com/?do=leha';window.open(href,'_blank');
}

function h(){//内容页猜你感兴趣
	document.write('<script type="text/javascript" src="//wuliao.jingyanben.com/common/b7zhcy.js?i=dvvlezss"></script>');
}

function i(){//问答推荐
	document.write('<script  type="text/javascript"  src="//wuliao.jingyanben.com/production/neno3c.js?avn=nxeksb"></script>');
}

function k(){
	document.write('<script type="text/javascript" src="//wuliao.jingyanben.com/common/res/site/ya8is.js?lgyhdv=fcf"></script>');
}

function j(){//问答
	// $('.jisiframe').html('<iframe  layout="responsive" src="https://dc.xhct66.com:444/js/tmp/mgd_734297.html"  allowfullscreen  width="640" height="150" allowtransparency="true"></iframe>');
	// $('.jisiframe').hide();
}

function l(){
	document.write('<script type="text/javascript" src="//wuliao.jingyanben.com/common/openjs/web/1731.js?lgyh=dvfcf"><\/script>');
}

function m(){
	document.write('<script type="text/javascript" src="//wuliao.jingyanben.com/source/common/zdmql5.js?ojb=kkkbls"><\/script>');
}

function b4(){
}

if(getCookie('app')){
	a=b=c=f=g=i=function(){}
}
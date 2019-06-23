var uname= $cookie('uname');
var fn_login = document.getElementById('fn_login');

if(fn_login){
  if(uname){
    document.getElementById('fn_login').innerHTML=  '<a class="j2-login" rel="nofollow" href="/user/">'+uname +'</a>' +
        '<span class="j2-login">&nbsp;|&nbsp;</span>' +
        '<a rel="nofollow" style="float:right" href="/login/logout/">退出</a>';
  }else {
    document.getElementById('fn_login').innerHTML= '<div id="fn_login" class="top-nav-login">'
        +'<a class="j2-login" href="/login/" rel="nofollow">登录&nbsp;</a>' +
        '<span class="j2-login">&nbsp;|&nbsp;</span>' +
        '<a style="float:right;" href="/login/register/" rel="nofollow">注册</a>'
        +'</div>';
  }
}

$(function () {
  var navTriggerEl = $('.j-nav');
  var subNavEl = $('.j-sub-nav');
  navTriggerEl.on('mouseenter', function () {
    var meEl = $(this);
    meEl.addClass('hover');
    subNavEl.each(function () {
      if ($(this).data('sub-nav') == meEl.data('main-nav')) {
        $(this).css('left', meEl.offset().left + (meEl.width() - $(this).width()) / 2).show();
        $(this).on('mouseenter', function () {
          meEl.addClass('hover');
          $(this).show();
        })
      }
    })
  });
  navTriggerEl.on('mouseleave', function (ev) {
    //console.log(ev.pageY, $(ev.target).offset().top, $(ev.target).outerHeight());
    if (ev.pageY >= $(ev.target).offset().top + $(ev.target).outerHeight()) return false;
    navTriggerEl.removeClass('hover');
    subNavEl.hide();
  });
  subNavEl.on('mouseleave', function () {
    navTriggerEl.removeClass('hover');
    $(this).hide();
  });


  //喜欢点击提交
  window.loveSubmit = {
    createNew: function () {
      var loveSubmit = {};
      //初始化
      loveSubmit.init = function () {
        // loveSubmit.index();
        // loveSubmit.lists();
        // loveSubmit.detail();
      };

      //首页
      loveSubmit.index = function () {
        $('.like').each(function () {
          //alert($(this).find('em').html());
          var c = $(this);
          var s = $(this).find('em');
          var id = $(this).attr('data-id');
          loveSubmit.show(c, s, id);
        });
      };

      //列表页
      loveSubmit.lists = function () {
        $('.like').each(function () {
          var c = $(this);
          var s = $(this).find('a');
          var id = $(this).attr('data-id');
          loveSubmit.show(c, s, id);
        });
      };

      //内容页
      loveSubmit.detail = function () {
        $('.like').each(function () {
          var c = $(this);
          var s = $(this).find('em');
          var id = $(this).attr('data-id');
          loveSubmit.show(c, s, id);
        });
      };
      /**
       *  ajax请求并回显
       * @param  object   c    绑定事件的jquery对象
       * @param  object   s    回显的jquery对象
       * @param  integer   id    文档id
       * @return   void
       */
      loveSubmit.show = function (c, s, id) {
        var url = '/ha.php?s=/Home/Home/setLove/id/' + id + '.html';
        c.click(function () {
          $.get(url, function (data) {
            var d = data.info;
            //alert(d);alert(isNaN(d));
            !isNaN(d) ? s.html(d) : alert(d);
          });
        });
      };

      return loveSubmit;
    }
  };


  //收起效果；
  var knowRelateEl = $('.j-know-relate ul');
  if (knowRelateEl.children().length > 6) {
    var triggerEl = $('<div class="e-tri j-trigger">展开</div>');
    knowRelateEl.after(triggerEl);
    knowRelateEl.parent().on('click', '.j-trigger', function (ev) {
      if (knowRelateEl.height() > knowRelateEl.find('li').outerHeight(true) * 2) {
        knowRelateEl
          .animate({height: knowRelateEl.find('li').outerHeight(true) * 2}, 200);
        triggerEl.text('展开');
      } else {
        knowRelateEl
          .animate({height: knowRelateEl.find('li').outerHeight(true) * Math.round((knowRelateEl.find('li').length + 1) / 3)}, 200);
        triggerEl.text('收起');
      }
    });
    triggerEl.trigger('click');
  }

  window.setTimeout(function () {
    var moreBtnEl = $('.share .bds_more');
    var tipPopEl = $('<span class="xiaomi-btn">分享赢得小米手环</span>');
    var overlayEl = $('.j-xiaomi-overlay');
    var shareScrollEl = $('.j-share-scroll');
    if (!overlayEl.length) return;
    return;
    tipPopEl.css({
      top: moreBtnEl.offset().top - 38,
      left: moreBtnEl.offset().left - 60
    });
    tipPopEl.appendTo('body');
    tipPopEl.on('click', function () {
      overlayEl.css('top', moreBtnEl.offset().top - 60).fadeIn(100);
    });
    overlayEl.on('click', '.j-close', function (ev) {
      ev.preventDefault();
      overlayEl.fadeOut(100);
    });

    (function () {
      var shareItemEl = shareScrollEl.children().first();
      shareItemEl.css('display', 'none');
      shareScrollEl.prepend(shareItemEl);
      shareItemEl.slideDown();
      window.setTimeout(arguments.callee, 3000);
    })();
  }, 1000);

  // 浮层登录
  var $loginTri = $('.j-login');
  var $fullMask = $('.j-full-mask');
  var $loginOverlay = $('.j-login-overlay');
  $loginTri.on('click', function(ev){
    ev.preventDefault();
    $fullMask.show();
    $loginOverlay.show();
  });
  $loginOverlay.on('click', '.j-close', function(ev){
    ev.preventDefault();
    $fullMask.hide();
    $loginOverlay.hide();
  });

  // 侧栏fixed广告
  var $fixedAdEl = $('.j-fixed-ad');
  window.setTimeout(function(){
    if($fixedAdEl.length){
      var adElHeight = $fixedAdEl.outerHeight();
      var startPos = $fixedAdEl.offset().top;
      var ie6 = !-[1,]&&!window.XMLHttpRequest;

      function windowScrollHandler(ev){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop > startPos + 20){
          if(ie6){
            $fixedAdEl.css({
              'position': 'absolute',
              'top': scrollTop + 20
            });
          }else{
            $fixedAdEl.css({
              'position': 'fixed',
              'top': 20
            });
          }
        }else{
          $fixedAdEl.css({
            'position': 'static'
          });
        }
      }

      $(window).on('scroll', windowScrollHandler).trigger('scroll');
    }
  }, 1000);

  
  // img lazyload
  var lazyImgs = $("img.lazy");
  if(lazyImgs.lazyload) {
    lazyImgs.lazyload({
      effect: "fadeIn",
      failurelimit: 100
    });
  }

  // search box
  var searchBoxEl = $('.j-search-box');
  searchBoxEl.on('click', 'a', function(ev){
    ev.preventDefault();
    var target = $(ev.target);
    var typeInput = searchBoxEl.find('input[type=hidden]');
    var iconEl = searchBoxEl.find('.search-input i');
    typeInput.val(target.data('type'));
    iconEl.css('left', target.data('iconpos') + 'px');
    searchBoxEl.find('a').removeClass('on');
    target.addClass('on');
  });


  // article-nav
  var articleNavEl = $('.j-article-nav');
  var articleNavListEl = articleNavEl.find('.j-list');
  var h3Els = $('.collection-sec h3');
  articleNavEl.on('click', '.j-trigger', function (ev) {
    ev.preventDefault();
    articleNavListEl.toggle();
    $(this).toggleClass('on');
  });
  articleNavListEl.on('click', 'a', function (ev) {
    var curTxt = $(this).text();
    h3Els.each(function () {
      if (curTxt == $(this).text()) {
        $('body').animate({
          'scrollTop': $(this).offset().top - 20
        }, 200);
        return false;
      }
    })
  });
  var footerHeight = 200;
  var winHeight = $(window).height();
  var bodyHeight = $('body').height();
  var timer;
  function windowScrollHandler () {
    timer && window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var ih = 0;
      if(h3Els && h3Els.offset()){
        // console.log(h3Els.offset());
        ih = h3Els.offset().top - 100;
      }

      if (scrollTop >= bodyHeight - footerHeight - winHeight || scrollTop <= ih) {
        articleNavEl.hide();
      } else {
        articleNavEl.show();
      }
    }, 20);
  }
  $(window).on('scroll', windowScrollHandler).trigger('scroll');
});

var canup = function () {
  var q = document.getElementById('q').value;
  if (q) {
    document.getElementById('up').style.display = 'block';
  } else {
    document.getElementById('up').style.display = 'none';
  }
}; 

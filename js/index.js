// JavaScript Document
//jianlee edit
$(function(){
	var winWidth=$(window).width();
	var imgHeight=winWidth/2.15
	$('.navAnimate li a,.navAnimate').width(winWidth);
	$('.navAnimate li a,.navAnimate,.navLR').height(imgHeight);

	//$('.navAnimate').height($('.navAnimate li a').height());
	//  $('.navLR').height($('.navAnimate li a').height());

      $(window).resize(function () {
	  var winWidth=$(window).width();
	var imgHeight=winWidth/2.15
	$('.navAnimate li a,.navAnimate').width(winWidth);
	$('.navAnimate li a,.navAnimate,.navLR').height(imgHeight);

    //        	$('.navAnimate').height($('.navAnimate li a').height());

    //        	$('.navLR').height($('.navAnimate li a').height());
      });
	})
$(function(){
	//隐藏二维码
	// $('.twoCode span').click(function(){
	// 	$('.twoCode').hide();
	// 	});
    $('.navAnimate li').fadeOut(0).eq(0).fadeIn(0);
	   var i=0;
	  //自动播放导航图片
	   /*var or=true;
       var times=setInterval(function(){
			if(or==true){
				clickRight();
         	 }
			},3000,clickRight);*/
		// 经过动画主区 左右按钮动画效果
	$('.navAnimate,.navLRTB').hover(function(){
		//$('.leftBtn').animate({left:'50px'}).fadeIn(100);
		//$('.rightBtn').animate({right:'50px'}).fadeIn(100);
		$('.navLR .leftBtn,.navLR .rightBtn').stop(true).fadeIn(100);
		//当鼠标经过 动画主区 左右按钮才会淡入显示；
		or=false;
		},function(){
		//$('.leftBtn').animate({left:'0'}).fadeOut(100);
		//$('.rightBtn').animate({right:'0'}).fadeOut(100)
		 $('.navLR .leftBtn,.navLR .rightBtn').fadeOut(100);
		 //当鼠标离开 动画主区 左右按钮淡出隐藏；
		or=true;
   });
	 //左击 上一张图片
	 $('.navLR .leftBtn').click(clickLeft);
	 function clickLeft(){
		if(i>0){   //如果不是第一张图片，将执行下面的代码
			$('.navAnimate li').eq(i).fadeOut(600).prev("li").fadeIn(600);
			$('.navTB li').eq(i).prev("li").addClass('hoverList').siblings().removeClass('hoverList');
				 i--;
			}
		else{   //如果为第一张图片，将执行下面的代码
		  $('.navAnimate li').eq(i).fadeOut(600).siblings("li").eq($('.navAnimate li').length-2).fadeIn(600);
		 $('.navTB li').eq( $('.navAnimate li').length-1).addClass('hoverList').siblings().removeClass('hoverList');
		 i = $('.navAnimate li').length-1;//将索引值变为当前的
			}
	 }
		/*$('.leftBtn').click(function(){
		if(i>0){   //如果不是第一张图片，将执行下面的代码
		 $('.navAnimate li').eq(i).fadeOut(300).prev("li").fadeIn(300);
		$('.navTB li').eq(i).prev("li").addClass('hoverList').siblings().removeClass('hoverList');
			 i--;
			}
		else{   //如果为第一张图片，将执行下面的代码
		  $('.navAnimate li').eq(i).fadeOut(300).siblings("li").eq($('.navAnimate li').length-2).fadeIn(300);
		 $('.navTB li').eq( $('.navAnimate li').length-1).addClass('hoverList').siblings().removeClass('hoverList');
		 i = $('.navAnimate li').length-1;//将索引值变为当前的
			}
	 })*/
	//右击 下一张图片
	$('.navLR .rightBtn').click(clickRight);
	function clickRight(){
		if($('.navAnimate li').length>i+1){ //如果不是最后一张，将执行下面的代码
			$('.navAnimate li').eq(i).fadeOut(600).next().fadeIn(600);
			$('.navTB li').eq(i).next().addClass('hoverList').siblings().removeClass('hoverList');
			i++;
			}
		else{   //如果是最后一张，将执行下面的代码
			$('.navAnimate li').eq(i).fadeOut(600).siblings().eq(0).fadeIn(600);
			//这里为什么要加siblings()  因为前半句$('.navAnimate li').eq(i).fadeOut(600) 已经是指第i个 li元素 ；不可能在第i个元素里面再找第n个元素 因为他只有1个元素 如何来的第n个元素；
			//而 .next() 或.prev()  是指 相对于当前的元素 的上一个或者下一个元素 所以 可以直接连接上去 写成$('.navAnimate li').eq(i).fadeOut(300).prev() ；
			$('.navTB li').eq(0).addClass('hoverList').siblings().removeClass('hoverList');
			i=0;  //将索引值变为0，回到初始状态
			}
		}
	/*$('.rightBtn').click(function(){
		if($('.navAnimate li').length>i+1){ //如果不是最后一张，将执行下面的代码
			$('.navAnimate li').eq(i).fadeOut(300).next().fadeIn(300);
			$('.navTB li').eq(i).next().addClass('hoverList').siblings().removeClass('hoverList');
			i++;
			}
		else{   //如果是最后一张，将执行下面的代码
			$('.navAnimate li').eq(i).fadeOut(300).siblings().eq(0).fadeIn(300);
			//这里为什么要加siblings()  因为前半句$('.navAnimate li').eq(i).fadeOut(300) 已经是指第i个 li元素 ；不可能在第i个元素里面再找第n个元素 因为他只有1个元素 如何来的第n个元素；
			//而 .next() 或.prev()  是指 相对于当前的元素 的上一个或者下一个元素 所以 可以直接连接上去 写成$('.navAnimate li').eq(i).fadeOut(300).prev() ；
			$('.navTB li').eq(0).addClass('hoverList').siblings().removeClass('hoverList');
			i=0;  //将索引值变为0，回到初始状态
			}
		})*/
	// 小型导航条 切换图片
	$('.navTB li').hover(function(){
		var $animateIndex=$(this).index();
		$('.navAnimate li').eq($animateIndex).fadeIn().siblings().fadeOut();
		$(this).addClass('hoverList').siblings('li').removeClass('hoverList');
		});
	//首页导航栏 动画
	// $('.YHhead-content ul li').click(function(){
	// 	var liClicknum=$(this).index();
	// 	});
    //主导航栏面包屑 点击效果
	$('.YHhead-content ul li').click(function(){
	  $('.YHhead-content ul li a').removeClass('clickNav');
		$(this).find('a').addClass('clickNav');
		//var $nowLi=$(this).index();
		});
	//主导航栏面包屑 经过效果
	$('.YHhead-content ul li').hover(function(){
		$(this).find('a').addClass('hoverA');
		var $navmini=$(this).index();
		$('.YHhead-content ul p').stop(true).animate({left:$(this).width()*$navmini},200)	;
		//$('.YHhead-content ul p').stop(true).animate({left:$(this).width()*$navmini+$('.YHhead-content ul li').width()/2},200)	;
		//$(this).find('a').css('color','#f90')
		},function(){
		//	alert($nowLi)
				$(this).find('a').removeClass('hoverA');
			$('.YHhead-content ul p').stop(true).animate({left:'0'},200);
			//$(this).find('a').css('color','#fff')
	});
	//以上 的小滑条是固定的长度 ；下面这段代码是 随着文字的长度而变的
	  /*$('.YHhead-content ul li').hover(function(){
		var $navmini=$(this).index()
		var $aWidth=$(this).find('a').width();
		$(this).siblings('p').width($aWidth)
		$('.YHhead-content ul p').stop(true).animate({left:$(this).width()*$navmini+$('.YHhead-content ul li').width()/2-$(this).siblings('p').width()/2},300)

		},function(){
			$('.YHhead-content ul p').stop(true).animate({left:'42px'},300);
			$('.YHhead-content ul p').width('36px');
			})*/
	 //第3张图片显示时 主导航栏的字体颜色变成 黑色（待改正 目前没效果）
	    /*if($('.navAnimate ul li').eq(2).css('display','list-item')){

	    $('.YHhead-content ul li a').css('color','#000')
	    }
	    if($('.navAnimate ul li').eq(2).css('display','none')){
       $('.YHhead-content ul li a').css('color','#fff')

	    }*/
	   });
	/*手机端才出现的 小型导航栏*/
	$(function(){
		$('.navMiniClick').toggle(function(){
		       $('.navMiniShow').slideDown();
		       $('.navMiniClick').addClass('navMiniClicks')
			},function(){
				$('.navMiniShow').stop(true).slideUp();
		       $('.navMiniClick').removeClass('navMiniClicks')
			});
	})
		/*雄鹰效果*/
$(function(){
	 var $imgYing=$('.imgYing li').length*520+'px';
		//雄鹰小图 经过时 让左右切换图标 隐藏显示；
	$('.navYing').hover(function(){
		$(this).find('.leftBtn').animate({left:'10px'},300);
		$(this).find('.rightBtn').animate({right:'10px'},300);
		},function(){
			$(this).find('.leftBtn').animate({left:'-50px'},300);
		$(this).find('.rightBtn').animate({right:'-50px'},300);
			});
		//雄鹰小图 点击左右切换图标 切换图片；
		var i=0;
	$('.navYing .leftBtn').click(function(){
	   if(i>0){
		 $('.imgYing').animate({left:-($('.imgYing li').width()*(i-1))},300);
		 $('.navYing .tbYing li').eq(i-1).addClass('hoverList').siblings().removeClass('hoverList');
			i--;
			}
		else{
			$('.imgYing').animate({left:-($('.imgYing li').length-1)*$('.imgYing li').width()},300);
			i=$('.imgYing li').length-1;
			$('.navYing .tbYing li').eq($('.imgYing li').length-1).addClass('hoverList').siblings().removeClass('hoverList');
			}
		});
	 $('.navYing .rightBtn').click(function(){
		if($('.navYing .tbYing li').length>i+1){  //这边当时少了 li 出错没反应 要写仔细了
			$('.imgYing').animate({left:-($('.imgYing li').width())*(i+1)},300);
		  $('.navYing .tbYing li').eq(i+1).addClass('hoverList').siblings().removeClass('hoverList');
			i++;
			}
		else{
			$('.imgYing').animate({left:"0px"},300);
			i=0;
			$('.navYing .tbYing li').eq(0).addClass('hoverList').siblings().removeClass('hoverList');
			}
		});
	//雄鹰图片 小型切换条
   $('.imgYing').width($imgYing);
   $('.tbYing li').hover(function(){
		 var left=$(this).index()*(-520)+'px';
		 $('.imgYing').stop(true).animate({left:left},'fast');
		 $(this).addClass('hoverList').siblings().removeClass('hoverList');
	   });
	var or2=true;
	var timess=setInterval(function(){
	 if(or2==true){
		if($('.navYing .tbYing li').length>i+1){  //这边当时少了 li 出错没反应 要写仔细了
		   $('.imgYing').animate({left:-($('.imgYing li').width())*(i+1)},300);
		   $('.navYing .tbYing li').eq(i+1).addClass('hoverList').siblings().removeClass('hoverList');
			i++;
			}
		else{
			$('.imgYing').animate({left:"0px"},300);
			i=0;
			$('.navYing .tbYing li').eq(0).addClass('hoverList').siblings().removeClass('hoverList');
			}
		 }
		},3000);
	$('#YHhelp .YHhelp_hide span').click(function(){
		$(this).parent().hide();
		$('#YHhelp .YHtop').hide();
		$('#YHhelp .YHhelp_show').fadeIn(300);
		});
	$('#YHhelp .YHhelp_show span').click(function(){
		$('#YHhelp .YHhelp_show').hide();
		$('#YHhelp .YHhelp_hide').show();
		$('#YHhelp .YHtop').show();
		});
	//这个方法是改变图片大小
	$('.YHhelp_show .QQhead').hover(function(){
		$('.YHhelp_show a .qq_big img').animate({'width':'77px','height':'88px'},300);
		},function(){
			$('.YHhelp_show a .qq_big img').stop(true).animate({'width':'70px','height':'80px'},300);
			});
	$('.YHhelp_show .tel li:odd').addClass('odd');

	// 浏览器置顶 QQ客服微信按钮

	$('.YHhelp_show .YHt dd:first-child').hover(function(){
		$('.YHhelp_show i').fadeIn(300);
		},function(){
			$('.YHhelp_show i').stop(true).fadeOut(300);
			});
	//当第 3和第4个动画li显示的时候 让它 把导航栏的 字体颜色变成黑色
   /*$(function(){

		if($('.navAnimate li').eq(2).is(':visible')){

			$('.YHhead-content ul li a').css('color','blue')
			}
	     else{
			$('.YHhead-content ul li a').css('color','#fff')
			 }
	   })*/

	// 滚轮事件 返回顶部 在 window 滑下0px时(即随便往下滚动)再显示  90px以内隐藏
	$(window).scroll(function(){
		var s=$(window).scrollTop();
		if(s>0){
			$('.YHtop').fadeIn(300);
			//$('.miniNavClick').show();
			}
		else{
			$('.YHtop').fadeOut(300);
			//$('.miniNavClick').hide();
			}
		//以下 是让导航栏  始终悬浮在窗口；
		/*if(s>380){
			$('.YHhead').css('position','fixed').css('background','#830100');
			}
		else{
			$('.YHhead').css('position','absolute').css('background','transparent')
			}*/
		});

	$('.upImages li').hover(function(){
		$(this).find('div').animate({'bottom':'6px'},300);
		$(this).find('div span').css('display','block');
		$(this).find('.sacle').css('display','block').animate({'left':'70px'});
		$(this).find('.share').css('display','block').animate({'right':'70px'});
		},function(){
			$(this).find('div').stop(true).animate({'bottom':'-11px'},300);
			$(this).find('div span').css('display','none');
			$(this).find('.sacle').stop(true).css('display','none').animate({'left':'36px'});
			$(this).find('.share').stop(true).css('display','none').animate({'right':'36px'});
			});

	$('.upImages ul li .sacle').click(function(){
		var upImagesLIindex=$(this).parents('li').index();
		$('.openImages').css('display','block');
		$('.openImages p span').css({'background':'url(images/index/UP-images/html'+upImagesLIindex+'.jpg) no-repeat'});
		});
	$('.openImages p i.openImagesClose').click(function(){
		$('.openImages').css('display','none');
		});
	//放大图片 左右按钮显示样式
	$('.openImages p').hover(function(){
		$('.openImagesPrev,.openImagesNext').fadeIn(300);
		},function(){
			$('.openImagesPrev,.openImagesNext').fadeOut(300);
			});
    //放大图片 左右按钮点击样式
	// 注意 这里的逻辑暂时是不对的； 不管点哪个 图放大 再点左按钮都是 换到最后一张 而点右 都是换到第2张； 因为 下面赋值的iq=0  ；而不是 当前点击的索引值； 以前让iq=0 是因为 一般都是开始就只显示第一张；所以iq才会等于0；
	  var upImagesLIindex=$('.upImages ul li').length;
	  var iq=0; //这里的iq 因为不是为0；而是为 点击图片放大的那个 index() 索引值；
	 $('.openImagesPrev').click(function(){
		 if(iq>0){
			$('.openImages p span').css({'background':'url(images/index/UP-images/html'+(iq-1)+'.jpg) no-repeat'});
			iq--;
			 }
		 else{
			 $('.openImages p span').css({'background':'url(images/index/UP-images/html'+(upImagesLIindex-1)+'.jpg) no-repeat'});
			 iq=upImagesLIindex-1;
			 }
		});
	$('.openImagesNext').click(function(){
		if(upImagesLIindex>iq+1){
			$('.openImages p span').css({'background':'url(images/index/UP-images/html'+(iq+1)+'.jpg) no-repeat'});
			iq++;
			}
		else{
			$('.openImages p span').css({'background':'url(images/index/UP-images/html0.jpg) no-repeat'});
			iq=0;
			}
		});

 //页面尾部的出现 特效
	var zHeight=$(document).height();
	var yHeight=$(window).height();
	var trueHeight=zHeight-yHeight;
	$(window).scroll(function(){
		var YHbottom=$(window).scrollTop();
		if(YHbottom>trueHeight-300){
			$('.YHfoot').animate({'bottom':'0'},300);
			}
		else{
			$('.YHfoot').stop(true).animate({'bottom':'-267px'},600);
			}
		});

	 //前端文章推荐css部分
	$('.textcontentL ul li:last').css('border','none');
	$('.textcontentR ul li:last').css('border','none');
	//网页微博微信分享css部分
	  $('.shareWb a.weibo_share img').hover(function(){
		   $(this).attr('src','images/index/weibo2.png');
	  },function(){
	      $(this).attr('src','images/index/weibo1.png');
	  });
	  $('.shareWb a.qq_share img').hover(function(){
		   $(this).attr('src','images/index/qq2.png')
	  },function(){
	      $(this).attr('src','images/index/qq1.png');
	  });
	//友情链接
	$('.friendlink ul li:last a').css({'color':'#FBC25E'});
	$('.friendlink ul li:gt(11):not(:last)').css('display','none');
	$('.friendlink ul li:last a').click(function(){
		 if($(this).text()=='更多▼'){
			  $(this).parent('li').siblings('li:gt(11)').css('display','block');
			  $(this).text('收缩▲')
			 }
		else{
			$(this).parent('li').siblings('li:gt(11)').css('display','none');
			 $(this).text('更多▼')
			}
		});
	 $('.YH_description span').click(function(){
		    if($(this).text()=='详情▼'){
				$(this).siblings('em').show();
				$(this).text('详情▲')
				}
		    else{
				$(this).siblings('em').hide();
				$(this).text('详情▼')
				}
		 });
	   /*手机端miniNav导航*/
	   $('.miniNavClick').click(function(){
	   	   $('.miniNav').toggle();
	   	 });
	   $('.miniNav ul li a').click(function(){
         $(this).addClass('miniAclick').parent('li').siblings().find('a').removeClass('miniAclick');
	   	  return false;
	   	 });
	   //$('.navAnimate li a').height($(window).height())
	   //alert($(window).height());
	   //alert($('.navAnimate li a').height());


  /*jquery 函数关闭符不能删除*/

	});

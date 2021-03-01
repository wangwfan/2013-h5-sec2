var head1=document.querySelector('.head-top')
var list2=document.querySelector(".list2")

var s1=head1.querySelector('.s1')
var s2=head1.querySelector('.s2')
// var search1=list.querySelector('input')
var search1=document.querySelector('.f1')
s1.onclick=function(){
	head1.style.padding="15px 0"
	head1.style.transition="padding .3s"
	s1.style.display="none"
	s2.style.display="block"
}
s2.onclick=function(){
	head1.style.padding=0
	head1.style.transition="padding .3s"
	s2.style.display="none"
	s1.style.display="block"
}
search1.onfocus=function(){
	search1.className="f1 long"
	
}
search1.onblur=function(){
	search1.className="f1 find"
}

var lady=document.querySelector('.lady')
var nav1=document.querySelector('.nav1')
var nav=document.querySelector('.nav')
var naa=document.getElementById('naa')
var xian=document.querySelector('.xian')
var screenWidth=document.body.clientWidth
naa.style.width=screenWidth+"px"
lady.onmouseover=function(){
	// xian.style.display="block"
	// xian.style.width="100%"
	// xian.style.transition="width 3s"
	naa.innerHTML=`
		<div class="lady">
			<div class="div-l" style="width:25%;">
				<dl style="margin: 40px 100px;">
					<dt><a href="#">甄选系列</a></dt>
					<dd><a href="#">新品上市</a></dd>
					<dd><a href="#">经典老花系列</a></dd>
					<dd><a href="#">新春臻选</a></dd>
					<dd><a href="#">热销榜单</a></dd>
					<dd><a href="#">Holiday 系列明星同款</a></dd>
				</dl>
			</div>
			<div class="div-r" style="width:75%;">
				<dl style="margin-right: 190px;">
					<dt><a href="#">服饰</a></dt>
					<dd><a href="#">连衣裙</a></dd>
					<dd><a href="#">上衣</a></dd>
					<dd><a href="#">T恤</a></dd>
					<dd><a href="#">下装</a></dd>
					<dd><a href="#">外套</a></dd>
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">手袋</a></dt>
					<dd><a href="#">单肩包</a></dd>
					<dd><a href="#">双肩包</a></dd>
					<dd><a href="#">手提包</a></dd>
					<dd><a href="#">风琴包</a></dd>
					<dd><a href="#">托特包</a></dd>
					<dd><a href="#">斜挎包</a></dd>
					<dd><a href="#">相机包</a></dd>
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">小皮件</a></dt>
					<dd><a href="#">短款钱夹</a></dd>
					<dd><a href="#">长款钱夹</a></dd>
					<dd><a href="#">手拿包</a></dd>
					<dd><a href="#">腰包</a></dd>
					<dd><a href="#">卡夹</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">鞋履</a></dt>
					<dd><a href="#">运动鞋</a></dd>
					<dd><a href="#">鞋履</a></dd>
					<dd><a href="#">休闲鞋</a></dd>
					<dd><a href="#">平底鞋</a></dd>
					<dd><a href="#">高跟鞋</a></dd>
					<dd><a href="#">凉鞋</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">腕表</a></dt>
					<dd><a href="#">女士腕表</a></dd>
					<dd><a href="#">智能腕表</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">首饰</a></dt>
					<dd><a href="#">手链</a></dd>
					<dd><a href="#">项链</a></dd>
					<dd><a href="#">戒指</a></dd>
					<dd><a href="#">耳钉</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">配饰</a></dt>
					<dd><a href="#">首饰</a></dd>
					<dd><a href="#">墨镜</a></dd>
					<dd><a href="#">香氛</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">MICHAEL KORS COLLECTION</a></dt>
					<dd><a href="#">优惠</a></dd>
				</dl>
			</div>
		</div>
	`
	nav1.className='nav clearfix'
}
naa.onmouseover=function(){
	nav1.className='nav clearfix'
}
naa.onmouseout=function(){
	naa.className='nav1 clearfix'
	naa.style.transform="all .5s"
}

window.onscroll=function(e){
	var e=e || window.event
	var nav1=document.querySelector('.nav1')
	var nav=document.querySelector('.nav')
	var lii=document.getElementById('lii')
	var naa=document.querySelector('#naa')
	var list2=document.querySelector('.list2')
	var list1=document.querySelector('.list1')
	var logo=document.querySelector('.logo')
	var img1=logo.querySelector('img')
	var top1=document.documentElement.scrollTop
	var topp=document.getElementById("btn-top");
	if(top1>25){
		lii.className="list1"
		logo.style.padding="20px 0"
		logo.style.transition="padding .7s"
		// list.style.transition="all .1s"
		naa.style.top="100px"
	}else{
		lii.className="list2"
		logo.style.padding="36px 0"
		logo.style.transition="padding .2s"
		naa.style.top="132px"
	}
	if(top1>500){
		topp.style.display="block"
	}else{
		topp.style.display="none"
	}

}
var man=document.querySelector('.man')
var page=document.querySelector('.page')
var spage=document.querySelector('.spage')
var cloth=document.querySelector('.cloth')
var shoes=document.querySelector('.shoes')
var peishi=document.querySelector('.peishi')
var watch=document.querySelector('.watch')
var gift=document.querySelector('.gift')
var zekou=document.querySelector('.zekou')
man.onmouseover=function(){
	naa.innerHTML=`
		
			<div class="div-l" style="width:35%;">
				<dl style="margin: 40px 200px;">
					<dt><a href="#">甄选系列</a></dt>
					<dd><a href="#">新品上市</a></dd>
					<dd><a href="#">旅行单品</a></dd>
				</dl>
			</div>
			<div class="div-r" style="width:65%;">
				<dl style="margin-right: 190px;">
					<dt><a href="#">服饰</a></dt>
					<dd><a href="#">上衣</a></dd>
					<dd><a href="#">T恤</a></dd>
					<dd><a href="#">裤装</a></dd>
					<dd><a href="#">外套</a></dd>
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">手袋</a></dt>
					<dd><a href="#">双肩包</a></dd>
					<dd><a href="#">公文包</a></dd>
					<dd><a href="#">斜挎包</a></dd>
					<dd><a href="#">邮差包</a></dd>
					<dd><a href="#">手提包</a></dd>
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">小皮件</a></dt>
					<dd><a href="#">短款钱夹</a></dd>
					<dd><a href="#">长款钱夹</a></dd>
					<dd><a href="#">手拿包</a></dd>
					<dd><a href="#">卡夹</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">配饰</a></dt>
					<dd><a href="#">墨镜</a></dd>
					<dd><a href="#">帽子</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">鞋履</a></dt>
					<dd><a href="#">运动鞋</a></dd>
					<dd><a href="#">休闲鞋</a></dd>
					<dd><a href="#">查看全部</a></dd>
				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">腕表</a></dt>
					<dd><a href="#">查看全部</a></dd>
				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}

page.onmouseover=function(){
	
	naa.innerHTML=`
			<div class="div-l" style="margin-left:300px">
				<dl style="margin: 40px 200px;">
					<dt><a href="#">甄选系列</a></dt>
					<dd><a href="#">新品上市</a></dd>
					<dd><a href="#">CECE系列手袋</a></dd>
					<dd><a href="#">SOHO系列手袋</a></dd>
					<dd><a href="#">HENDRIX系列手袋</a></dd>
					<dd><a href="#">MERCER系列手袋</a></dd>
					<dd><a href="#">经典老花系列商品</a></dd>
				</dl>
			</div>
			<div class="div-r" >
				<dl style="margin-left:50px;margin-right: 190px;">
					<dt><a href="#" tyle="color:#999">品类导航</a></dt>
					<dd><a href="#">单肩包</a></dd>
					<dd><a href="#">双肩包</a></dd>
					<dd><a href="#">双肩包</a></dd>
					<dd><a href="#">托特包</a></dd>
				</dl>
				<dl style="margin-right:10px;margin-top:95px">
					<dd><a href="#">斜挎包</a></dd>
					<dd><a href="#">MICHAEL KORS COLLECTION</a></dd>
					<dd><a href="#">优惠</a></dd>
				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}
page.onmouseout=function(){
	naa.style.padding="0"
}
spage.onmouseover=function(){
	
	naa.innerHTML=`
			<div class="div-l" style="margin-left:300px">
				<dl style="margin: 40px 200px;">
					<dt><a href="#">甄选系列</a></dt>
					<dd><a href="#">热门精选</a></dd>
					<dd><a href="#">新品上市</a></dd>
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
			</div>
			<div class="div-r" >
				<dl style="margin-right: 190px;">
					<dt><a href="#" tyle="color:#999">品类导航</a></dt>
					<dd><a href="#">短款钱夹</a></dd>
					<dd><a href="#">长款钱夹</a></dd>
					<dd><a href="#">手拿包</a></dd>
			
				</dl style="margin-right: 190px;">
				<dl style="margin-top:95px">
					<dd><a href="#">优惠</a></dd>

				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}
spage.onmouseout=function(){
	naa.style.padding="0"
}
cloth.onmouseover=function(){
	
	naa.innerHTML=`
			<div class="div-l" style="margin-left:300px">
				<dl style="margin: 40px 300px 0 0;">
					<dt ><a href="#" style="font-weight:normal">甄选系列</a></dt>
					<dd><a href="#">新品上市</a></dd>
					<dd><a href="#">甄选裙装</a></dd>
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
			</div>
			<div class="div-r" >
				<dl style="margin-right: 190px;">
					<dt><a href="#" style="color:#999;font-weight:normal">品类导航</a></dt>
					<dd><a href="#">连衣裙</a></dd>
					<dd><a href="#">上衣</a></dd>
					<dd><a href="#">下装</a></dd>
					<dd><a href="#">外套</a></dd>
			
				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}
cloth.onmouseout=function(){
	naa.style.padding="0"
}
shoes.onmouseover=function(){
	
	naa.innerHTML=`
			<div class="div-l" style="margin-left:300px">
				<dl style="margin: 40px 200px;">
					<dt><a href="#" style="font-weight:normal">甄选系列</a></dt>
					<dd><a href="#">新品上市</a></dd>
					<dd><a href="#">KORS STYLE单品推荐</a></dd>
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
			</div>
			<div class="div-r" >
				<dl style="margin-right: 190px;">
					<dt><a href="#" style="color:#999;font-weight:normal">品类导航</a></dt>
					<dd><a href="#">运动鞋</a></dd>
					<dd><a href="#">平底鞋</a></dd>
					<dd><a href="#">高跟鞋</a></dd>
					<dd><a href="#">凉鞋</a></dd>
			
				</dl>
				<dl style="margin-right: 190px;margin-top:100px">
					<dd><a href="#">鞋履</a></dd>
				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}
shoes.onmouseout=function(){
	naa.style.padding="0"
}
peishi.onmouseover=function(){
	
	naa.innerHTML=`
			<div class="div-r" style="margin-left:43%">
				<dl style="margin-right: 190px;">
					<dt><a href="#">品类导航</a></dt>
					<dd><a href="#">首饰</a></dd>
					<dd><a href="#">墨镜</a></dd>
					<dd><a href="#">香氛</a></dd>
					
				</dl>
			</div>
			
		
	`
	naa.className='nav clearfix'
}
peishi.onmouseout=function(){
	naa.style.padding="0"
}

watch.onmouseover=function(){
	
	naa.innerHTML=`
			<div class="div-l" style="margin-left:300px">
				<dl style="margin: 40px 200px;">
					<dt><a href="#">甄选系列</a></dt>
					<dd><a href="#">新品上市</a></dd>
					<dd><a href="#">查看全部</a></dd>
				
				</dl>
			</div>
			<div class="div-r" >
				<dl style="margin-right: 190px;">
					<dt><a href="#">女士</a></dt>
					<dd><a href="#">链式腕表</a></dd>
					<dd><a href="#">皮质腕表</a></dd>
					<dd><a href="#">智能腕表</a></dd>

				</dl>
				<dl style="margin-right: 190px;">
					<dt><a href="#">男士</a></dt>
					<dd><a href="#">腕表系列</a></dd>
					
				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}
watch.onmouseout=function(){
	naa.style.padding="0"
}
gift.onmouseover=function(){
	
	naa.innerHTML=`
			<div class="div-l" style="margin-left:500px">
				<dl style="margin: 40px 200px 0 0;">
					<dt><a href="#" style="font-weight:normal">甄选系列</a></dt>
					<dd><a href="#">热门精选</a></dd>
					
					<dd><a href="#">查看全部</a></dd>
					
				</dl>
			</div>
			<div class="div-r" >
				<dl style="margin-right: 190px;">
					<dt><a href="#" style="color:#999;font-weight:normal">品类导航</a></dt>
					<dd><a href="#">女士礼品</a></dd>
					<dd><a href="#">男士礼品</a></dd>
				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}
gift.onmouseout=function(){
	naa.style.padding="0"
}
zekou.onmouseover=function(){

	naa.innerHTML=`
			<div class="div-l" style="margin-left:400px">
				<dl style="margin: 40px 200px 0 0;">
					<dt><a href="#" style="font-weight:normal">甄选系列</a></dt>
					<dd><a href="#">最新折扣</a></dd>
					
					
				</dl>
			</div>
			<div class="div-r" >
				<dl style="margin-right: 190px;">
					<dt><a href="#" style="color:#999;font-weight:normal">品类导航</a></dt>
					<dd><a href="#">查看全部</a></dd>
					<dd><a href="#">手袋</a></dd>
					<dd><a href="#">小皮件</a></dd>
					<dd><a href="#">服饰</a></dd>
					<dd><a href="#">鞋履</a></dd>
				</dl>
				<dl style="margin-right: 190px;margin-top:100px">
					<dd><a href="#">腕表</a></dt>
					<dd><a href="#">男士</a></dd>
				</dl>
			</div>
		
	`
	naa.className='nav clearfix'
}
zekou.onmouseout=function(){
	naa.style.padding="0"
}
//返回顶部
var topp=document.getElementById("btn-top");

topp.onclick=function(){
		   
	timer=setInterval(function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var ispeed=-100;
		if(scrollTop==0){
		    clearInterval(timer);
		}
		document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
		},10)
	};
	
	var mySwiper = new Swiper ('.swiper-container', {
	          direction: 'horizontal', // 水平切换选项
	          loop: true, // 循环模式选项
	          autoplay:true,
	          
	          // 如果需要分页器
	          pagination: {
	            el: '.swiper-pagination',
	            clickable :true,
				
	          },
			   loop: true,
	          autoplay:true,
	          // 如果需要前进后退按钮
	          navigation: {
	            nextEl: '.swiper-button-next',
	            prevEl: '.swiper-button-prev',
	          },
	          
	          // 如果需要滚动条
	          scrollbar: {
	            el: '.swiper-scrollbar',
	          },
	        })      


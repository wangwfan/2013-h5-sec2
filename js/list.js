//获取操作对象
var row=document.querySelector('.row');
var pagination1=document.querySelector('.pagination');
(async function(){
    var dt=await promiseAjax({
        url:'../php/list.php',
        datatype:'json'
    })
    //创建分页器对象
    new Pagination(pagination1,{
        pageInfo:{
            pagenum:1,
            pagesize:16,
            totalsize:dt.length,
            totalpage:Math.ceil(dt.length/16)
        },
        textInfo:{
            first:'首页',
            prev:"上一页",
            next:"下一页",
            last:"尾页"
        },cb(m){
            //获取当前页需要显示的数据
            var ar1=dt.slice((m-1)*16,m*16)
            //创建拼接所有数据的字符串
            var str=''
            //遍历当前ar1数组中所有的数据
			
            ar1.forEach(item=>{
                str+=`
                <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="thumbnail">
   
                     <a href="../html/xiangqin.html?id=${item.id}"><img src="${item.pic}" ></a>
                     <div class="caption">
					 <h5 style="font-weight:bold;font-size:12px;line-height:16px;letter-spacing:1px;margin-top:10px">${item.name1}</h5>
                     <p style="font-size:12px;margin-top:5px">${item.name}</p>
                     <p style="font-size:12px">￥${item.price}</p>
                     
                     </div>
               </div>
             </div>    
                `
            })
            //把当前拼接好的字符串，添加到row盒子中
            row.innerHTML=str
        }
    })
})()
// var num1=document.querySelector('.c-rr')
// var i=num1.querySelector('i')
// i.innerHTML=`${item.length}`
 
//获取尺寸按钮
$('.d1').click(function(){
	if( $('.d1').css('background-position')=="-71px -939px"){
		timer1=setInterval(function(e){
			var e=e || window.event
			var cc=document.querySelector('.cc')
			var height1=cc.offsetHeight
			
			var ispeed=10;
			if(cc.offsetHeight==410){
			    clearInterval(timer1);
			}
			var he=height1+ispeed+"px"
			cc.style.height=`${he}`;
		},5);
		$('.d1').css('background-position','-106px -939px')
	}else{
		timer1=setInterval(function(e){
			var e=e || window.event
			var cc=document.querySelector('.cc')
			var height1=cc.offsetHeight
			
			var ispeed=-5;
			if(cc.offsetHeight==0){
			    clearInterval(timer1);
			}
			var he=height1+ispeed+"px"
			cc.style.height=`${he}`;
		},5);
		$('.d1').css('background-position','-71px -939px')
	}
	return false
})

$('.color2').children().mouseover(function(){
	var a1=$('.color1')
	var p1=a1[0].querySelector('p')
	var b1=this.querySelector('span')
	p1.innerHTML=b1.innerText
	
})
$('.color2').children().mouseout(function(){
	var a1=$('.color1')
	var p1=a1[0].querySelector('p')
	p1.innerHTML=""
})



$('.d2').click(function(){
	if( $('.d2').css('background-position')=="-71px -939px"){
		timer1=setInterval(function(e){
			var e=e || window.event
			var c1=document.querySelector('.color1')
			var height1=c1.offsetHeight
			
			var ispeed=10;
			if(c1.offsetHeight==260){
			    clearInterval(timer1);
			}
			var he=height1+ispeed+"px"
			c1.style.height=`${he}`;
		},5);
		$('.d2').css('background-position','-106px -939px')
	}else{
		timer1=setInterval(function(e){
			var e=e || window.event
			var c1=document.querySelector('.color1')
			var height1=c1.offsetHeight
			
			var ispeed=-5;
			if(c1.offsetHeight==0){
			    clearInterval(timer1);
			}
			var he=height1+ispeed+"px"
			c1.style.height=`${he}`;
		},5);
		$('.d2').css('background-position','-71px -939px')
	}
	return false
})

$('.d3').click(function(){
	if( $('.d3').css('background-position')=="-71px -939px"){
		timer1=setInterval(function(e){
			var e=e || window.event
			var p1=document.querySelector('.price1')
			var height1=p1.offsetHeight
			
			var ispeed=10;
			if(p1.offsetHeight==140){
			    clearInterval(timer1);
			}
			var he=height1+ispeed+"px"
			p1.style.height=`${he}`;
		},5);
		$('.d3').css('background-position','-106px -939px')
	}else{
		timer1=setInterval(function(e){
			var e=e || window.event
			var p1=document.querySelector('.price1')
			var height1=p1.offsetHeight
			
			var ispeed=-5;
			if(p1.offsetHeight==0){
			    clearInterval(timer1);
			}
			var he=height1+ispeed+"px"
			p1.style.height=`${he}`;
		},5);
		$('.d3').css('background-position','-71px -939px')
	}
	return false
})
$('.layout-four').click(function(){
	var nr=$('.col-xs-12')
	if($('.caption').children().hasClass("padding-l")){
		$('.caption').children().removeClass("padding-l")
	}
	nr.removeClass("col-lg-6 col-md-12 col-sm-12 col-xs-12")
	nr.addClass("col-lg-3 col-md-4 col-sm-6 col-xs-12")
	
})
$('.layout-two').click(function(){
	var nr=$('.col-xs-12')
	$('.caption').children().addClass("padding-l")
	nr.toggleClass("col-lg-6")
	nr.removeClass("col-lg-3 col-md-4 col-sm-6 col-xs-12")
	nr.addClass("col-lg-6 col-md-12 col-sm-12 col-xs-12")
})


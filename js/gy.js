window.onscroll=function(e){
	var e=e || window.event
	
	var top1=document.documentElement.scrollTop
	var top=document.getElementById("btn-top");
	
	if(top1>500){
		top.style.display="block"
	}else{
		top.style.display="none"
	}

}
//返回顶部
var topp=document.getElementById("btn-top");

topp.onclick=function(){
		       //alert(11);
	timer=setInterval(function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var ispeed=-100;
		if(scrollTop==0){
		    clearInterval(timer);
		}
		document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
		},10)
	};
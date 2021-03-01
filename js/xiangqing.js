

var box=document.querySelector(".box")
			var boxRight=document.querySelector(".boxRight")
			var mark=document.querySelector(".mark")
			var img2=document.querySelector(".img2")
			var div3=document.querySelector(".div3")
			var img=div3.querySelectorAll('img')
			var img3=document.querySelector(".p1")
			var img4=document.querySelector(".p2")
			var img5=document.querySelector(".p3")
		var img1=box.querySelector("img")
		var i1=img1.getAttribute("src")	
		var i2=img2.getAttribute("src")	
		var i3=img3.getAttribute("src")	
		var i4=img4.getAttribute("src")	
		var i5=img5.getAttribute("src")	
		var dt;
			function move1(e){
				// e=e || window.event
				var x1=e.pageX-box.offsetLeft-parseInt(mark.offsetWidth/2)
				var y1=e.pageY-box.offsetTop-parseInt(mark.offsetHeight)
				var minX=110,minY=0
				var maxX=box.offsetWidth-mark.offsetWidth
				var maxY=box.offsetHeight-mark.offsetHeight
				var rightX,rightY
				if(x1<minX){
					mark.style.left=minX+"px"
					rightX=minX-110
				}else if(x1>maxX){
					mark.style.left=minX+maxX+"px"
					rightX=maxX
				}else{
					mark.style.left=x1+"px"
					rightX=x1-110
				}
				if(y1<minY){
					mark.style.top=minY+"px"
					rightY=minY
				}else if(y1>maxY){
					mark.style.top=maxY+"px"
					rightY=maxY
				}else{
					mark.style.top=y1+"px"
					rightY=y1
				}
				
				img2.style.left=-rightX*2+"px"
				img2.style.top=-rightY*2+"px"
			}
		
			box.onmouseover=function(e){
				
				var e = e || window.event
				boxRight.style.display="block"
				mark.style.display="block"
				
			}
			box.onmousemove=function(e){
				
				var  e = e || window.event
				move1(e)
			}	
			box.onmouseout=function(){
				
				boxRight.style.display="none"
				mark.style.display="none"
			}
			for(let i=0;i<img.length;i++){
				img[i].onclick=function(){
					var s=img[i].getAttribute("src")
					for(var j=0;j<img.length;j++){
						img[j].className="p1"
					}
					
					this.className="bgc p1"
					
					box.firstElementChild.setAttribute("src",s)
					boxRight.firstElementChild.setAttribute("src",s)
				}
}
var price2=document.querySelector('.price2')
var t2=document.querySelector('.t2')
var t3=document.querySelector('.t3')
var c3=document.querySelector('.c3')
//获取当前地址栏中的参数信息
var search=location.search
//获取大盒子对象
var fdj=document.querySelector(".fdj")
//判断当前search对象中是否有值
if(search){
    //分割search字符串
    var id=search.split('=')[1];

    (async function(){
         dt=await promiseAjax({
            url:'../php/xiangqing.php',
            data:'id='+id,
            datatype:'json'
        })
        //创建拼接所有内容的字符串
		var d1=dt.xq_pic1
		var d2=dt.xq_pic2
		var d3=dt.xq_pic3
		img1.setAttribute("src",d1)
		img2.setAttribute("src",d1)
		img3.setAttribute("src",d1)
		img4.setAttribute("src",d2)
		img5.setAttribute("src",d3)
		var strp2=`￥${dt.price}`
		var strt2=`${dt.name}`
		var strt3=dt.model
		var strc3=`${dt.color}`
		price2.innerHTML=strp2
		t2.innerHTML=strt2
		t3.innerHTML=strt3
		c3.innerHTML=strc3
		
   //      var str=`
   //      	<div class="box" >
			// 	<img src="${dt.xq_pic1}" />
			// 	<div class="mark"></div>
			// </div>
			// <div class="boxRight">
			// 	<img src="${dt.xq_pic1}" class="img2"/>
			// </div>
			// <div class="div3">
			// 	<img src="${dt.xq_pic1}" class="bgc p1"/>
			// 	<img src="${dt.xq_pic2}" class="p1"/>
			// 	<img src="${dt.xq_pic3}" class="p1"/>
			// </div>
   //      `
        //把当前内容添加到大盒子中
        // fdj.innerHTML=str+fdj.innerHTML;
    })()

}else{
    alert("你还没选中商品")
    location="../html/list.html"
}

//给大盒子对象绑定点击事件
fdj.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
	
    //判断点击的对象是否为加入购物车按钮
    if(target.innerHTML=="加入购物车"){
        //获取localStorage中的cartList3
        var cartList=localStorage.getItem("cartList2")
		
        //判断当前获取的cartList是否存在
        if(cartList){
            //把localStorage中获取的内容转为数组对象
            cartList=JSON.parse(cartList)
            var a=0 //判断当前添加的商品是否在localStorage中存在
            //遍历数组中所有元素啊
            cartList.forEach(item=>{
                //判断当前遍历的商品是否等于要添加的商品
                if(item.id==dt.id){
                    a++
                    item.cart_number++
                }
            })
            //判断a变量是否等于0
            if(a==0){
                //修改商品数量
                dt.cart_number=1
                //把当前对象追加到数组中
                cartList.push(dt)
            }
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList2",JSON.stringify(cartList))
        }else{
            //修改当前商品数量
            dt['cart_number']=1
            //把当前商品添加到localStorage中
            localStorage.setItem("cartList2",JSON.stringify([dt]))
        }

    }  
}
var url=location.href
var name1=getCookie("user")
var shop=document.querySelector('.shop-c')
var num1=document.querySelector('.num1')
var btn1=document.querySelector('.see')
var cartList=localStorage.getItem("cartList2")
cartList=JSON.parse(cartList)||[]
if(name1){
    show()
}else{
    alert("你还没登录，请登录在进入")
    location="./login.html?pathUrl="+url
}
function show(){
	var sum=total()
	var sum1=total1()
	if(cartList.length>0){
		var str2=`${sum1[0]}`
		num1.innerHTML=str2
		
	}
	
	var str3=''
	var str=''
	cartList.forEach(item=>{
	str3+=`
		<div class="shop-view">
			<a class="pic1"><img src="${item.pic}"/></a>
			<div class="shop-r">
				<p class="s-n">${item.name}</p>
				<p>尺寸：均码</p>
				<p>颜色：${item.color}</p>
				<p>数量：${item.cart_number}</p>
				<p><a data-id="${item.id}">删除</a><span>￥${item.pricesum}</span></p>
			</div>
		</div>
	`
	 })
	str3+=`
	<div class="sum"><span>总计</span>&nbsp;&nbsp;&nbsp;<span>￥${sum1[1]}</span></div>
	<a href="./shopcar.html"><button class="see">查看购物袋</button></a>
	<button>结算</button>
	`
	shop.innerHTML=str3
}

function total(){
    var num=0 //所选商品种类
    var price1=0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item=>{
        //判断当前商品是否被选中
        if(item.is_select==1){
			
            num++
            price1+=item.cart_number*item.price
			
        }
    })
	
    return [num,price1]
}

function total1(){
   var num1=0
    var price2=0 //所选商品总价格
    //遍历cartList数组对象
    cartList.forEach(item=>{
       num1+=item.cart_number
        price2+=item.cart_number*item.price
			
        
    })
	
    return [num1,price2]
}
shop.onclick=function(e){
	var e = e || window.event
	//获取点击对象
	var target=e.target || e.srcElement
	if(target.innerHTML=="删除"){
		var id=target.getAttribute("data-id")
		
			cartList=cartList.filter(item=>{
			    //过滤被删除的商品
			    return item.id!=id
			})
		localStorage.setItem("cartList2",JSON.stringify(cartList))
		//调用show方法，重新把页面再次渲染
		// total1()
		show()
	}
	
}
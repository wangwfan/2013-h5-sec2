//获取账号cookie
var name1=getCookie("user")

//获取大盒子对象
var box=document.querySelector(".b-c")
//获取地址栏中的地址
var url=location.href
//获取localStorage中的cartList3
var cartList=localStorage.getItem("cartList2")
//把当前cartList字符串转为数组对象
cartList=JSON.parse(cartList)||[]
//判断当前cookie是否存在
// var sum=total()
// var xiaoji=total1()

if(name1){
    show()
}else{
    alert("你还没登录，请登录在进入")
    location="./login.html?pathUrl="+url
}
function show(){
    //判断当前localStorage中是否有内容
    if(cartList.length>0){
        //获取全选框是否被选中
        var aa=cartList.every(item=>{
            //判断当前商品是否被选中
            return item.is_select==1
        })
		var gwdh=document.querySelector('.b-hh')
		gwdh.innerHTML="购物袋"
        //获取当前被选中商品的种类和价格
        var sum=total()
		// total1()
        var str2=`
		<div class="p-left">
        <div class="p-heading">
			<div class="in1">
				<input type="checkbox" name="quanxuan" ${aa?"checked":''} >全选
			</div>
            <div class="in2">商品信息</div>
            <div class="in3">单价</div>
			<div class="in4">数量</div>
			<div class="in5">小计</div>
            
        </div>
		</div>
		<div class="p-right">
			<div class="p-r-list">
				<h3>订单摘要</<h3>
				<h5>已有电子礼券优惠码？</h5>
				<div class="form-inp">
					<input type="text" placeholder="电子礼券优惠码"/>
					<a>使用</a>
				</div>
				<div class="price-list">
					<p>商品金额<span>￥${sum[1]}</span></p>
					<p>优惠金额<span>￥0.00</span></p>
					<p>运费<span>免费</span></p>
					<p>包装<span>免费</span></p>
				</div>
				<p><span>商品总计</span><span>￥${sum[1]}</span></p>
			</div>
			<div class="pay">
				<a class="btn-block">结算</a>
				<div class="p-xian"></div>
			</div>
			<div class="payway">
				<p>付款方式</p>
				<ul>
					<li><a href="#"><img src="../images/icon_alipay@2x.png" /></a></li>
					<li><a href="#"><img src="../images/icon_wechatpay@2x.png" /></a></li>
					<li><a href="#"><img src="../images/icon_cod@2x.png" /></a></li>
					<li><a href="#"><img src="../images/icon_huabei@2x.png" /></a></li>
					
				</ul>
			</div>
		</div>
        <div class="panel-body"></div>
		
        `
		
        //遍历数组中所有商品
        cartList.forEach(item=>{
            str2+=`
            <div class="media">
                <div class="media-left media-middle">
                <input type="checkbox" ${item.is_select==1?"checked":''} name="xuan" data-id="${item.id}">
                <a href="#">
                    <img class="media-object" src="${item.pic}" width="125" height="169" alt="...">
                </a>
                </div>
                <div class="media-body">
					<h4 class="media-heading">${item.name}</h4>
					<p>${item.model}</p>
					<p>颜色：${item.color}</p>
					<p>尺寸：均码</p>
					<ul>
						<li><a>修改</a></li>
						<li><a>加入心愿单</a></li>
						<li><a data-id="${item.id}">移除</a></li>
					</ul>
                </div>
				<div class="media-right">
					<p>￥${item.price}</p>
					<p>领优惠</p>
				</div>
				
					<div class="btn-group" id="btn" role="group" aria-label="...">
					    <button type="button" class="btn btn-default" data-id="${item.id}" ${item.cart_number<=1?"disabled":''}>-</button>
					    <button type="button" class="btn btn-default">${item.cart_number}</button>
					    <button type="button" class="btn btn-default" data-id="${item.id}" ${item.cart_number1<=item.cart_number?"disabled":''}>+</button>
					</div>
				<div class="media-r-r" data-id="${item.id}">￥${item.pricesum}</div>
				
                </div>
            </div>
            `
        })
        //给当前字符串拼接结束的标签
        str2+='</div>'
        //最后把拼接好的内容添加到box大盒子中
        box.innerHTML=str2
    }else{
        var str1=`
          <div class="body-l">
          	<p>请将您心仪的商品放入购物袋内</p>
          	<a href="./list.html"><button>即刻选购</button></a>
          </div>
          <div class="body-r">
          	<p>您可能会喜欢</p>
          	<div class="row">
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          			  <img src="../images/15826851158869611_442X595.jpg" />
          			  <div class="caption">
          				  <h5>MICHAEL MICHAEL KORS</h5>
          				  <p>毛领夹克外套</p>
          				  <p>￥1,950</p>
          			  </div>
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  		<img src="../images/15991264323993801.jpg" />
          				<div class="caption">
          					<h5>MICHAEL MICHAEL KORS</h5>
          					<p>毛领夹克外套</p>
          					<p>￥1,950</p>
          				</div>				  
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  	<img src="../images/15991264411693004.jpg" />
          			<div class="caption">
          				<h5>MICHAEL MICHAEL KORS</h5>
          				<p>毛领夹克外套</p>
          				<p>￥1,950</p>
          			</div>
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  	<img src="../images/1602828020945288.jpg" />
          			<div class="caption">
          				<h5>MICHAEL MICHAEL KORS</h5>
          				<p>毛领夹克外套</p>
          				<p>￥1,950</p>
          			</div>
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  	<img src="../images/16052376043489237.jpg" />
          			<div class="caption">
          				<h5>MICHAEL MICHAEL KORS</h5>
          				<p>毛领夹克外套</p>
          				<p>￥1,950</p>
          			</div>
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  	<img src="../images/160877872493343.jpg" />
          			<div class="caption">
          				<h5>MICHAEL MICHAEL KORS</h5>
          				<p>毛领夹克外套</p>
          				<p>￥1,950</p>
          			</div>
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  	<img src="../images/16040493458092165.jpg" />
          			<div class="caption">
          				<h5>MICHAEL MICHAEL KORS</h5>
          				<p>毛领夹克外套</p>
          				<p>￥1,950</p>
          			</div>
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  	<img src="../images/16052375495085144.jpg" />
          			<div class="caption">
          				<h5>MICHAEL MICHAEL KORS</h5>
          				<p>毛领夹克外套</p>
          				<p>￥1,950</p>
          			</div>
          		  </div>
          	  </div>
          	  <div class="col-sm-6 col-md-4">
          		  <div class="thumbnail">
          		  	<img src="../images/16064642397446344.jpg" />
          			<div class="caption">
          				<h5>MICHAEL MICHAEL KORS</h5>
          				<p>毛领夹克外套</p>
          				<p>￥1,950</p>
          			</div>
          		  </div>
          	  </div>
          	</div>
          </div>
        ` 
        //把当前内容添加到box盒子中
        box.innerHTML=str1
    }
}
//给box大盒子对象绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断当前点击的是否为+
    if(target.innerHTML=="+"){
        //获取当前对象中的id属性
		var id=target.getAttribute("data-id")
        // console.log(111)
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
				console.log(11)
                item.cart_number++
				item.pricesum=item.price*item.cart_number
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList2",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
		// total1()
        show()
    }
    //判断当前点击的是否为减法按钮
    if(target.innerHTML=='-'){
        //获取当前对象中的id属性
        var id=target.getAttribute("data-id")
        //遍历cartList数组对象
        cartList.forEach(item=>{
            //判断遍历出来的商品是否为当前操作商品
            if(item.id==id){
                item.cart_number--
				item.pricesum=item.price*item.cart_number
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList2",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        
		// total1()
		show()
    }
    //删除
    if(target.innerHTML=="移除"){
        //获取当前点击对象的id
        var id=target.getAttribute("data-id")
		
        cartList=cartList.filter(item=>{
            //过滤被删除的商品
            return item.id!=id
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList2",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
		// total1()
        show()
		
    }
    //全选
    if(target.name=="quanxuan"){
        //遍历所有商品
        cartList.forEach(item=>{
            //判断当前全选框是否被选中
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList2",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //选中框
    if(target.name=="xuan"){
        //获取当前商品对应的id 
        var id=target.getAttribute("data-id")
        //遍历数组中所有的商品对象
        cartList.forEach(item=>{
           if(item.id==id){
            //   //判断当前选中框是否被选中
            //   if(item.is_select==1){
            //       item.is_select=0
            //   }else{
            //       item.is_select=1
            //   }
            item.is_select=item.is_select==1?"0":"1"
           }
       })
        //重新把当前操作完毕的数组添加到localStorage中
        localStorage.setItem("cartList2",JSON.stringify(cartList))
        //调用show方法，重新把页面再次渲染
        show()
    }
    //去结算
    if(target.innerHTML=="结算"){
        //添加确认框
        if(confirm("你确定要购买吗？")){
            alert("你需要支付：￥"+total()[1])
            cartList=cartList.filter(item=>{
				
                return item.is_select!=1
            })
            //重新把当前操作完毕的数组添加到localStorage中
            localStorage.setItem("cartList2",JSON.stringify(cartList))
            //调用show方法，重新把页面再次渲染
            show()
        }
    }
    //清空购物车
    // if(target.innerHTML=="清空购物车"){
    //     //重新把当前操作完毕的数组添加到localStorage中
    //     localStorage.setItem("cartList2",JSON.stringify([]))
    //     //调用show方法，重新把页面再次渲染
    //     show()
    // }
	
	if(target.innerHTML=="加入心愿单"){
		alert("成功加入心愿单，亲~记得及时下单哦~")
	}

}
//统计所选商品种类和价格
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

// function total1(){
    
//     var prices=0 //所选商品总价格
	
//     //遍历cartList数组对象
// 	var xj=document.querySelector('.media-r-r')
//     cartList.forEach(item=>{
//         //判断当前商品是否被选中
// 		// var id=item.getAttribute("data-id")
//         prices=item.cart_number*item.price
// 		// if(item.id==id){
// 		// 	xj.innerHTML=prices
// 		// }
//     })
	
//     return prices
// }
// total1()

// function total1(){

// cartList.forEach(item=>{
// 	if(item.id==id){
// 		prices=item.cart_number*item.price
// 		xj.innerHTML=prices
// 	}
// })
// }
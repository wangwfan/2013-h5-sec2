var f1=document.querySelector('.denglu')
var sub1=f1.querySelector('[type="submit"]')
var user=f1.querySelector('[type="text"]')
var pass=f1.querySelector('[type="password"]')
var val
var search=location.search
//给能被点击的登录按钮绑定点击事件
user.onblur=function(){
	val=this.value
	
	var reg=/(1|\+861)[3-8]{1}\d{9}$/
	if(reg.test(val)){
		this.style.borderColor="green"
		user=true
	}else{
		this.style.borderColor="red"
		this.focus()
		user=false
	}
}

sub1.onclick=function(){
	
	//获取账号输入框中的value
	// var u1=user.value
	
	var p1=pass.value
	//调用ajax发送请求
// 	Ajax({
// 	    url:'../php/login.php',
// 	    data:`username=${val}&password=${p1}`,
// 	    success:function(dt){
// 	        //判断当前返回值是否等于1
// 	        if(dt==1){
// 	            location.href="../html/shopcar.html"
// 	        }else{
// 	            alert("登录失败")
// 	        }
// 			setCookie("user",val)
// 	    }
// 	})
// 	return false
// }
 Ajax({
         url:'../php/login.php',
         data:`username=${val}&password=${p1}`,
         success:function(dt){
             //判断当前返回值是否等于1
             if(dt==1){
                 //判断当前地址栏中是否有参数
                 if(search){
                     //获取参数中传入的地址
                     var new_url=search.split('=')[1]
                     location.href=new_url
                 }else{
                     location.href="./list.html"
                 }
                 
             }else{
                 alert("登录失败")
             }
 			setCookie("user",val)
         }
     })
     return false
 }
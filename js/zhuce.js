var f1=document.querySelector('.denglu')
var sub1=f1.querySelector('[type="submit"]')
var user=f1.querySelector('[type="text"]')
var pass=f1.querySelector('[type="password"]')
var val,p1
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
		alert("请输入11位手机号码~")
	}
}

pass.onblur=function(){
	p1=this.value
	var reg=/^\w{6,16}$/
	if(reg.test(p1)){
		this.style.borderColor="green"
		pass=true
	}else{
		this.style.borderColor="red"
		
		alert("密码必须是数字、字母，下划线，长度为6-20")
		this.focus()
		pass=false
	}
}

sub1.onclick=function(){
	//获取账号输入框中的value
	if(user&&pass){
		//调用ajax发送请求
		Ajax({
		    url:'../php/zhuce.php',
		    data:`use=${val}&pas=${p1}`,
		    success:function(dt){
		        //判断当前返回值是否等于1
		        if(dt==1){
					alert("注册成功~")
		            location.href="../html/login.html"
		        }else{
		            alert("注册失败")
		        }
		    }
		})
		return false
	}
	
}

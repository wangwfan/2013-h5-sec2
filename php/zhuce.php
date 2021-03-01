<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$u=$_GET['use'];
$p=$_GET['pas'];
//连接数据库
$link=mysqli_connect("localhost",'root','','mk');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="insert into user values('$u','$p')";
//执行SQL语句，并返回结果集

$sql1="select * from user where iphone='$u' and password='$p'";

$result=mysqli_query($link,$sql);
$result1=mysqli_query($link,$sql1);
//判断当前结果集中是否存在数据
if(mysqli_fetch_assoc($result1)){
    echo '1';
}else{
    echo '0';
}
//关闭连接
mysqli_close($link);

?>
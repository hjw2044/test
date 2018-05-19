$(function(){
    $('#entry').click(function(){
        var h1=$('#account').val();
        var h2=$('#password').val();
        if(h1===""||h2===""){
            alert('请输入账号或密码')
        }else{
            var a1=localStorage.getItem('account');
            var a2=localStorage.getItem('password');
            if(h1===a1){
                if(h2===a2){
                    alert('登入成功');
                    //跳转页面（bom的跳转页面）
                    //window.location.href=('https://www.baidu.com/?tn=96228755_hao_pg')
                    //在新页面打开
                    window.open('https://www.baidu.com/?tn=96228755_hao_pg')
                }else{
                    alert('密码不正确，请重新输入')
                }
            }else{
                alert('该用户名不存在')
            }


        }

















    });








});
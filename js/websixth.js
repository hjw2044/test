$(function(){


    $('#diy').click(function(){
        var h1=$('#num').val();
        var h2=$('#pass1').val();
        var h3=$('#pass2').val();
        var reg=/^[A-Za-z0-9]+$/;
        if(h1==="" || h2==="" || h3===""){
            alert("请输入完整的信息");
            if(h1===""){
                $('#num').css({
                    border: '1px solid red'
                });
            }else if(h2===""){
                    $('#num').css({
                        border: '1px solid red'
                    });
                }else if(h3===""){
                        $('#num').css({
                            border: '1px solid red'
                        });
                    }
        }else{
            if(reg.test(h1)){
                if(reg.test(h2) && h2.length>=6 && h2.length<=12){
                    if (h2===h3){
                        alert('注册成功');
                        $('#num').val("");
                        $('#pass1').val("");
                        $('#pass2').val("");
                        localStorage.setItem('account',h1);
                        localStorage.setItem('password',h3);
                    }else{
                        alert('输入的密码不一致，请重新输入')
                    }
                }else{
                    alert('密码的格式不正确');
                    $('#pass1').css({
                        border: '1px solid red'
                    });
                    $('#pass2').css({
                        border: '1px solid red'
                    });
                }
            }
            else{
                alert("输入错误")
            }
        }



    })












});


var sender = '<script>alert("abc")</script>'; //恶意字符串

//过滤HTML标签函数

safeHTML `</P>&{sender} welocome to you </p>`
//相当于:safeHTML(['<P>',"welocome to you"],'<script>alert("abc")</script>')

function safeHTML(data){
    //data=['<P>',"welocome to you"]
    let str=data[0];
    for(let i=1;i<arguments.length;i++){
       var arg = String(arguments[1]);      //arguments[1]='<script>alert("abc")</script>' 转换为字符串
       str+=arg.replace(/&/g,'&amp')       //拼接，正则替换掉恶意字符串,将//内对应的字符串转换为后面的文字表记
               .replace(/</g,'&lt')
               .replace(/>/g, '&gt');
        str += data[i];                   //连接上"welocome to you"
    }
    return str;                          //返回处理后的
}

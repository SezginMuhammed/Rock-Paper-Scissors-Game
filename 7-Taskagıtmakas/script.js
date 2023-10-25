var secenekler=["url(img/tas.png)","url(img/kagit.png)","url(img/makas.png)"];

function uret(){
    var random= Math.round(Math.random()*2);
    return random;
}   
var a, b;
function yerlestir(){
    a=secenekler[uret()];
    b=secenekler[uret()];
    document.getElementById("player1").style.backgroundImage = a;
    document.getElementById("player2").style.backgroundImage = b;
}

function sonucyaz(){

    var x = Number(document.getElementById("skor1").innerHtml);
    var y = Number(document.getElementById("skor2").innerHtml);


    if((a =="url(img/tas.png)") &&( b =="url(img/makas.png)"))
    {
        document.getElementById("skor1").innerHTML= x + 1;
    }
    else if((a =="url(img/tas.png)") && (b =="url(img/kagit.png)"))
    {
        document.getElementById("skor2").innerHTML= y + 1;
    }
    else if((a =="url(img/kagit.png)") && (b =="url(img/tas.png)"))
    {
        document.getElementById("skor1").innerHTML= x + 1;
    }
    else if((a =="url(img/kagit.png)") && (b =="url(img/makas.png)"))
    {
        document.getElementById("skor2").innerHTML= y + 1;
    }
    else if((a =="url(img/makas.png)") && (b =="url(img/tas.png)"))
    {
        document.getElementById("skor2").innerHTML= y + 1;
    }
    else if((a =="url(img/makas.png)") &&( b =="url(img/kagit.png)"))
    {
        document.getElementById("skor1").innerHTML= x + 1;
    }
}

function kazanan(){
    var x=Number(getElementById("skor1").innerHtml);
    var y=Number(getElementById("skor2").innerHtml);
    if(x==3){
        setInterval(function(){
            document.getElementById("sonuc").innerHTML="Player 1 kazandı.";
            setTimeout(function(){
                document.getElementById("sonuc").innerHTML="";
            },1000)
        },2000);
     
    }
    else if(y==3){
        setInterval(function(){
            document.getElementById("sonuc").innerHTML="Player 2 kazandı.";
            setTimeout(function(){
                document.getElementById("sonuc").innerHTML="";
            },1000)
        },2000);
     
    }
}


document.getElementById("btn").addEventListener("click",function(){
    uret();
    yerlestir();
    sonucyaz();
    kazanan();
});

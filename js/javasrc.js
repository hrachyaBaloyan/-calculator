let a;
let b;
let c;
let input;
let x;

document.getElementById("two").onclick = function(){
    document.getElementById("plus").innerHTML = "-"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=a-b;
       document.getElementById("number").innerHTML=c;
    }
    input.style.visibility = "visible";

       
}
document.getElementById("one").onclick = function(){
    document.getElementById("plus").innerHTML = "+";
    input.style.visibility="visible";
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=a+b;
       document.getElementById("number").innerHTML=c;
    }
    input=  document.querySelector("#b-input-values");

    input.style.visibility = "visible";
   
   
       
}
document.getElementById("tree").onclick = function(){
    document.getElementById("plus").innerHTML = "*"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=a*b;
       document.getElementById("number").innerHTML=c;
    }
    input.style.visibility = "visible";

       
}
document.getElementById("four").onclick = function(){
    document.getElementById("plus").innerHTML = ":"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=a/b;
       document.getElementById("number").innerHTML=c;
    }
    input.style.visibility = "visible";

       
}
document.getElementById("five").onclick = function(){
    document.getElementById("plus").innerHTML = "&#8730;"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=Math.sqrt(a)
       document.getElementById("number").innerHTML=c;
    }
    input.style.visibility = "hidden";



       
}
document.getElementById("six").onclick = function(){
    document.getElementById("plus").innerHTML = "%"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=a%b;
       document.getElementById("number").innerHTML=c;
    }

       
}
document.getElementById("seven").onclick = function(){
    document.getElementById("plus").innerHTML = "x<sup>2</sup>";

    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=Math.pow(a,2);
       document.getElementById("number").innerHTML=c;
       
    }
    input.style.visibility = "hidden";
   
       
}
document.getElementById("eight").onclick = function(){
    document.getElementById("plus").innerHTML = "x<sup>3</sup>"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=Math.pow(a,3);
       document.getElementById("number").innerHTML=c;
    }
    input.style.visibility="hidden";
       
}
document.getElementById("nine").onclick = function(){
    document.getElementById("plus").innerHTML = "x<sup>...</sup>&#8594;"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=Math.pow(a,b);
       document.getElementById("number").innerHTML = c;
    }

   input.style.visibility="visible";
  
       
}
document.getElementById("ten").onclick = function(){
    document.getElementById("plus").innerHTML = "a<sup>2</sup>+b<sup>2</sup>"
    document.getElementById("equal").onclick = function(){
        a=document.getElementById("a-input-values").value;
       a=Number(a);
       b=document.getElementById("b-input-values").value;
       b=Number(b);
       c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
       document.getElementById("number").innerHTML=c;
    }
    input.style.visibility="visible";
       
}
input=  document.querySelector("#b-input-values");

document.getElementById("c").onclick = function(){
    document.getElementById("a-input-values").value=null;
    document.getElementById("b-input-values").value=null;
    document.getElementById("number").innerHTML=null;

}
document.getElementById("cv").onclick = function(){
    document.getElementById("a-input-values").value=null;
    document.getElementById("b-input-values").value=null;


}

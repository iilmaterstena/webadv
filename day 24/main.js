// var button1 = document.getElementById("btn1");

var button1 = document.querySelector('button');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var v_button = document.getElementById('btn4');
var v_text = document.getElementById('txt1');

// button1.addEventListener('click', function(){
//     alert("Hello from addeventListener");
// })

// // button1.onclick = function(){
// //     alert("Hello");
// // }

// button2.onmouseover = function(){
//     alert("Mouse is over the button!");
// }

// button3.onmouseover = function(){
//     alert("Mouse has left the button!");
// }


v_button.onclick = function(){
    v_text.style.color = "red";
    v_text.style.backgroundColor ="lightgrey"
    v_text.style.textAling = "center";
    v_text.style.fontSize = "100px";
     v_text.style.padding = "20px";
    
}

  var btn_circle = document.getElementById("btnCircle");
  var btn_rect = document.getElementById("btnRect");
  var btn_triangle = document.getElementById("btnTriangle");

  var circle = document.getElementById("circle");
  var rect = document.getElementById("rect");
  var triangle = document.getElementById("triangle");


  btn_circle.onclick = function(){
    circle.setAttribute("class", "shape_circle");
  }
    btn_rect.onclick = function(){
    rect.setAttribute("class", "shape_rect");
  }
    btn_triangle.onclick = function(){
   triangle.setAttribute("class", "shape_triangle");
  }

   circle.onclick = function(){
       circle.setAttribute("class", "hide");
  }
  rect.onclick = function(){
        rect.setAttribute("class", "hide");
  }
   triangle.onclick = function(){
       triangle.setAttribute("class", "hide");
  }





































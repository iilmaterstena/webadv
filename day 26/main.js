var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick = function() {
    text.innerHTML = input.value;  
}


var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button1 = document.querySelector('#btn2_id');
var answer = document.querySelector('#answer');

button1.addEventListener("click", function() {
    const val1 = Number(input1.value);
    const val2 = Number(input2.value);

    if (isNaN(val1) || isNaN(val2)) {
        answer.innerHTML = "Please enter valid numbers.";
    } else {
        answer.innerHTML = val1 + val2;
    }
});

button.onclick=function(){
    if(input.value>10){
        text.innerHTML = "Input value is bigger than 10";
    }else if(input.value==10){
        text.innerHTML = "Input value is equals to 10";
    }else{
        text.innerHTML = "Input value is less than 10";
    }
}
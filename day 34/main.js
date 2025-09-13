// function printNames(){
//     document.write("Bleard");
//     document.write("<br>");
//     setTimeout(function () {document.write("Mergim");}, 3000);
//     document.write("Dalmat")
// }

// printNames();

var colors= ['red', 'green', 'blue', 'purple'];

function changeColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}
setInterval(changeColor, 1000);

var names= ['Lora', 'Ilma', 'Elma', 'Erona', 'Nita'];

function changeNames(){
    document.querySelector('p').innerHTML= names[Math.floor(Math.random()*names.length)];
}
setInterval(changeColor, 1000);
setInterval(changeNames, 500);
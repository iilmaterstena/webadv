// function showMwssage(){
//     alert("This is a funcition in Javascript");
// }

// showMessage();

function sum(x,y){
    document.write(x+y);

}

sum(2,5);
document.write("<br>");
sum(55,44);
document.write("<br>");
sum(120,54);


// arrow function
// var arrowFuncition = name => alert(`Hello ${name}`);
 
// arrowFuncition("Ilma");

// function testFuncition(){
//     var localVar = "ILMA";
//     alert(localVar);
// }

// testFuncition();

var car ={name: "Mercedes",
    color: "red",
    year:2020,
    kilometers:0,
    startEngine: function(){
        alert("This car is moving!");
    },
    get getkilometers(){
        return this.kilometers;

    },

    ste setKilometers(km){
        this.kilometers = km;
    }
};

console.log(car.getKilometers);
car.setKilometres = 100;
console.log(car.getKilometers);

// alert(car.name);

// alert(car['color']);

// var car = new Object();

// car.name = "Mercedes";
// car.color = "red";
// car.year = 2020;
// car.kilometers = 0;

// car.type = function(){
//     return this.name + " " + this.color + " " + this.year + " " + this.kilometers
// }

// console.log(car.type());


var progammingLanguages = ['javascript','php','java'];

console.log(progammingLanguages[2]);

progammingLanguages.push('Python');

progammingLanguages.pop();

progammingLanguages.unshift('c#');

progammingLanguages.shift();

console.log(progammingLanguages);

var progammingLanguages1 = ['javascript','php','java','Python','c#'];

progammingLanguages1.splice(1,1, 'Ruby');

console.log(progammingLanguages1);

console.log(Math.floor(Math.random()*10));

var students = ['student 1', 'student 2',];

var [s1, s2] = students;

console.log(s1);
console.log(s2);

var city = ['prishina ','gjakova ','gjilani ','peja '];

 var [c1, c2, ,c4] = city;

 console.log(c1);
 console.log(c2);
console.log(c4);

var numbers = [1,2,3,4,5,6,7,8,9,10];

var[first, second, ...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString());





























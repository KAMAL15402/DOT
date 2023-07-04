// let number = [1,3,5,7];
// console.log(number);
// number.push(9);
// console.log(number);
// number.unshift(8);
// console.log(number);
// number.splice(2,0, "mid");
// console.log(number);
// let courses = [
//     {no:1, cname: 'biology'},
//     {no:2, cname:'maths'}
// ];

// let course = courses.find(function(course){
//     return course.cname === 'maths';
// })

// let course = courses.find(course=> course.cname === 'biology');  
// console.log(course);

let first = [1,2];
let second = [3,4];
let com = [...first ,...second]; // spread operator
//console.log(com);


let arr = [1,2,3,4,5,6,7,8];

//for of loop
// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(number){
//     console.log(number)
// });


let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers); 













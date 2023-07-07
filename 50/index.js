//promise

// let mypromise = new Promise(function(resolve , reject){
//   setTimeout(function(){
//     console.log('i am inside pomise');
//   },5000);
//  // resolve(2233); 
//  reject(new Error('new error '))
// }
//  );
//  mypromise.then((value)=>{console.log(value)}) ;
//  mypromise.catch((error)=>{console.log('received an error' )});
  

// let promise1 = new Promise(function(resolve,reject){
// setTimeout(()=>{
//     console.log('settimeout 1 start');
// },2000);
// resolve (true);
// })
// let output = promise1.then(()=>{
//     let promise2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('settimeout 2 start');
//         },3000);
        
//         resolve("promise 2 resolvse");

//     })
//     return promise2;
// })
// output.then((value)=>console.log(value));        

async function utility(){
let content = fetch('https://jsonplaceholder.ir/users');
let output = await content.json();
console.log(output);
}

utility();
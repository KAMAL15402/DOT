// for(let i=1;i<=100;i++){
//     let newele = document.createElement('p');
//     newele.textContent = 'this is para' + i;
//     document.body.appendChild(newele);
// }

//optimized 
// let mydiv = document.createElement('div');
// for(let i=1;i<=100;i++){
//     let ele = document.createElement('p');
//     ele.textContent = 'this is para' + i;
//     mydiv.appendChild(ele);
// }
// document.body.appendChild(mydiv);





function addpara(){
    let para = document.createElement('p');
    para.textContent = 'js is single threaded';
    document.body.appendChild(para);
}
   
function app(){
let para = document.createElement('p');
para.textContent = 'ki haal chal';
document.body.appendChild(para);
}

addpara;
app;


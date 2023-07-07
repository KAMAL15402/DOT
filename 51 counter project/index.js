const count = document.querySelector('#counter');

const increment = ()=>{
    let  val = parseInt(count.innerText);
    val += 1;
    count.innerText = val;
 };

 const decrement = ()=>{
    let  val = parseInt(count.innerText);
    val -= 1;
    count.innerText = val;
 };

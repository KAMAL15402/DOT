let mydiv = document.createElement('div');
for(let i=1;i<=100;i++){
    let newelement = document.createElement('p');
    newelement.textContent='this is para'+i; 

    newelement.addEventListener('click',function(event){        
        console.log('para'+i+'clicked');
    });
    mydiv.appendChild(newelement);
}
document.body.appendChild(mydiv);

 
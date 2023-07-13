const inputslider = document.querySelector("[data-slider]");
const lengthdisplay = document.querySelector("[data-lengthno]");
const passworddisplay = document.querySelector("[data-password]");
const copybtn = document.querySelector("[data-copybtn]");
const copymsg = document.querySelector("[data-copymsg]");
const uppercasecheck = document.querySelector("#uppercase");
const lowercasecheck = document.querySelector("#lowercase");
const numbercheck = document.querySelector("#number");
const symbolcheck = document.querySelector("#Symbols");
const indicator = document.querySelector("[data-indicator]");
const generatebtn = document.querySelector(".Generate-button");
const allcheckbox = document.querySelectorAll("input[type-checkbox]");
const symbols ="!@#$%^&*()-+={}[]|;'<>,.";




let password = "";
let passwordlength = 10;
let checkcount = 0;
handleslider();
setindicator("#ccc");



function handleslider(){
    inputslider.value = passwordlength;
    lengthdisplay.innerHTML= passwordlength;
}


function setindicator(color){
 indicator.style.backgroundColor = color;

}

function getraninteger(min,max){
   return Math.floor( Math.random()*(max-min)) + min ;
}

function getrandominteger(){
    return getraninteger(0,9);
}
function generatelowercase(){
    return  String.fromCharCode(getraninteger(97,123));
}


function generateuppercase(){
    return  String.fromCharCode(getraninteger(65,91));
}

function generatesymbol(){
    const randnum = getraninteger(0,symbols.length);
   return symbols.charAt(randnum); 
}  

function calcStrength(){
    let hasupper = false;
    let haslower = false;
    let hassym = false;
    let hasnum = false;
    if(uppercasecheck.checked)hasupper=true;
    if(lowercasecheck.checked)haslower=true;
    if(symbolcheck.checked )hassym= true;
    if(numbercheck.checked)hasnum=true;

    if(hasupper && haslower &&(hasnum || hassym) && passwordlength>=8){
        setindicator("#0f0");
    }else if(    
        (hasupper || haslower) &&(hasnum || hassym) && passwordlength>=8
       ){
      
      
        setindicator("#ff0");
    }else{
        setindicator("#f00")
    }
}

async function copycontent(){
    try{
        await navigator.clipboard.writeText(passworddisplay.value);
         copymsg.innerText = "copied";
    }
    catch(e){ 
        copymsg.innerText = "failed"; 
    }
 copymsg.classList.add("active");
 setTimeout( () => {copymsg.classList.remove("active");},2000);   
}






function shufflepassword(array){

    for(let i=array.length -1;i>0;i--){
        const j = Math.floor(Math.random() *(i+1) );
        const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handlecheckboxchange(){
    checkcount = 0;
    allcheckbox.forEach((checkbox)=>{
        if(checkbox.checked)
        checkcount++ ;
    });
   
    //special condition
    if(passwordlength<checkcount){
        passwordlength = checkcount;
        handleslider();
    }
}

allcheckbox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlecheckboxchange);
})


inputslider.addEventListener('input',(e)=> {
    passwordlength = e.target.value;
    handleslider();
})


copybtn.addEventListener('click',()=>{
    if(passworddisplay.value)
    copycontent();
})

generatebtn.addEventListener('click',()=>{
    if(checkcount == 0) 
    return;
    
   
   
    if(passwordlength<checkcount){
        passwordlength = checkcount;
        handleslider();
    }

   
   console.log("start the journey");
   
   password = "";

     // if(uppercasecheck.checked){
    //     password += generateuppercase();
    // }

    // if(lowercasecheckcasecheck.checked){
    //     password += generatelowercase();
    // }

    // if(numbercheckcheck.checked){
    //     password += getrandominteger();
    // }

    // if(symbolcheckcheck.checked){
    //     password += generatesymbol();
    // }

   
   
   let funcarr = [];

    if(uppercasecheck.checked)
    funcarr.push(generateuppercase);

    if(lowercasecheck.checked)
    funcarr.push(generatelowercase);

    if(numbercheck.checked)
    funcarr.push(getrandominteger);

    if(symbolcheck.checked)
    funcarr.push(generatesymbol);
 
  //compulsory additon
  for(let i=0;i<funcarr.length;i++){
        password += funcarr[i]();
    }
    console.log("first additon");

         //remaining addition

    for(let i=0;i<passwordlength - funcarr.length;i++){
        let randindex = getraninteger(0,funcarr.length);
        password += funcarr[randindex]();
    }
    console.log("remaining additon");
//shuffle password
//password = shufflepassword(Array.from(password));

passworddisplay.value = shufflepassword(password.split(""));

   //passworddisplay.value = password.split("");


   calcStrength();
});
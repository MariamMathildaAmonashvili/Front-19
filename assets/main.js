const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const personalNumber = document.querySelector ("#persona_number");
const mobileNumber = document.querySelector ("#mobile_number");
const jobDescription = document.querySelector("#job_description") ;

const errorName = document.querySelector ("#username-error");
const errorEmail = document.querySelector ("#email-error");
const errorPass = document.querySelector ("#password-error");
const errorperNumb = document.querySelector ("#numb-error") ; 
const errorMobile = document.querySelector ("#mobile-error");
const errorJobdes = document.querySelector ("#jobdes-error"); 

const modal = document.querySelector ("#sign-up-modal");
const buttonModal = document.querySelector (".modal-close");

let usernameisValid = false;
let emailisValid = false ;
let passwordisValid = false;
let pernumisValid = false;
let mobileisValid = false;

function perNumber () {
    if (personalNumber.value.length ==10) {
        errorperNumb.innerHTML = ""
        personalNumber.classList.add ("correct");
        personalNumber.classList.remove ("error");


        if ( personalNumber.validity.typeMismatch) {
            errorperNumb = true ;
        } else { errorperNumb.innerHTML = ""
                pernumisValid = true;
        } 
    } else if (perNumber.value.length >= 9 ) {
        errorperNumb.innerHTML = "Too Short" ;
        personalNumber.classList.remove ("correct") ; 
        personalNumber.classList.add ("error");
        pernumisValid = false;
    }  else { 
        errorperNumb.innerHTML = "Extra Digits";
        personalNumber.classList.remove ("correct");
        personalNumber.classList.add ("error");
        pernumisValid = false;
    }
    return pernumisValid ;
}



function mobNumber ()  {
    if (mobileNumber.value.length == 11 ) {
        errorMobile.innerHTML = ""
        mobileNumber.classList.remove ("error");
        mobileNumber.classList.add ("correct");
        mobileisValid = true ;
    } else  if (mobileNumber.value.length < 11) { 
        errorMobile.innerHTML ="Digit's Missing" ;
        mobileNumber.classList.add ("error");
        mobileNumber.classList.remove ("correct");
        mobileisValid = false ;
    } else {
        errorMobile.innerHTML = "Extra Digits" ;
        mobileNumber.classList.add ("error");
        mobileNumber.classList.remove ("correct");
        mobileisValid  = false ;
    }
    
    return mobileisValid ;

}

// console.log (mobNumber);


function validUser () {
    if (!username.validity.valid){
        errorName.innerHTML="Not Valid"
        username.classList.remove("correct");
        username.classList.add("error");
        usernameisValid = false;
     }else {  
        errorName.innerHTML=""
        username.classList.add("correct");
        username.classList.remove(".error");
        usernameisValid = true;
    } 
    return usernameisValid ;
}

function validEmail () {
    if (!email.validity.valid) {
        errorEmail.innerHTML = "Not Valid";
        email.classList.add ("error");
        email.classList.remove ("correct");

        if (email.validity.typeMismatch){
            errorEmail.innerHTML="dont match"
        } else{
            errorEmail.innerHTML="";
        }
        emailisValid = false;
    } else{

    errorEmail.innerHTML=" "
    email.classList.add("correct");
    email.classList.remove(".error");

    }
    emailisValid = true;

    return  emailisValid;
}

//console.log (validEmail);

function validPass(){
    if(password.value.length==0){
       errorPass.innerHTML="fill min 8 charachters"
       password.classList.remove("correct");
       password.classList.add("error");
       passwordisValid = false;
    }
       else if(password.value.length>0 && password.value.length <8){
           errorPass.innerHTML="very weak password"
           password.classList.remove("correct");
           password.classList.add("error");
       }  else if (password.value.length >=8 && password.value.length <=10){
           errorPass.innerHTML="medium strength password"
           password.classList.remove("error");
           password.classList.add("correct");
           passwordisValid = true;
    
    } else{
       errorPass.innerHTML=""
       password.classList.remove("error");
       password.classList.add("correct");
       passwordisValid = true;
    }
    return passwordisValid;
}

//console.log (validPass); 

username.addEventListener("input", ()=>{
   validName();
});
email.addEventListener("input", ()=>{
   validEmail();
})
password.addEventListener("input", ()=>{
   validPass();
})
perNumber.addEventListener("input", ()=>{
   perNumber();
})
mobileNumber.addEventListener("input", ()=>{
   mobNumber();
})
jobDescription.addEventListener("input", ()=>{
   jobDescription()
})

function lastFunction(){
 
};

form.addEventListener("submit", (e)=>{
   e.preventDefault();
 
     
const perValid = perNumber();
const nameValid  = validUser();
const emailValid = validEmail();
const passwValid = validPass();
const mobnumbValid = mobNumber();

//let usernameisValid = false;
//let emailisValid = false ;
//let passwordisValid = false;
//let pernumisValid = false;
//let mobileisValid = false;

if (nameValid && emailValid && passwValid && perValid && mobnumbValid)  {
      
     modal.classList.add("open");
};

  
  })

   modalClosing.addEventListener("click", ()=>  {
   modal.classList.remove("open");
   form.reset();
  }) 

//au ragacebi isev ar caikitxe nervi damackda :(())
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM ELEMENTS MODAL 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');
const email = document.getElementById("email");

// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = 'block';
}
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

const form = document.getElementsByName("formModal");
let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//FIRST NAME
//const firstName = document.getElementById("first");

//function checkFirstName(){
//  if firstName
//}

//EMAIL
email.addEventListener("change",function(){
  checkEmail(this);
})
const checkEmail = function(inputEmail){
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

  let testEmail = emailRegExp.test(inputEmail.value);
  
  if (testEmail){
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = 'solid #279e7a 0.19rem';
    return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
    return false;
}
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM ELEMENTS MODAL 
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.getElementsByClassName('close');
const form = document.getElementsByName('formModal');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

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


//FIRST NAME
firstName.addEventListener('change', function(){
  checkFirst(this);
})
 const checkFirst = function inputFirstName(){
  if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
    first.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
    first.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

//LASTNAME
lastName.addEventListener('change', function(){
  checkLast(this);
})
const checkLast = function inputLastName(){
  if (lastName.value.trim().lenght < 2 || lastName.value.trim() === '' || !lastName.value.match(regex)) {
    last.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
    last.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}


//EMAIL
email.addEventListener('change',function(){
  checkEmail(this);
})
const checkEmail = function inputEmail (){   
  const RegExp = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
  
  if (email.value.trim().match(RegExp)){
    email.parentElement.setAttribute('data-error-visible', 'false');
    return true;
    }
    email.parentElement.setAttribute('data-error-visible', 'true');
    return false;
}
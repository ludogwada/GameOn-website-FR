

// DOM ELEMENTS MODAL 
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn = document.getElementsByClassName('close');
const form = document.getElementById('formModal');
const modalTh = document.querySelector('#thanks');
const closeBtnTh = document.querySelector('.btn-closeModal');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const RegExp = '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$';
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const allLocations = document.getElementById('allLocations');
const locations = document.getElementsByName('location');
const termOfUse = document.getElementById('termOfUse');


// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = 'block';
}
// CLOSE MODAL FORM CROSS
// au click sur le bouton close premier le la liste applique la fonction closeModal (qui fait un display none sur les modales)
closeBtn [0].addEventListener('click', closeModal);
function closeModal() {
  modalbg.style.display = 'none';
  modalTh.style.display = 'none';
}
//--------THANKS MODAL---------//

//CLOSE CROSS 
closeBtn [1].addEventListener('click', closeModalTh);

//CLOSE MODAL 
closeBtnTh.addEventListener('click',closeModalTh);
function closeModalTh() {
    modalTh.style.display = 'none';
    modalbg.style.display = 'none';
    document.location.reload();//document rechargé
}

//FIRST NAME
firstName.addEventListener('focusout', function(){
  checkFirst(this);
});

//LASTNAME
lastName.addEventListener('focusout', function(){
  checkLast(this);
});

//EMAIL
email.addEventListener('focusout', function(){
  checkEmail(this);
});

//BIRTHDATE
birthdate.addEventListener('focusout', function(){
  checkBirthdate(this);
});

//TOURNAMENTS
quantity.addEventListener('focusout', function(){
    (this);
});

//LOCATIONS
allLocations.addEventListener('change', function() {
  checkLocations(this);
});

//TERMS OF USE
termOfUse.addEventListener('change', function() {
  checkTermOfUse(this);
});

//SUBMIT FORM
form.addEventListener('submit', function(e) {
  //empeche le comportement par defaut et verifie les fonctions
  e.preventDefault();
  checkFirst();
  checkLast();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocations();
  checkTermOfUse();
  // si tout les fonctions retourne true, le formulaire disparait, la modal Thanks s'affiche et forumaire reset.
  if (
      checkFirst(firstName) && 
      checkLast(lastName) &&
      checkEmail(email) &&
      checkBirthdate(birthdate) &&
      checkQuantity(quantity) &&
      checkLocations(allLocations) &&
      checkTermOfUse(termOfUse)
      ) {
        form.style.display ='none';
        modalTh.style.display ='block';
        form.reset();
        //sinon la modal thanks n'apparait pas
      } else {
          modalTh.style.display ='none';
      }
});
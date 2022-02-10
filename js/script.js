 // get form by id
 const form = document.getElementById('form');
 // get value of name input 
 const name = document.getElementById('name');
 // get value of email input 
 const email = document.getElementById('email');
 // get value of message textarea 
 const message = document.getElementById('message');

 form.addEventListener('submit', (e) => {
   e.preventDefault();

   checkInputs();
 });

  function checkInputs(){
    const nameValue =  name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim(); //heq hapesirat e teperta

    let nameBool = false, emailBool = false, messageBool = false;

    if(nameValue === ''){
      //error
      setErrorFor(name, 'Please fill your name');
      nameBool = false;
    } else {
      //success
      setSuccessFor(name);
      nameBool = true;
    }


    if(emailValue === ''){
      //error
      setErrorFor(email, 'Email can not be blank');
      emailBool = false;
    } else {
      //success
      setSuccessFor(email);
      emailBool = true;
    }


    if(messageValue === ''){
      //error
      setErrorFor(message, 'Message text can not be blank');
      messageBool = false;
    } else {
      //success
      setSuccessFor(message);
      messageBool = true;
    }

    if(nameBool && emailBool && messageBool){
      window.location = 'https://podfollow.com/1243338956/episode/f1aa8ae0f1d0c46b832a9ef9fefe8a138f871568/view';
    }

  }

    function setErrorFor(input, message){
      const formGroup = input.parentElement; //form-grup class
      // const error_msg = document.querySelector('.error-msg');
      const error_msg = document.getElementsByClassName('error-msg');

      //shtojme tekstin e errorit
      error_msg.innerHTML = message;

      // shtojme klasen 
      formGroup.className = 'form-group error';

    }

    function setSuccessFor(input){
      const formGroup = input.parentElement;
      formGroup.className = 'form-group success';
      // window.location = 'https://podfollow.com/1243338956/episode/f1aa8ae0f1d0c46b832a9ef9fefe8a138f871568/view';
    }



// Get the modal
var modal = document.getElementById("myModal");

// On checkbox click, open modal
var chb = document.getElementById("myCheckbox");

// kur klikohet label i terms and conditions
var label = document.getElementById("label1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button inside modal
var inner_btn = document.getElementById("myModalBtn");

// Kur klikohet checkbox, hapet modali
chb.onclick = function() {
  modal.style.display = "block";
}


// Kur klikohet label terms & conditions, hapet modali
label.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When done button clicked, close the modal
inner_btn.onclick = function() {
  modal.style.display = "none";
}

// Myll modalin kur klikon jashte tij
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Enable submit button on checkbox click
function enable_btn(termsCheckBox){
    //If the checkbox has been checked
    if(termsCheckBox.checked){
        //Set the disabled property to FALSE and enable the button.
        document.getElementById("myBtn").disabled = false;
    } else{
        //Otherwise, disable the submit button.
        document.getElementById("myBtn").disabled = true;
    }
}

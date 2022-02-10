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
    const messageValue = message.value.trim(); //removes extra space

    if(nameValue === ''){
      //error
      setErrorFor(name, 'Please fill your name');
    } else {
      //success
      setSuccessFor(name);
    }


    if(emailValue === ''){
      //error
      setErrorFor(email, 'Email can not be blank');
    } else {
      //success
      setSuccessFor(email);
    }


    if(messageValue === ''){
      //error
      setErrorFor(message, 'Message text can not be blank');
    } else {
      //success
      setSuccessFor(message);
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
    }



function validateForm(){
    console.log("Kristi has a lot of work to do!");

    console.log("Kristi did an amazing job!");

    // if value != null submit 
    // else show validation error messages 

    // form.addEventListener('submit', (e) => {
    //   let messages = []
    //   if (name.value === '' || name.value == null){
    //     messages.push('Name is required')
    //   }

    //   if (password)

    //   if (messages.length > 0){
    //     e.preventDefault()
    //     errorElement.innerText = messages.join(', ')
    //   }
    // })


}


// Get the modal
var modal = document.getElementById("myModal");

// On checkbox click, open modal
var chb = document.getElementById("myCheckbox");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button inside modal
var inner_btn = document.getElementById("myModalBtn");

// When the user clicks the button, open the modal 
chb.onclick = function() {
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

// When the user clicks anywhere outside of the modal, close it
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

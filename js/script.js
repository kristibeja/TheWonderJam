function validateForm(){
    console.log("Kristi has a lot of work to do!")
    // get value of name input 
    // get value of email input 
    // get value of message textarea 
    // if value != null submit 
    // else show validation error messages 
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

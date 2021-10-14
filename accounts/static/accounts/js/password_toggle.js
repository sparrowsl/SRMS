const hidePassword = document.querySelector(".uk-checkbox");
const showLabel = document.querySelector("label > span");

hidePassword.addEventListener("change", () => {
  // Change the input field if checkbox is checked
  if (hidePassword.checked === true){
    // Display the password
    document.getElementById('passField').type = 'text';
    showLabel.textContent = "hide password";
  }else{
    // Hide the password
    document.getElementById('passField').type = 'password';
    showLabel.textContent = "show password";
  }
});

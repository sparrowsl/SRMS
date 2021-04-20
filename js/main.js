var userEmail = document.getElementById('email').value.trim();
var userPassword = document.getElementById('password').value.trim();
var rememberMe = document.getElementById('rememberMe').value;
var loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', function(){
	console.log("Email: " + userEmail);
	console.log("Password: " + userPassword);
	console.log("Remember: " + rememberMe);
});


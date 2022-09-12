var email = document.getElementById('emailField');
var nameOfUser = document.getElementById('nameField');
var cardNumber = document.getElementById('cardNumberField');
var cvv = document.getElementById('cvvNumberField');
var sizeOfMerch = document.getElementById('sizeField');
var button = document.getElementById('buttonField')
var validEmail = false;
var validName= false;
var validCard = false;
var validCVV = false;
var validSize = false;

button.onclick = function() {
	if(validName == true && validSize == true && validCVV == true && validEmail == true && validCard == true) {
		return true;
	}
	else {
		document.getElementById('buttonMessage').innerHTML = "Make sure all form fields are filled in and valid";
		return false;
	}
}
email.onblur = function()
{
	if((email.value).includes('@') && (email.value).includes('.'))
	{
		document.getElementById('emailMessage').innerHTML = "";
		validEmail = true;
		return true;
	}
	else 
	{
		document.getElementById('emailMessage').innerHTML = "Email not valid";
		validEmail = false;
		return false;
	}
}
nameOfUser.onblur = function()
{
	if((nameOfUser.value).length >= 5)
	{
		document.getElementById('nameMessage').innerHTML = "";
		validName = true;
		return true;
	}
	else 
	{
		document.getElementById('nameMessage').innerHTML = "Name not valid";
		validName = false;
		return false;
	}
}
sizeOfMerch.onblur = function()
{
	if(sizeOfMerch.value == "null")
	{
		document.getElementById('sizeMessage').innerHTML = "Select a size";
		validSize = false;
		return false;
	}
	else
	{
		document.getElementById('sizeMessage').innerHTML = "";
		validSize = true;
		return true;
	}
}
cardNumber.onblur = function()
{
	if((cardNumber.value).length == 16 && cardNumber.value > 0)
	{
		document.getElementById('cardMessage').innerHTML = "";
		validCard = true;
		return true;
	}
	else
	{
		document.getElementById('cardMessage').innerHTML = "Card number not valid";
		validCard = false;
		return false;
	}
}
cvv.onblur = function()
{
	if((cvv.value).length == 3 && cvv.value > 0)
	{
		document.getElementById('cvvMessage').innerHTML = "";
		validCVV = true;
		return true;
	}
	else {
		document.getElementById('cvvMessage').innerHTML = "cvv not valid";
		validCVV = false;
		return false;
	}
}
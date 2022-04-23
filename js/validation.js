// Add document load event listener
document.addEventListener("DOMContentLoaded", load);

/*
 * Handles the load event of the document.
 */
function load(){
	hideErrors();
	document.getElementById("contactform").addEventListener("submit", validate);
	document.getElementById("reset").addEventListener("click", formReset);
}

/*
 * Hides all of the error elements.
 */
function hideErrors()
{
	// Get an array of error elements
	let errorArray = document.getElementsByClassName("error");
	for (let i = 0; i < errorArray.length; i++){
		errorArray[i].style.display = "none";
	}
}

function formReset() 
{
	// Confirm that the user wants to reset the form.
	if (confirm('Would you like to reset the form?')){
		// Ensure all error fields are hidden
		hideErrors();
		
		// Set focus to the first text field on the page
		document.getElementById("name").focus();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;	
}

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(event)
{
	hideErrors();
	if(formHasErrors())
	{
		event.preventDefault();
		return false;
	}
	return true;
}


/*
 * Checks the form for errors.
 *
 * return   True with errors present, false when free of errors.
 */
function formHasErrors()
{
	let errorFlag = false;
	let nameElement = document.getElementById("name");
	let phoneElement = document.getElementById("phone");
	let emailElement = document.getElementById("email");
	let commentsElement = document.getElementById("comments");
	let regExPhone = new RegExp(/^\d{10}$/);
	let regExEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

	if(nameElement.value == null || nameElement.value.trim() == "")
	{
		document.getElementById("nameerror").style.display = "block";

		if(!errorFlag)
		{
			nameElement.focus();
		}

		errorFlag = true;
	}

	if(!regExPhone.test(phoneElement.value))
	{
		document.getElementById("phoneerror").style.display = "block";

		if(!errorFlag)
		{
			phoneElement.focus();
		}

		errorFlag = true;
	}

	if(!regExEmail.test(emailElement.value))
	{
		document.getElementById("emailerror").style.display = "block";

		if(!errorFlag)
		{
			emailElement.focus();
		}

		errorFlag = true;
	}

	if(commentsElement.value == null || commentsElement.value.trim() == "")
	{
		document.getElementById("commentserror").style.display = "block";

		if(!errorFlag)
		{
			nameElement.focus();
		}

		errorFlag = true;
	}

	return errorFlag;
}
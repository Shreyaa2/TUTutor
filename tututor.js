function checkPasswordTutor(){
	var pw_t = document.forms["tutorform"]["tutorpassword"].value
	var vpw_t = document.forms["tutorform"]["verifytutorpassword"].value
	if (pw_t !== vpw_t){
		alert("Make sure you enter the same password!");
		return false;
	}
}

function checkPasswordPupil(){
	var pw_p = document.forms["pupilform"]["pupilpassword"].value
	var vpw_p = document.forms["pupilform"]["verifypupilpassword"].value
	if (pw_p !== vpw_p){
		alert("Make sure you enter the same password!");
		return false;
	}
}

function checkEmailTutor(){
	var em1=document.forms["tutorform"]["tutorEmail"].value
	em1=em1.split('@').slice(1);
	em1=em1+'';
	
	var checkDomains=['towson.edu', 'students.towson.edu'];
	
	if (checkDomains.indexOf(em1) == -1){
		alert("Please use a valid Towson University Email Address");
		return false;
}
}

//add user on click, follow up in pupilprofile
function adduser(event){
	event.preventDefault();

	var errorCount = 0;
  $('#adduser input').each(function(index, val) {
    if($(this).val() === '') { errorCount++; }
  });

  // Check and make sure errorCount's still at zero
  if(errorCount === 0) {

    // If it is, compile all user info into one object
    var newUser = {
	  'pfname': $('#adduser fieldset input#pupilFirst').val(),
	  'plname': $('#adduser fieldset input#pupilLast').val(),
      'pemail': $('#adduser fieldset input#pupilEmail').val(),
	  'ppassword': $('#adduser fieldset input#pupilpassword').val(),
	  'pvpassword': $('#adduser fieldset input#verifypupilpassword').val(),
      'pmajor': $('#adduser fieldset input#pupilMajor').val(),
      'plevel': $('#adduser fieldset input#inputUserGender').val()
    }
}
	
	

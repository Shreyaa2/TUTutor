function checkPasswordTutor(f){
	var pw_t = document.forms["tutorform"]["tutorpassword"].value
	var vpw_t = document.forms["tutorform"]["verifytutorpassword"].value
	if (pw !== vpw){
		alert("Make sure you enter the same password!");
		return false;
	}
}

function checkPasswordPupil(f){
	var pw_p = document.forms["pupilform"]["pupilpassword"].value
	var vpw_p = document.forms["pupilform"]["verifypupilpassword"].value
	if (pw !== vpw){
		alert("Make sure you enter the same password!");
		return false;
	}
}
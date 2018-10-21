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

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
//	else{
//		return true;
//	}
// the function by default will submit the form without the "retun true" statement
	
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
//	else {
//	return true;
//}
// same as above, the function will work by default without the "return true" statement	
}

function validateTutor(f){
	var valT=checkPasswordTutor();
	checkEmailTutor(valT);
	return valT;
}

function validatePupil(f){
	var valP=checkPasswordPupil();
	checkEmailPupil(valP);
	return valP;
}



//form input as a JSON object
(function () {
	function toJSONString(form) {
		var obj = {};
		var elements = form.querySelectorAll("input, select");
		for (var i = 0; i < elements.length; ++i) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;
 
			if (name) {
				obj[name] = value;
			}
		}
//displays key:value in seperate lines, converts to JSON
		return JSON.stringify(obj, null, " ");
	}

	document.addEventListener("DOMContentLoaded", function () {
		var form = document.getElementById("pupilform");
		var output = document.getElementById("output");
		form.addEventListener("submit", function (e) {
			e.preventDefault();
			//takes json obj from the toJSONString func above and converts it to string 
			var json = toJSONString(this);
			//displays json format in the outer section 
			output.innerHTML = json;


		}, false);

	});

})();

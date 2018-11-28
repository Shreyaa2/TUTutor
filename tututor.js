
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
	else{
		return true;
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
}else {
	return true;
}
}
function checkEmailPupil(){
	var em2=document.forms["pupilform"]["pupilemail"].value
	em2=em2.split('@').slice(1);
	em2=em2+'';
	
	var checkDomains=['towson.edu', 'students.towson.edu'];
	
	if (checkDomains.indexOf(em2) == -1){
		alert("Please use a valid Towson University Email Address");
		return false;
	}
	else{
		return true;
	}
}
//	else {
//	return true;
//}
// same as above, the function will work by default without the "return true" statement	


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


function checkLogin(){
	var emlog = document.forms["login"]["loginEmail"].value
	emlog = emlog.split('@').slice(1);

	var checkDomains = ['towson.edu', 'students.towson.edu'];

	if (checkDomains.indexOf(emlog) == -1){
		alert("Please use a valid Towson University Email Address");
		return false;
	} else {
		return true;
	}
}


(function () {
	function toJSONString(form) {
		window.alert('in the json loop');
		window.alert('in json');
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
//displays key: value in seperate lines, converts to JSON
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
			return(json);

		}, false);
// 		$.post('https://towsonu-tutor.herokuapp.com/pupilprofile',   // url
//        { myData: json }, // data to be submit
//        function(data, status, jqXHR) {// success callback
// 			   // $('p').append('status: ' + status + ', data: ' + data);
// 			   alert(status + data + 'submitted data');
//         })
// )}

	});

})();
	

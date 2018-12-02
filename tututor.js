
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

var tweetIndex = 0;
showTweets();

function showTweets() {
    var i;
    var tweets = document.getElementsByClassName("tuTweets");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < tweets.length; i++) {
       tweets[i].style.display = "none";  
    }
    tweetIndex++;
    if (tweetIndex > tweets.length) {tweetIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    tweets[tweetIndex-1].style.display = "block";  
    dots[tweetIndex-1].className += " active";
    setTimeout(showTweets, 3000); 
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


//pupil
function submit(){
    $(document).ready(function (){
	console.log( "document loaded" );
        const url = '/pupilpro';
        var data = {
          d: 'document.form',
        }
        $('.sub').click(function(){
            $.post(url, data, function(data, status){
                console.log('data submitted');
            });
    })
});
}

//tutor
function submitt(){
    $(document).ready(function (){
	console.log( "document loaded" );
        const url = '/tutorpro';
        var data = {
          d: 'document.form',
        }
        $('.sub2').click(function(){
            $.post(url, data, function(data, status){
                console.log('data submitted');
            });
    })
});
}

function checkLogin(){
	var emlog = document.forms["login"]["loginEmail"].value
	emlog = emlog.split('@').slice(1);
	var em1=em1+'';

	var checkDomains = ['towson.edu', 'students.towson.edu'];

	if (checkDomains.indexOf(em1) == -1){
		alert("Please use a valid Towson University Email Address");
		return false;
	} else {
		return true;
	}
}

function change(){
	return (document.login.action = document.User.value);
}

function verifyUser() {
	$(document).ready(function (){
	var usr = $(".pupilloginEmail").val();
	var pass = $(".pupilloginpassword").val();
$('.login').submit(() => {
	const url= '/signins';
	$.ajax({
		type: 'GET',
		url: url,
		data: {
			pemail: usr,
			ppassword: pass
		},
		success: function(status){
			if(status == 200) {
				console.log("welcome");
			}
			else {
				alert('invalid entry');
			}
		}

	});
});
});
}

function verifyUsert() {
	$(document).ready(function (){
	var usr = $(".tutorloginEmail").val();
	var pass = $(".tutorloginpassword").val();
$('.login').submit(() => {
	const url= '/signint';
	$.ajax({
		type: 'GET',
		url: url,
		data: {
			temail: usr,
			tpassword: pass
		},
		success: function(status){
			if(status == 200) {
				console.log("welcome");
			}
			else {
				alert('invalid entry');
			}
		}

	});
});
});
}

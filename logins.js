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

function verifyUsera() {
	$(document).ready(function (){
	var usr = $(".adminLoginEmail").val();
	var pass = $(".adminLoginPassword").val();
$('.login').submit(() => {
	const url= '/signina';
	$.ajax({
		type: 'GET',
		url: url,
		data: {
			username: usr,
			password: pass
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

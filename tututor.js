// function checkPasswordTutor(){
// 	var pw_t = document.forms["tutorform"]["tutorpassword"].value
// 	var vpw_t = document.forms["tutorform"]["verifytutorpassword"].value
// 	if (pw_t !== vpw_t){
// 		alert("Make sure you enter the same password!");
// 		return false;
// 	}
// }

// function checkPasswordPupil(){
// 	var pw_p = document.forms["pupilform"]["pupilpassword"].value
// 	var vpw_p = document.forms["pupilform"]["verifypupilpassword"].value
// 	if (pw_p !== vpw_p){
// 		alert("Make sure you enter the same password!");
// 		return false;
// 	}
// }

// function checkEmailTutor(){
// 	var em1=document.forms["tutorform"]["tutorEmail"].value
// 	em1=em1.split('@').slice(1);
// 	em1=em1+'';
	
// 	var checkDomains=['towson.edu', 'students.towson.edu'];
	
// 	if (checkDomains.indexOf(em1) == -1){
// 		alert("Please use a valid Towson University Email Address");
// 		return false;
// }
// }



(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "pupilform" );
		var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

		}, false);

	});

})();










































//add user on click, follow up in pupilprofile
// function jo(){
// window.alert("entering Json");
//   const isValidElement = element => {
// 	return element.name && element.value;
//   };
//   window.alert("stopped after JSON");
// /**
//    * Checks if an element’s value can be saved (e.g. not an unselected checkbox).
//    * @param  {Element} element  the element to check
//    * @return {Boolean} true if the value should be added, false if not
// */

//   const getSelectValues = options =>
//   [].reduce.call(
//     options,
//     (values, option) => {
//       return option.selected ? values.concat(option.value) : values;
//     },
//     []
//   );

//   const formToJSON = elements =>
//   [].reduce.call(
//     elements,
//     (data, element) => {
//       // Make sure the element has the required properties and should be added.
//       if (isValidElement(element) == true) {
// 		  window.alert("inside tojson");
// /*
// 	* Some fields allow for more than one value, so we need to check if this
//     * is one of those fields and, if so, store the values as an array.
// */
//         if (isMultiSelect(element)) {
// 			data[element.name] = getSelectValues(element);
//         } else {
//           data[element.name] = element.value;
//         }
//       }

//       return data;
//     },
//     {}
//   );
// /**
//  	* A handler function to prevent default submission and run our custom script.
//  	* @param  {Event} event  the submit event triggered by the user
//  	* @return {void}
// */ 

// 	const handleFormSubmit = event => {
//    // Stop the form from submitting since we’re handling that with AJAX.
//   	event.preventDefault();

//   // Call our function to get the form data.
//   	const data = formToJSON(form.elements);

//   // Demo only: print the form data onscreen as a formatted JSON object.
// 	  const dataContainer = window.alert(document.getElementsByClassName("results__display")[0]);
	  
//   // Use `JSON.stringify()` to make the output valid, human-readable JSON.
//   	dataContainer.textContent = JSON.stringify(data, null, "  ");
// };

// /*
//  	* This is where things actually get started. We find the form element using
//  	* its class name, then attach the `handleFormSubmit()` function to the 
//  	* `submit` event.
//  */
// var form = document.getElementsByClassName("pupil-form")[0];
// if (form){
// 	form.addEventListener("submit", handleFormSubmit, false);
// }

// /* adding more background info to grab from user */
// function myFunction() {
// 	var z = document.getElementById("query").value;
//   var x = navigator.userAgent;
// 	var y = Intl.DateTimeFormat().resolvedOptions().timeZone;
//     var obj = {"browser_timezone" : String(y),"user_agent" : String(x),"query": String(z)};
//     var myJSON = JSON.stringify(obj);
//     document.getElementById("demo").innerHTML = myJSON;
// }
// if(window.attachEvent) {
//     window.attachEvent('onload', myFunction);
// } else {
//     if(window.onload) {
//         var curronload = window.onload;
//         var newonload = function(evt) {
//             curronload(evt);
//             myFunction(evt);
//         };
//         window.onload = newonload;
//     } else {
//         window.onload = myFunction;
//     }
// }

// }
	

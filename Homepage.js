


function filterResults() {
    var userInput, filter, ul, li, a, i;
    userInput = document.getElementById("searchInput");
    filter = userInput.value.toUpperCase();
    div = document.getElementById("searchDropList");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


function display(){
    $(document).ready(function(){
       var Url = '/cosc236board.html'
       var data = cosc236;
    $('.searchInput').click(() =>{
       $.ajax({
           type: 'GET',
           url: Url,
           data: {
               tcourse: data
           },
           success : function(data) {
            $('#output').html(data.responseText);
          //  createMapListings(data.responseText);
        },
        error : function(e) {
            alert("Error!")
            console.log("ERROR: ", e);
        }


       })


    $('.tutors').load()
})
})
}


$(document).ready(function(){

    $("#name").blur(function(){

       if ($("#name")== "")

           $("#name").css("background", "red");

        else

            $("#name").css("background","green");

    });

//to do
});

$.ajax({

    "url": "bazadate.php",

    "method": "GET",

    "data": {

        "email":$("#email").val(),

        "nume":"George"

    },

    "succes": function(result){

        if(result == "1")

            console.log("Ne-ai mai contactat!");

        else

            console.log("Bine ai venit!");

};

});


$(document).ready(function(){
    var name = $("#name");
    var email = $("#email");
    
    $(name).blur(function(){

       if ($(name).val() === "") {

           $(name).css("background", "#e74c3c");
       }
        else if ($(name).val() === "George"){

            $(name).css("background","#7cc576");
        }
        
        else {
            $(name).css('background',"initial");
        }
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

}

});

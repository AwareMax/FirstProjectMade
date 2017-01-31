<?php
$email = $_GET["email"];
$emails = ["gpecherle@gmail.com","john@yahoo.com"];

    if(in_array($email,$email_list))
    {

        echo "1";
    }

    else

    {
        echo "0";
    }
?>

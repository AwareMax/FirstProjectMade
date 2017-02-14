<?php 
include 'mysql-connect.php';
var_dump($_POST);
$sql = "INSERT INTO contactform (Username, Email, Subject, Message)
VALUES ( '".$_POST["Name"]."',  '".$_POST["Email"]."',  '".$_POST["Subject"]."', '".$_POST["Message"]."')";

if ($conn->query($sql) === TRUE) {
   header('Location: form-data.html');die();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
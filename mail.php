<?php
// get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subj = $_POST['subj'];
$to = "gulshansongara@igtechso.com";
$subject = $subj;
$txt = "Name: ". $name . "\r\nEmail: ". $email . "\r\nSubject: ". $subj . "\r\nMessage: ". $message;
$headers = "From: ". $email;

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
// redirect
header("Location:contactSuccess.html");
?>
<?php
// get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subj = $_POST['subj'];
$to = "gulshansongara@igtechso.com";
$subject = "Mail from Opslabel";
$txt = "Name = ". $name . "\r\n Email = " . $email . "\r\n Message =" . $message . "\r\n Subject =" . $subj;
$headers = "From: noreply@opslabel.com";

if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
// redirect
header("Location:contactSuccess.html");
?>
<?php
// get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subj = $_POST['subj'];
$to = "contact@opslabel.com";
$subject = "New Form Submission";
$txt = "Name= " . $name . "\r\nEmail= " . $email . "\r\nSubject= " . $subj . "\r\nMessage= " . $message;

if ($email != NULL) {
    mail($to, $subject, $txt);
}
// redirect
header("Location:contactSuccess.html");
?>
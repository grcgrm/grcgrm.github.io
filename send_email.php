<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Set the recipient email address
  $to = "grace.grumo12@gmail.com";

  // Set the email subject and body
  $subject = "New Contact Form Submission";
  $body = "Name: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Message: " . $message;

  // Set additional headers
  $headers = "From: " . $email;

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully.";
  } else {
    echo "Unable to send email. Please try again.";
  }
}
?>

<?php

$name = $_POST['visitor_name'];
$email = $_POST['email'];
$message = $_POST['visitor_message'];

$emailheader = "From:" .$name. "<".$email.">\r\n";

$recepient = "pradyhangsout@gmail.com";
$subject = "Email from portfolio Site";

mail($recepient, $subject,$message,$emailheader) or die("Error!");

echo '
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio One page website</title>
    
    <link rel="stylesheet" href="css/bootstrap.min.css">
  
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="bg-dark-1">
    <div class="container text-center min-vh-100 d-flex flex-column justify-content-center">
        <div class="col-lg-8 mx-auto">
            <h1 class="pb-4">Thank you for contacting me. I will get back to you as soon as possible</h1>
            <p class="text-white">Go back to the <a href="index.html" class="text-danger">homepage</a></p>
        </div>
    </div>
</body>
   
       
  

</html>

';

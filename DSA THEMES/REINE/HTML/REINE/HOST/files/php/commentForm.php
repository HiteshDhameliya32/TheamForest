<?

$name  = $_REQUEST["name"];
$email = $_REQUEST["email"];
$message = $_REQUEST["message"];
$to = "dsa79design@gmail.com";
if (isset($email) && isset($name)) {
    $email_subject = "$name sent you a comment via Reine (Comment Form)";
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/plain; charset=UTF-8" . "\r\n";
	$headers = 'From: ' . $name ."\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
	$message     = "
	From: $name,
	Email: $email,
	Message: $message";
	
    $mail =  mail($to, $email_subject, $message, $headers);

if($mail)
	{
		echo 'success';
	}

else
	{
		echo 'failed';
	}
}

?>
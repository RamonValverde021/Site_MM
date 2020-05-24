<html>
<head>
    <title>Enviando e-mail....</title>
</head>
<body>
<?php
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
?>
<?php
$subject = "Mensagem de Contato";
$to = "xxxxxxxxxxxxxxx@gmail.com";
$message = "Mensagem do Site Melhor Modelo<br><br>Email: $email <br><br>Mensagem: $mensagem<br><br>";
$header = "MINE-VERSION: 1.0\n";
$header .= "Content-type: text/html; charset=iso-8859-1\n";
$header .= "From: $email\n";
if(mail($to, $subject, $message, $header)) {
    echo "Mensagem enviada com sucesso!";
}else{
    echo "Erro: Tente novamente!";
}
?>
</body>
</html>

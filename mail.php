<?php

$recepient = "komnovalex@yandex.ru";
$siteName = "Заявка с сайта";

$email = trim($_POST["email"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$comment = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nКомментарий: $comment";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
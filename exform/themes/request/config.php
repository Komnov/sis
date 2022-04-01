<?php
if(!isset($_REQUEST['mf_theme'])) die('Restricted access');

$config->form_addmsg = '*Если Вы спешите - укажите только свой номер телефона';
$config->form_header = 'Оставьте заявку <br> или задайте вопрос';
$config->product_title = 'Название товара';
$config->phone_title = 'Номер телефона';
$config->message_titles = 'Введите ваш вопрос или комментарий';
$config->enable_captcha = false;
$config->require_email = false;
$config->checbox_name = 'для отправки сообщения поставьте галочку';

$field_value = array_merge($field_value, array(
 'product_name'=>'',
)); 

$field_class = $field_value;
?>

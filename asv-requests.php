<?php

$token = "6516410091:AAHJBsEdu8P5cDAZJ7Ud5Ruh-i54kugoptM";

$chat_id = "-1002134144417";

$name = ($_POST['name']);
$email = ($_POST['email']);
$phone = ($_POST['phone']);
$comment = ($_POST['comment']);

$arr = array(
    'Имя:' => $name,
    'Почта:' => $email,
    'Телефон:' => $phone,
    'Комментарий:' => $comment
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
}

else {
    alert('Что-то пошло не так. Попробуйте отправить форму ещё раз.');
}

?>
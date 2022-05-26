<?php

/* https://api.telegram.org/bot2122949039:AAF3nM-32LTJSwqBvKUbddt8LMOjWooYWK8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$vid = $_POST['vid'];
$size = $_POST['size'];
$imya = $_POST['imya'];
$milo = $_POST['milo'];
$telef = $_POST['telef'];
$token = "********************";
$chat_id = "298332074";
$arr = array(
  'Наименование: ' => $vid,
  'Размер: ' => $size,
  'Имя: ' => $imya,
  'E-mail: ' => $milo,
  'Телефон: ' => $telef
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>

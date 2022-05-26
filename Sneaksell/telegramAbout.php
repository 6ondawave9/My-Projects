<?php

/* https://api.telegram.org/bot2122949039:AAF3nM-32LTJSwqBvKUbddt8LMOjWooYWK8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$imya = $_POST['imya'];
$milo = $_POST['milo'];
$mes = $_POST['mes'];
$token = "**********************";
$chat_id = "298332074";
$arr = array(
  'Имя: ' => $imya,
  'E-mail: ' => $milo,
  'Сообщение: ' => $mes
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

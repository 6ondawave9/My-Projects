<?php

$input = json_decode(file_get_contents("php://input"), true);

$link = mysqli_connect('localhost', 'root', '', 'new_bd');

$login = $input['login'];
$password = $input['password'];

if ($link == false){
    echo("Ошибка: Невозможно подключиться к MySQL: " . mysqli_connect_error());
} else {
    mysqli_set_charset($link, "utf8");

    $stmt = $link->prepare( "SELECT login FROM sn_users WHERE login=?");
    $stmt->bind_param("s", $login);
    $stmt->execute();
    $res = $stmt->get_result();

    if (!$res) {
        echo "Не удалось выполнить запрос";
    } 
    $result = $res->fetch_all();
    if (count($result) == 0 ) {
        echo "Логин свободен";
                $sql = "INSERT INTO sn_users(id, login, password, moder) VALUES (0, '$login', '$password', 0)";
                $result = mysqli_query($link, $sql);
                $token = "*********************";
                $chat_id = "298332074";
                $txt = "Новый пользователь! '$login'";
                $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
                return;
    } else {
        echo "Логин занят";
    }
}
mysqli_close($link);

?>

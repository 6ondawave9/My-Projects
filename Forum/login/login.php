<?php

$post_block = "
<!--Создание поста-->
<div id=\"createPost\" class=\"createPost \"> 
    <textarea id=\"postText\" placeholder=\"text\"></textarea>
        <!--Отправка фото-->
        <label id=\"fileLabel\" for=\"myFile\">Файл</label>
        <input type=\"file\" name=\"myFile\" id=\"myFile\" class=\"hide\">
    
    <button onclick=\"postCheck()\">Опубликовать</button>
</div>
<div id=\"userBlock\">
    <button id=\"logOut\" onclick=\"logOut()\" class=\"\">Выйти</button>
    <p id=\"currentUser\"></p>
</div>
";

$input = json_decode(file_get_contents("php://input"), true);

$login = $input['login'];
$password = $input['password'];

$link = mysqli_connect('localhost', 'root', '', 'new_bd');

if ($link == false){
    echo("Ошибка: Невозможно подключиться к MySQL: " . mysqli_connect_error());
} else {
    mysqli_set_charset($link, "utf8");

    $stmt = $link->prepare( "SELECT login FROM sn_users WHERE login=? AND password=?");
    $stmt->bind_param("ss", $login, $password);
    $stmt->execute();
    $res = $stmt->get_result();

    if (!$res) {
        echo "Не удалось выполнить запрос";
    } 
    $result = $res->fetch_all();
    if (count($result) == 0 ) {
            echo "Неверный логин или пароль";
            return;
    } else {
        echo $post_block;
    }
}
mysqli_close($link);
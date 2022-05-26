<?php

$input = json_decode(file_get_contents("php://input"), true);

$link = mysqli_connect('localhost', 'root', '', 'new_bd');

$post = $input['post'];

if ($link == false){
    echo("Ошибка: Невозможно подключиться к MySQL: " . mysqli_connect_error());
} else {
    mysqli_set_charset($link, "utf8");

    $sql = "INSERT INTO sn_posts(id, post) VALUES (0, '$post')";
    $result = mysqli_query($link, $sql);

    echo "Пост создан";

}
mysqli_close($link);

?>
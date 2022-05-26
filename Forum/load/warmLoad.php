<?php

$link = mysqli_connect('localhost', 'root', '', 'new_bd');

if ($link == false){
    echo("Ошибка: Невозможно подключиться к MySQL: " . mysqli_connect_error());
} else {
    mysqli_set_charset($link, "utf8");

    $sql = mysqli_query($link, "SELECT post FROM sn_posts");

    while ($result = mysqli_fetch_array($sql)) {

        $array[] = array('post' => $result['post']);

    }

$x = end($array);
$result = json_encode($x);

echo ($result);

}
mysqli_close($link);

?>
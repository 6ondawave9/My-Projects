<?php
use Workerman\Worker;

require_once __DIR__ . '/../vendor/autoload.php';

$myWorker = new Worker('websocket://127.0.0.1:2346');
$myWorker->count = 1;

$myWorker->onConnect = function ($connection) {
    echo "Новое соединение!\n";
};

$myWorker->onMessage = function ($connection, $data) use ($myWorker) {
    foreach($myWorker->connections as $clientConnections ) {
        $clientConnections->send($data);
    }
};

$myWorker->onClose = function ($connection) {
    echo "Конец соединения!\n";
};

Worker::runAll();
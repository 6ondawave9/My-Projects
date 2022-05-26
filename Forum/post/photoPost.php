<?php

$newFileName = $_FILES['myFile']['name'];

$fileTmpPath = $_FILES['myFile']['tmp_name'];

$fileSize = $_FILES['myFile']['size'];

if ($fileSize < 5*1024*1024) {

    $type = getimagesize($fileTmpPath);
    $type = ($type["mime"]);
    
    if ($type == "image/png" or $type == "image/jpeg" or $type == "image/gif") {
    
        $uploadFileDir = './img/';
        $dest_path = $uploadFileDir . $newFileName;
        if(!move_uploaded_file($fileTmpPath, $dest_path)) {
            echo "0609Error_move";
        } else {
            echo $dest_path;
        };
    
    } else {
        echo $type;
        echo "0609Error_type";
    };

} else {
    echo $fileSize;
    echo "0609Error_size";
}
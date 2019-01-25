<?php
$content = file_get_contents('php://input');

$data = json_decode($content, true);

if(!is_array($data)){
    throw new Exception('Received content contained invalid JSON!');
}

$color = $data["color"];

$fp = fopen('color.txt', 'w');
fwrite($fp, $color);
fclose($fp);


$myJSON = json_encode($content);

echo $myJSON;

?>

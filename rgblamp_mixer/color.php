<?php

 
//$myObj->color = "#FF0000";
$myfile = fopen("color.txt", "r") or die("Unable to open file!");
$color = fread($myfile,filesize("color.txt"));
fclose($myfile);

$myObj = array("color" =>$color);

$myJSON = json_encode($myObj);

echo $myJSON;
?>


<?php

$name = $_POST['name'];
$mail = $_POST['mail'];
$title = $_POST['title'];
$message = $_POST['message'];
$url = $_POST['url'];
$deletekey = $_POST['deletekey'];

try {
	$db = new SQLite3('../sample.db');
	$db->exec("insert into guestbook (name, mail, title, message, url, deletekey) values ('$name','$mail','$title','$message','$url','$deletekey');");
	$db->close();
	echo "true";
} catch (Exception $e) {
	echo "false";
	return;
}

?>
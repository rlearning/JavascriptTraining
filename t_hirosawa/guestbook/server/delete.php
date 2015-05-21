<?php

$id = $_GET['id'];
$deletekey = $_GET['deletekey'];

try {
	$db = new SQLite3('../sample.db');
	if (mb_strlen( $deletekey ) > 0) {
		$db->exec("delete from guestbook where id = $id and deletekey = $deletekey;");
	} else {
		$db->exec("delete from guestbook where id = $id and (deletekey IS NULL or deletekey = '');");
	}
	$db->close();
	
	return;
} catch (Exception $e) {
	return;
}

?>
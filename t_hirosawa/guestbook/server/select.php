<?php

$default_sql = "select * from guestbook";
$select_sql  = $default_sql;


try {
	$db = new SQLite3('../sample.db');
	$book_array = array();
	$where_array = array();

	if (isset($_GET['start_id'])
	|| isset($_GET['end_id'])
	) {
		$select_sql = $select_sql . ' where ';
		if (isset($_GET['start_id'])) {
			$select_sql = $select_sql . ' id >= ' . $_GET['start_id'];
		}
		if (isset($_GET['end_id'])) {
			if (array_count_values($where_array) > 1) {
				$select_sql = $select_sql . ' and ';
			}
			$select_sql = $select_sql . ' id <= ' . $_GET['end_id'];
		}
	}

	if (isset($_GET['order'])) {
		if ($_GET['order'] == "a") {
			$select_sql = $select_sql . ' order by id asc';
		} else {
			$select_sql = $select_sql . ' order by id desc';
		}
	} else {
		$select_sql = $select_sql . ' order by id desc';
	}
	if (isset($_GET['results'])) {
		$select_sql = $select_sql . ' limit ' . $_GET['results'];
	}
	
	$select_sql = $select_sql . ';';

	$result = $db->query($select_sql);

	while ($res = $result->fetchArray(SQLITE3_ASSOC)) {
		$encode_book = array(
				'id'=>$res['id'],
				'name'=>$res['name'],
				'mail'=>$res['mail'],
				'title'=>$res['title'],
				'message'=>$res['message'],
				'url'=>$res['url']
		);
		array_push($book_array, $encode_book);
	};
	$db->close();

	header( 'Content-Type: text/javascript; charset=utf-8' );
	echo json_encode( array( 'result'=>$book_array ) );

} catch (Exception $e) {
	print $e->getTraceAsString();
}
return;

?>
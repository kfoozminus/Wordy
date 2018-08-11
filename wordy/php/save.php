<?php
	
	include 'connect.php';
	if(isset($_POST['userid']) && isset($_POST['word'])) {
		$userid = $_POST['userid'];
		$word = $_POST['word'];

		$sql = "SELECT * FROM words WHERE userid = '$userid' AND word = '$word'";
		$res = mysqli_query($con, $sql);
		if(mysqli_num_rows($res) > 0) echo json_encode(array('data'=>0));
		else {
			$sql = "INSERT INTO words(userid, word) VALUES('$userid', '$word')";
			$res = mysqli_query($con, $sql);
			echo json_encode(array('data'=>mysqli_insert_id($con)));
		}
	}
	mysqli_close($con);
?>

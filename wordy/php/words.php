<?php
	
	include 'connect.php';
	if(isset($_POST['userid'])) {
		$userid = $_POST['userid'];

		$sql = "SELECT word FROM words WHERE userid = '$userid'";
		$res = mysqli_query($con, $sql);
		$result = array();
		while($row = mysqli_fetch_array($res)) {
			array_push($result, array('word'=>$row[0]));
		}
		echo json_encode(array("result"=>$result));
	}
	mysqli_close($con);
?>

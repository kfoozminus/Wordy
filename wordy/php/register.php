<?php
	
	include 'connect.php';
	if(isset($_POST['email']) && isset($_POST['password'])) {
		$email = $_POST['email'];
		$password = $_POST['password'];

		$sql = "SELECT * FROM users WHERE email = '$email'";
		$res = mysqli_query($con, $sql);
		if(mysqli_num_rows($res) > 0) echo json_encode(array('data'=>0));
		else {
			$sql = "INSERT INTO users(email, password) VALUES('$email', '$password')";
			$res = mysqli_query($con, $sql);
			echo json_encode(array('data'=>mysqli_insert_id($con)));
		}
	}
	mysqli_close($con);
?>

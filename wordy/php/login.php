<?php
	
	include 'connect.php';
	if(isset($_POST['email']) && isset($_POST['password'])) {
		$email = $_POST['email'];
		$password = $_POST['password'];

		$sql = "SELECT * FROM users WHERE email = '$email'";
		$res = mysqli_query($con, $sql);
		if(mysqli_num_rows($res) == 0)
			echo json_encode(array('data' => 0));
		else {
			$obj = $res->fetch_object();
			if($obj->password == $password)
				echo json_encode(array('data' => $obj->userid));
			else echo json_encode(array('data' => -1));
		}
	}
	mysqli_close($con);
?>

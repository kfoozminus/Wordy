
document.addEventListener('DOMContentLoaded', function() {
	function notify(msg) {
		if (!("Notification" in window)) {
			    alert("This browser does not support desktop notification");
		}
		else if (Notification.permission === "granted") {
			 var notification = new Notification(msg);
		}
		else if (Notification.permission !== "denied") {
			Notification.requestPermission(function (permission) {
				if (permission === "granted") {
					        var notification = new Notification(msg);
					      }
			});
		}
	}
	var register = document.getElementById('register');
	register.addEventListener('click', function() {
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		if(email == "" || email == null) notify("email field is empty");
		else if(password == "" || password == null) notify("password field is empty");
		else {
			$.ajax({
				type: "POST",
				url: "http://localhost:80/wordy/php/register.php",
				data: {email: email, password: password},
				dataType: 'json',
				success: function(ret) {
					if(ret.data == 0) notify("user already exists");
					//else notify(ret.data);
					else notify("registration is successful");
				},
				error: function(request, ajaxOptions, thrownError) {
					notify("error");
				}
			});
		}
	});
	var login = document.getElementById('login');
	login.addEventListener('click', function() {
		location.href = "login.html";
	});
	var home = document.getElementById('home');
	home.addEventListener('click', function() {
		location.href = "inputWord.html";
	});
});

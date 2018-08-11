
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
	var login = document.getElementById('login');
	login.addEventListener('click', function() {
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		if(email == "" || email == null) notify("email field is empty");
		else if(password == "" || password == null) notify("password field is empty");
		else {
			$.ajax({
				type: "POST",
				url: "http://localhost:80/wordy/php/login.php",
				data: {email: email, password: password},
				dataType: 'json',
				success: function(ret) {
					if(ret.data == 0) notify("user doesn't exist");
					else if(ret.data != -1) {
						notify("login successful!");
						//notify(ret.data);
						//cookie set
						var date = new Date();
						date.setTime(date.getTime ()+(24*60*60*1000));
						var expires = "; expires="+date.toGMTString();
						document.cookie = "userid="+ret.data.toString()+expires;
						//notify(document.cookie);
						//location.href = "inputWord.html";
					}
					else notify("wrong password");
				},
				error: function(request, ajaxOptions, thrownError) {
					notify("error");
				}
			});
		}
	});
	var register = document.getElementById('register');
	register.addEventListener('click', function() {
		location.href = "register.html";
	});
	var home = document.getElementById('home');
	home.addEventListener('click', function() {
		location.href = "inputWord.html";
	});
});

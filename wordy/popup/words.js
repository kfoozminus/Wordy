
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
	var ca = document.cookie.split(';');
	var userid = ca[0].substring(7, ca[0].length);
	$.ajax({
		type: "POST",
		url: "http://localhost:80/wordy/php/words.php",
		data: {userid: userid},
		dataType: 'json',
		success: function(ret) {
			for(var i = 0; i < ret.result.length; i ++) {
				var ol = document.getElementById("words");
				var li = document.createElement("li");
				li.appendChild(document.createTextNode(ret.result[i].word));
				ol.appendChild(li);
			}
		},
		error: function(request, ajaxOptions, thrownError) {
			notify("error");
		}
	});
});

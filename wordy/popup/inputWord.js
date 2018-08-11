
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
	var crawl = document.getElementById('crawl');
	crawl.addEventListener('click', function() {
		var word_input = document.getElementById('word').value;
		if(word_input == "") notify("word is empty");
		else {
			$.ajax({
				type: "POST",
				url: "http://localhost:80/cgi-bin/2ndC.py",
				data: {word: word_input},
				dataType: "html",
				success: function (html) {
					$("#meaning").html(html);
				},
				error: function(request, ajaxOptions, thrownError) {
					$("meaning").html("error");
				}
			});
		}
	});
	var save = document.getElementById('save');
	save.addEventListener('click', function() {
		var word_input = document.getElementById('word').value;
		if(word_input == "") notify("Word is empty!");
		else {
			var ca = document.cookie.split(';');
			var userid = ca[0].substring(7, ca[0].length);
			$.ajax({
				type: "POST",
				url: "http://localhost:80/wordy/php/save.php",
				data: {userid: userid, word: word_input},
				dataType: 'json',
				success: function(ret) {
					if(ret.data == 0) notify("word already exists");
					else {
						//notify(ret.data);
						notify("word is added to your list");
					}
				},
				error: function(request, ajaxOptions, thrownError) {
					notify("error");
				}
			});
		}
	});
	var clear = document.getElementById('clear');
	clear.addEventListener('click', function() {
		document.getElementById('meaning').innerHTML = "";
	});
});

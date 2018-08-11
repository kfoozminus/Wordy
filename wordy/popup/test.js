
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
	function sleep() {
		  var start = new Date().getTime();
		  for (var i = 0; i < 1e7; i++) {
			      if ((new Date().getTime() - start) > 3000){
				            break;
				          }
			    }
	}
	function randomMeaning(word, id) {
		$.ajax({
			type: "POST",
			url: "http://localhost:80/cgi-bin/ranMean.py",
			data: {word: word},
			dataType: "html",
			success: function(html) {
				document.getElementById(id).innerHTML = html;
			},
			error: function(request, ajaxOptions, throwError) {
				document.getElementById(id).innerHTML = "Error while loading. Please try again.";
			}
		});
	}
	function checkAns(option, ans) {
		if(ans == option) {
			notify("Correct");
		}
		else {
			notify("Correct Answer is " + ans);
		}
		//sleep();
		//location.href = "test.html";
	}
	var ans;
	var ca = document.cookie.split(';');
	var userid = ca[0].substring(7, ca[0].length);
	$.ajax({
		type: "POST",
		url: "http://localhost:80/wordy/php/words.php",
		data: {userid: userid},
		dataType: 'json',
		success: function(ret) {
			var len = ret.result.length;
			if(len < 4) {
				document.getElementById("popup-content").innerHTML = "You need to save at least 4 words to take a test.";
			}
			else {
				ans = Math.floor(Math.random() * 4) + 1;
				var div = Math.floor(len/4);
				//alert(div);

				var id = Math.floor(Math.random() * div);
				//alert(id);
				if(ans == 1) document.getElementById('question').innerHTML = ret.result[id].word;
				randomMeaning(ret.result[id].word, "opt1");

				id = Math.floor(Math.random() * div) + div;
				//alert(id);
				if(ans == 2) document.getElementById('question').innerHTML = ret.result[id].word;
				randomMeaning(ret.result[id].word, "opt2");

				id = Math.floor(Math.random() * div) + 2*div;
				//alert(id);
				if(ans == 3) document.getElementById('question').innerHTML = ret.result[id].word;
				randomMeaning(ret.result[id].word, "opt3");

				id = Math.floor(Math.random() * (len - 3 * div)) + 3*div;
				//alert(id);
				if(ans == 4) document.getElementById('question').innerHTML = ret.result[id].word;
				randomMeaning(ret.result[id].word, "opt4");
			}
		},
		error: function(request, ajaxOptions, thrownError) {
			notify("error");
		}
	});
	var ans1 = document.getElementById('ans1');
	ans1.addEventListener('click', function() {
		checkAns(1, ans);
	});
	var ans2 = document.getElementById('ans2');
	ans2.addEventListener('click', function() {
		checkAns(2, ans);
	});
	var ans3 = document.getElementById('ans3');
	ans3.addEventListener('click', function() {
		checkAns(3, ans);
	});
	var ans4 = document.getElementById('ans4');
	ans4.addEventListener('click', function() {
		checkAns(4, ans);
	});
});

/**
 * @author クラウザー2世
 */

function select() {

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var resultData = JSON.parse(xmlHttp.responseText);
			var logSection = document.getElementById("log_section");
			logSection.innerHTML = "";
			
			for (var i=0; i<resultData.result.length; i++){
				var article = document.createElement("article");
				var message = '<dt>[<b>' + (resultData.result.length - i) + '</b>] <b class="subcol">' 	+ resultData.result[i].title + '</b>投稿者：<b>';
				if (resultData.result[i].mail.length > 0) {
					message = message + '<a href="mailto:' + resultData.result[i].mail + '">' + resultData.result[i].name + '</a>';
				} else {
					message = message + resultData.result[i].name;
				}
				message = message + '</b><input type="button" value="削除" onclick="message_delete(' + resultData.result[i].id + ');"></dt>'	+ '<dd>' + resultData.result[i].message;
				if (resultData.result[i].url.length > 0) {
					message = message + '<p class="url"><a href="' + resultData.result[i].url + '" target="_blank">' + resultData.result[i].url + '</a></p>';
				} else {
					message = message + '<p class="url"></p>';
				}
				message = message + '</dd>';
				
				article.innerHTML = message;
				article.className = 'log_article';
				
				logSection.appendChild(article);
			}
		}
	}
	
	xmlHttp.open("GET", "./select.php", true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(null);
	
}
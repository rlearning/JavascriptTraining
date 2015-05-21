/**
 * @author クラウザー2世
 */
function message_delete(id) {
	
	deletekey = window.prompt("削除キーを入力してください", "");
	
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			select();
		} else {
			if (xmlHttp.readyState == 4) {
				alert( this.responseText );
			}
		}
	}
	
	url = "./delete.php?" + "id=" + id + "&deletekey=" + deletekey; 
	
	xmlHttp.open("GET", url, true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(null);
	
}
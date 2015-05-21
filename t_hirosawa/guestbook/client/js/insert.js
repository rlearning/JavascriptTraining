/**
 * @author クラウザー2世
 */

function insert() {
	var input_name = document.forms.guestbook_form.input_name.value;
	var input_email = encodeURIComponent(document.forms.guestbook_form.input_email.value);
	var input_title = document.forms.guestbook_form.input_title.value;
	var input_message = document.forms.guestbook_form.input_message.value;
	var input_url = encodeURIComponent(document.forms.guestbook_form.input_url.value);
	var input_deletekey = encodeURIComponent(document.forms.guestbook_form.input_deletekey.value);

	input_name = htmlEscape(input_name);
	input_title = htmlEscape(input_title);
	input_message = htmlEscape(input_message);
	
	input_name = encodeURIComponent(input_name);
	input_title = encodeURIComponent(input_title);
	input_message = encodeURIComponent(input_message);

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
	var param = "name=" + input_name + "&mail=" + input_email + "&title=" + input_title + "&message=" + input_message + "&url=" + input_url + "&deletekey=" + input_deletekey;
	xmlHttp.open("POST", "./insert.php", true);
	xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlHttp.send(param);

}
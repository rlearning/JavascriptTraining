/**
 * @author クラウザー2世
 */

function check() {
	var input_name = document.forms.guestbook_form.input_name.value;
	var input_title = document.forms.guestbook_form.input_title.value;
	var input_message = document.forms.guestbook_form.input_message.value;
	var input_email = document.forms.guestbook_form.input_email.value;
	
	if (input_name.length == 0) {
		alert("名前を入力してください");
		return false;
	} else if (input_title.length == 0) {
		alert("タイトルを入力してください");
		return false;
	} else if (input_message.length == 0) {
		alert("メッセージを入力してください");
		return false;
	} else if (input_email.length > 0) {
		if (!input_email.match(/^[A-Za-z0-9]+[\w-]+@[\w\.-]+\.\w{2,}$/)){
			alert("e-mailアドレスをご確認ください。");
			return false;
		}
	}
	
	return true;

}
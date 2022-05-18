function check_cookie(){
	var acceptCookie = getCookie("");
	if(acceptCookie != "true"){
		return true;
	}
	else{
		return false;
	}
};
function acceptCookie(){
	var acceptCookie = getCookie("true");
}
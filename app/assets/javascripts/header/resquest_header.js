$.ajaxSetup({
  headers: request_header()
});

function request_header(){
	header = {
		"access-token": getCookie("access-token"),
		"uid": getCookie("uid"),
		"client": getCookie("client")
	}
	return header
}
function Signout(){
    deleteCookie("access-token")
    deleteCookie("uid")
    deleteCookie("client")
    window.location.href = "/members/sign_in"
}
function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
function getCookie(name){
    var pattern = RegExp(name + "=.[^;]*")
    matched = document.cookie.match(pattern)
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
}
// function read_cookie() {
// 	var all_cookie = document.cookie.split(";")
// 	var coo = []
// 	for (var i = 0 ; i < all_cookie.length; i++) {
// 		temp = all_cookie[i].split('=')
// 		coo[temp[0]] = temp[1]
// 	}
// 	return coo
// }
 
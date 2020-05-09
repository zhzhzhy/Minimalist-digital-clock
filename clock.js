function update(){
	dateobj = new Date();
	document.getElementById(timer) = dateobj.getDate();
}
setInterval(update,1000);

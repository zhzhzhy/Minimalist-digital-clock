function update{
	d = new Date();
	document.getElementById(timer) = d.getDate();
}
setInterval(update,1000);

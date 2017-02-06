
window.onload =function()
{

var login =document.getElementById('login');
	var logins =document.getElementById('logins');
	login.onclick=function()
	{
		logins.style.display='block';
	}
	var closebox =document.getElementById('closeBoxShadow');
	closebox.onclick=function()
	{
		logins.style.display='none';
	}
	var register =document.getElementById('register');
	var registers =document.getElementById('registers');
	register.onclick=function()
	{
		registers.style.display='block';
	}
	var closebox1 =document.getElementById('closeBoxShadow1');
	closebox1.onclick=function()
	{
		registers.style.display='none';
	}
	
}
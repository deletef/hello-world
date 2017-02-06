
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
	
	
	var ctitlelist = [
	'今日热榜','已完结','更新快','高分精选','日韩','条漫','联合出品','少女','百合',
	'肥皂','恋爱','玄幻','游戏','治愈 ','科幻','搞笑','鬼怪','励志','体育','格斗','布卡娘'];
					 
	var cimglist =[
	'img/40m.jpg','img/401m.jpg','img/402m.jpg','img/403m.jpg','img/404m.jpg','img/405m.jpg','img/407m.jpg',
	'img/408m.jpg','img/409m.jpg'
	];
	
	var cnamelist =[
	'一条狗','龙族','狂神','我家大师兄脑子有坑','日常幻想指南','妖神记','百炼成神','当仁不让',
	'过心花'
	];
	var cdesclist=[
	'使徒子','颜开工作室/...','穆逢春/唐家...','凌宇沫/剧象...','白丁/漫天星','踏雪动漫','燃哉工作室','刘北/临界4..',
	'爱欧/日更计...'
	];
	
	var categoryb = document.getElementById('category-box');
	var main =document.getElementById('main');
	
	for (var i=0;i<ctitlelist.length;i++) {
		var cb1 =categoryb.cloneNode(true);
		if (i%3==0) {
			cb1.style.margin='0 21px';
		} 
		cb1.getElementsByTagName('span')[0].innerHTML=ctitlelist[i];
		if(i<3)
		{
			for (var j=0;j<3;j++) {
			cb1.getElementsByTagName('img')[j].src =cimglist[i*3+j];
			var cli= cb1.getElementsByTagName('li')[j];
			cli.getElementsByTagName('a')[1].innerHTML=cnamelist[i*3+j];
			cli.getElementsByTagName('a')[2].innerHTML=cdesclist[i*3+j];
		}
		}
		
		
		
		main.appendChild(cb1);
	}
	
	
//	var cb1 =categoryb.cloneNode(true);
//	cb1.style.margin='0 21px';
//	var cb2 =categoryb.cloneNode(true);
//	var cb3 =categoryb.cloneNode(true);
//	main.appendChild(cb1);
//	main.appendChild(cb2);
//	main.appendChild(cb3);
	
	
	
	
}
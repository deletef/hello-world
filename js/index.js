
window.onload = function()
{
	var boxp= document.getElementById('mange-boxp');
	var box = document.getElementById('mange-box');
	var imglist =[
	'img/43m (1).jpg',
			'img/43m (2).jpg',
			'img/43m (3).jpg',
			'img/43m (4).jpg',
			'img/43m (5).jpg'
	];
	
	var namelist =[
			'风花雪月',
			'神元传	',
			'魔王传说',
			'前生妖狐与今生的我',
			'崩坏月记'
	];
	var anthorlist =[
			'雪月风华',
			'库啵库啵桑',
			'心田系',
			'水神-liweiy..',
			'崩布'
	];
	var updatelist =[
			'最后更新:第2话',
			'最后更新:第6话',
			'最后更新:第3话',
			'最后更新:第5话',
			'最后更新:第1话'
	]
	
	for (var i=0;i<imglist.length;i++) {
		var boxx =boxp.cloneNode(true);
		boxx.getElementsByTagName('img')[0].src =imglist[i];
		boxx.getElementsByTagName('a')[1].innerHTML =namelist[i];
		boxx.getElementsByTagName('a')[2].innerHTML  =anthorlist[i];
		boxx.getElementsByTagName('a')[3].innerHTML  =updatelist[i];
		box.appendChild(boxx);
	}
	
	
	
	var imglist1 =[
			
			'img/43m (7).jpg',
			'img/43m (8).jpg',
			'img/43m (9).jpg',
			'img/43m (10).jpg',
			'img/43m (11).jpg',
			'img/43m (12).jpg',
			'img/43m (13).jpg',
			'img/43m (14).jpg',
			'img/43m (15).jpg',
			'img/43m (16).jpg',
			'img/43m (17).jpg'
	];
	
	var namelist1 =[
			
			'反差姐妹',
			'捏造trap–NTR-',
			'摇曳百合',
			'犬神同学和猫山同学',
			'立花馆恋爱三角铃',
			'Comic 百合姬 38号',
			'王子王子',
			'少女失格',
			'2DK、G笔、闹钟。',
			'月色真美啊',
			'love death'
	];
	
	var anthorlist1 =[
			
			'サブロウタ/一迅社	',
			'meno/一迅社',
			'コダマナオコ/一迅...',
			'なもり/一迅社',
			'くずしろ/一迅社',
			'merryhach...',
			'あおと响/一迅社',
			'河合朗/一迅社	',
			'大沢やよい/一迅社',
			'伊藤ハチ/一迅社',
			'くずしろ/一迅社'
	];
	
	var updatelist1 =[
			
			'最后更新:第21话',
			'最后更新:第15话',
			'最后更新:第119话',
			'最后更新:第53话',
			'最后更新:第14话',
			'最后更新:第23话',
			'最后更新:第8话',
			'最后更新:第8话',
			'最后更新:第17话',
			'最后更新:第10话',
			'最后更新:第7话'
	];
	
	var boxp1= document.getElementById('mange-boxp1');
	var box1 = document.getElementById('mange-box1');
	for (var i=0;i<imglist1.length;i++) {
		var boxx1 =boxp1.cloneNode(true);
		boxx1.getElementsByTagName('img')[0].src =imglist1[i];
		boxx1.getElementsByTagName('a')[1].innerHTML =namelist1[i];
		boxx1.getElementsByTagName('a')[2].innerHTML  =anthorlist1[i];
		boxx1.getElementsByTagName('a')[3].innerHTML  =updatelist1[i];
		box1.appendChild(boxx1);
	}
	
	var imglist2 =[
			
			
			'img/43m (19).jpg',
			'img/43m (20).jpg',
			'img/43m (21).jpg',
			'img/43m (22).jpg',
			'img/43m (23).jpg',
			'img/43m (24).jpg',
			'img/43m (25).jpg',
			'img/43m (26).jpg',
			'img/43m (27).jpg',
			'img/43m (28).jpg',
			'img/43m (29).jpg'
	];
	
	var namelist2 =[
			
			
			'唐寅在异界',
			'Liberté 自由',
			'微微一笑很倾城	',
			'期限内餐厅',
			'恋爱的公正性',
			'热烈打扫/我的清洁小妹不可能这...',
			'百合公寓',
			'梦锥',
			'诺林牧师天使篇',
			'死者之书',
			'青柠之夏'
	];
	
	var anthorlist2 =[
			
			'云端漫画	',
			'全慧珍/金洛炫/大...	',
			'元气工场',
			'书问/木习',
			'李格林/大元C.I...',
			'AENGO/大元C...',
			'河伯',
			'SOUP/咪咕动漫	',
			'paplo',
			'BurstBrai...',
			'漫铠动漫'
	];
	
	var updatelist2 =[
			
			
			'最后更新:第87话',
			'最后更新:第21话',
			'最后更新:第34话',
			'最后更新:第32话',
			'最后更新:第36话',
			'最后更新:第24话',
			'最后更新:第9话',
			'最后更新:第52话',
			'最后更新:第41话',
			'最后更新:第52话',
			'最后更新:第98话'
	];
	
	var boxp2= document.getElementById('mange-boxp2');
	var box2 = document.getElementById('mange-box2');
	for (var i=0;i<imglist1.length;i++) {
		var boxx2 =boxp2.cloneNode(true);
		boxx2.getElementsByTagName('img')[0].src =imglist2[i];
		boxx2.getElementsByTagName('a')[1].innerHTML =namelist2[i];
		boxx2.getElementsByTagName('a')[2].innerHTML  =anthorlist2[i];
		boxx2.getElementsByTagName('a')[3].innerHTML  =updatelist2[i];
		box2.appendChild(boxx2);
	}
	
	var magab2 =document.getElementById('mange-b2');
	var magab3 =magab2.cloneNode(true);
	var left =document.getElementById('left');
	left.appendChild(magab3);
	
	
	var vimglist =[
	'img/20170110134148_5874741cc75d4.jpg',
	'img/20160422190539_571a0553ef3be.jpg',
	'img/20161228112550_5863307477671.jpg',
	'img/20161222154348_585b8365f1b2d.jpg',
	'img/20160607115657_5756460928330.jpg',
	'img/20170119180339_58808efb3faf5.jpg',
	'img/20170112191327_587764d79e5d7.png'
	
	]
	
	var vname =[
	'少女咖啡枪',
	'克鲁赛德战记',
	'阴阳师',
	'影之刃2',
	'战场双马尾',
	'武娘',
	'造物法则'
	
	]
	
	
	var subject =document.getElementById('subject-box');
	var f= document.getElementById('right-subject');
	for (var i=0;i<vimglist.length;i++) {
		var s1 =subject.cloneNode(true);
		s1.getElementsByTagName('img')[0].src =vimglist[i];
		s1.getElementsByTagName('p')[0].innerHTML =vname[i];
		f.appendChild(s1);
	}
	
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
	
	
	
	
	$(document).ready(function () {

                var i = 0;

                var clone = $(".imgturn .img li").first().clone();//克隆第一张图片
                $(".imgturn .img").append(clone);//复制到列表最后
                var size = $(".imgturn .img li").size();
               

                for (var j = 0; j < size-1; j++) {
                    $(".imgturn .num").append("<li></li>");
                }

                $(".imgturn .num li").first().addClass("on");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},2000);

                /*鼠标悬停事件*/

                $(".imgturn").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
                });




                /*鼠标滑入原点事件*/

                $(".imgturn .num li").hover(function () {

                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".imgturn .img").stop().animate({ left: -index * 880 }, 500);
                    $(this).addClass("on").siblings().removeClass("on");
                });



                /*向左按钮*/
                $(".imgturn .btn_l").click(function () {
                    i++;
                    move();
                })

                
                /*向右按钮*/
                $(".imgturn .btn_r").click(function () {
                    i--;
                    move();
                })

                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(".imgturn .img").css({ left: 0 });
                        i = 1;
                    }
                    if (i == -1) {
                        $(".imgturn .img").css({ left: -(size - 1) * 880 });
                        i = size - 2;
                    }
                    $(".imgturn .img").stop().animate({ left: -i * 880 }, 500);

                    if (i == size - 1) {
                        $(".imgturn .num li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".imgturn .num li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }
            });
            
            
}

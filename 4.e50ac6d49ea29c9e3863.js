(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomeModule",function(){return v});var i=t("ofXK"),o=t("tyNb"),a=t("Etcd"),r=t("l5mm"),d=t("fXoL"),c=t("yW9e"),g=t("Q8cG"),s=t("C2AL"),b=t("nJia"),l=t("FwiY");const p=["homeComponent"],m=function(){return{color:"#6bb8ff"}},h=[{path:"",component:(()=>{class e{constructor(){this.isCollapsed=!1,this.dateNow=new Date,this.dDay=new Date("Oct 17 2021 00:00:00"),this.milliSecondsInASecond=1e3,this.hoursInADay=24,this.minutesInAnHour=60,this.SecondsInAMinute=60}getTimeDifference(){this.timeDifference=this.dDay.getTime()-(new Date).getTime(),this.allocateTimeUnits(this.timeDifference)}allocateTimeUnits(e){this.secondsToDday=Math.floor(e/this.milliSecondsInASecond%this.SecondsInAMinute),this.minutesToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour)%this.SecondsInAMinute),this.hoursToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute)%this.hoursInADay),this.daysToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute*this.hoursInADay))}ngOnInit(){this.subscription=Object(r.a)(1e3).subscribe(e=>{this.getTimeDifference()})}ngOnDestroy(){this.subscription.unsubscribe()}ngAfterViewInit(){this.homeComponent.first.elementRef.nativeElement.querySelector("nz-sider").children[1].setAttribute("Style","top: 12px;left: 8px;position: fixed;border-radius: 8px")}onClickSideMenu(e,n){}onClickSideMenuButton(){}onSectionChange(e){}scrollTo(e){document.querySelector("#"+e).scrollIntoView()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d.Mb({type:e,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&d.Pc(p,1),2&e){let e;d.yc(e=d.gc())&&(n.homeComponent=e)}},features:[d.Db([{provide:a.a,useValue:[{name:"transform-no-loop",strategy:a.d},{name:"flip",strategy:a.b}]}])],decls:188,vars:15,consts:[[1,""],[1,"floating-header"],["homeComponent",""],[1,"invitation-content-main"],[1,"main-slider"],[1,"groom-bride-main-content"],[1,"groom-content-table"],[1,"wedding-content"],[1,"small-icon","icon","icon-tie"],[1,"wedding-date"],[1,"wedding-person-save"],[1,"wedding-person-name"],[1,"wedding-info"],[1,"section","story-area"],[1,"container"],[1,"row"],[1,"column"],[1,"story-heading"],[1,"story-title"],[1,"heading-bottom"],[1,"bottom-icon"],[1,"story-content"],[1,"section","counter-area"],[1,"colummn"],[1,"counter-title"],[1,"remaining-time"],[1,"clock"],[1,"time"],["id","days",1,"counter-timing"],["id","hours",1,"counter-timing"],["id","minutes",1,"counter-timing"],["id","seconds",1,"counter-timing"],[1,"section"],[1,"row","row-padding"],[1,"subheading"],[1,"subheading-content"],[1,"coulumn"],[1,"bride-groom","ftco-animate","d-md-flex","fadeInUp","ftco-animated"],[1,"img","order-md-last","ml-md-5","groom-image"],[1,"text","text-md-right","pl-md-5","mr-md-5","font-style"],[1,"h2-heading"],[1,"img","ml-md-5","bridal-image"],[1,"wedding-event-main"],[1,"wedding-detail","margin-bottom"],[1,"wedding-event","right"],[1,"wedding-event-inner"],["src","assets/icons/wedding-rings.png",1,"icon"],[1,"wedding-event-time"],[1,"wedding-event-title"],[1,"paragraph"],[1,"wedding-event","left"],["src","assets/icons/dish.png",1,"icon"],["src","assets/icons/wedding-cake.png",1,"icon"],["src","assets/icons/tripod.png",1,"icon"],[1,"photo-gallary-title"],["src","https://preview.colorlib.com/theme/weddingdreams/img/icon/xti.png.pagespeed.ic.DcRFSgi-C9.webp"],["data-setbg","img/features/feature-1.jpg",1,"galary_item","photography","set-background",2,"background-image",'url("https://preview.colorlib.com/theme/weddingdreams/img/features/feature-1.jpg.webp")',"left","0%","top","0px"],[1,"fg__item__text"],[1,"side-menu"],[1,"side-menu-layout"],["id","side-nav-bar","nzCollapsible","","nzBreakpoint","lg","nzTheme","dark",1,"side-menu-wrapper",3,"nzCollapsedWidth","nzWidth","nzCollapsed","nzCollapsedChange"],["nz-menu","","nzMode","inline","nzTheme","dark",1,"side-panel-main"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","false",3,"nzTooltipTitle"],["nz-icon","","nzType","home","nzTheme","twotone",2,"font-size","16px"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","true",3,"nzTooltipTitle"],["nz-icon","","nzType","bell","nzTheme","twotone"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle","click"],["nz-icon","","nzType","file-add","nzTheme","twotone"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],["nz-icon","","nzType","message","nzTheme","twotone"],["nz-icon","","nzType","gift","nzTheme","twotone"],["nz-icon","","nzType","usergroup-add","nzTheme","outline",3,"ngStyle"]],template:function(e,n){1&e&&(d.Yb(0,"nz-layout",0),d.Yb(1,"div",1),d.Tb(2,"nz-header"),d.Xb(),d.Yb(3,"nz-layout",0,2),d.Yb(5,"div",3),d.Yb(6,"div",4),d.Yb(7,"div",5),d.Yb(8,"div",6),d.Yb(9,"div",7),d.Tb(10,"i",8),d.Yb(11,"h5",9),d.Lc(12," 23 SETPEMBER 2017"),d.Xb(),d.Yb(13,"h3",10),d.Lc(14," Save The Date"),d.Xb(),d.Yb(15,"h1",11),d.Lc(16,"John & Rose"),d.Xb(),d.Yb(17,"span",12),d.Lc(18,"Are Getting Married"),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(19,"section",13),d.Yb(20,"div",14),d.Yb(21,"div",15),d.Yb(22,"div",16),d.Yb(23,"div",17),d.Yb(24,"h2",18),d.Lc(25,"Our Story"),d.Xb(),d.Yb(26,"span",19),d.Yb(27,"p",20),d.Lc(28,"*"),d.Xb(),d.Xb(),d.Xb(),d.Yb(29,"div",21),d.Yb(30,"p"),d.Lc(31," Every bride and groom wants an incomparable wedding combined with fantasy and style. We create stunning, one-of-a-kind events produced and styled to perfection. From traditional to modern, elegant and relaxed, we focus on any event we plan. "),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(32,"section",22),d.Yb(33,"div",14),d.Yb(34,"div",15),d.Yb(35,"div",23),d.Yb(36,"div",17),d.Yb(37,"h2",24),d.Lc(38,"Don't miss it"),d.Xb(),d.Yb(39,"span",19),d.Yb(40,"p"),d.Lc(41,"*"),d.Xb(),d.Xb(),d.Xb(),d.Yb(42,"div",25),d.Yb(43,"div",26),d.Yb(44,"div",27),d.Yb(45,"span",28),d.Lc(46),d.Xb(),d.Lc(47,"Days "),d.Xb(),d.Yb(48,"div",27),d.Yb(49,"span",29),d.Lc(50),d.Xb(),d.Lc(51,"Hours "),d.Xb(),d.Yb(52,"div",27),d.Yb(53,"span",30),d.Lc(54),d.Xb(),d.Lc(55,"Minutes "),d.Xb(),d.Yb(56,"div",27),d.Yb(57,"span",31),d.Lc(58),d.Xb(),d.Lc(59,"Seconds "),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(60,"section",32),d.Yb(61,"div",14),d.Yb(62,"div",33),d.Yb(63,"div",16),d.Yb(64,"span",34),d.Lc(65,"About Bride & Groom"),d.Xb(),d.Yb(66,"h2",35),d.Lc(67,"Bride & Groom"),d.Xb(),d.Xb(),d.Xb(),d.Yb(68,"div",15),d.Yb(69,"div",36),d.Yb(70,"div",37),d.Tb(71,"div",38),d.Yb(72,"div",39),d.Yb(73,"h2",40),d.Lc(74,"Leonardo Agustus"),d.Xb(),d.Yb(75,"p"),d.Lc(76,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),d.Xb(),d.Xb(),d.Xb(),d.Yb(77,"div",37),d.Tb(78,"div",41),d.Yb(79,"div",39),d.Yb(80,"h2",40),d.Lc(81,"Leonardo Agustus"),d.Xb(),d.Yb(82,"p"),d.Lc(83,"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Tb(84,"div",16),d.Xb(),d.Xb(),d.Xb(),d.Yb(85,"section",42),d.Yb(86,"div",14),d.Yb(87,"div",15),d.Yb(88,"div",16),d.Yb(89,"div",17),d.Yb(90,"h2",18),d.Lc(91,"Wedding Details"),d.Xb(),d.Yb(92,"span",19),d.Yb(93,"p",20),d.Lc(94,"*"),d.Xb(),d.Xb(),d.Xb(),d.Yb(95,"div",43),d.Yb(96,"div",44),d.Yb(97,"div",45),d.Tb(98,"img",46),d.Yb(99,"h1",47),d.Lc(100,"7.30 am"),d.Xb(),d.Yb(101,"h4",48),d.Lc(102,"Ceremony"),d.Xb(),d.Yb(103,"p",49),d.Lc(104,"Look at the most passionate ceremony ever. We wish happiness to the wedding couple."),d.Xb(),d.Xb(),d.Xb(),d.Yb(105,"div",50),d.Yb(106,"div",45),d.Tb(107,"img",51),d.Yb(108,"h1",47),d.Lc(109,"7.30 am"),d.Xb(),d.Yb(110,"h4",48),d.Lc(111,"Toast & Dinner"),d.Xb(),d.Yb(112,"p",49),d.Lc(113,"Look at the most passionate ceremony ever. We wish happiness to the wedding couple."),d.Xb(),d.Xb(),d.Xb(),d.Yb(114,"div",44),d.Yb(115,"div",45),d.Tb(116,"img",52),d.Yb(117,"h1",47),d.Lc(118,"7.30 am"),d.Xb(),d.Yb(119,"h4",48),d.Lc(120,"Wedding Cake"),d.Xb(),d.Yb(121,"p",49),d.Lc(122,"Look at the most passionate ceremony ever. We wish happiness to the wedding couple."),d.Xb(),d.Xb(),d.Xb(),d.Yb(123,"div",50),d.Yb(124,"div",45),d.Tb(125,"img",53),d.Yb(126,"h1",47),d.Lc(127,"7.30 am"),d.Xb(),d.Yb(128,"h4",48),d.Lc(129,"Photography"),d.Xb(),d.Yb(130,"p",49),d.Lc(131,"Look at the most passionate ceremony ever. We wish happiness to the wedding couple."),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(132,"section",32),d.Yb(133,"div",14),d.Yb(134,"div",15),d.Yb(135,"div",16),d.Yb(136,"div",54),d.Yb(137,"h2"),d.Lc(138,"Our Photo Galarry"),d.Xb(),d.Tb(139,"img",55),d.Xb(),d.Xb(),d.Xb(),d.Yb(140,"div",15),d.Yb(141,"div",56),d.Yb(142,"div",57),d.Yb(143,"span"),d.Lc(144,"Ceremonies"),d.Xb(),d.Yb(145,"h2"),d.Lc(146,"Christina & Evelyn"),d.Xb(),d.Xb(),d.Xb(),d.Yb(147,"div",56),d.Yb(148,"div",57),d.Yb(149,"span"),d.Lc(150,"Ceremonies"),d.Xb(),d.Yb(151,"h2"),d.Lc(152,"Christina & Evelyn"),d.Xb(),d.Xb(),d.Xb(),d.Yb(153,"div",56),d.Yb(154,"div",57),d.Yb(155,"span"),d.Lc(156,"Ceremonies"),d.Xb(),d.Yb(157,"h2"),d.Lc(158,"Christina & Evelyn"),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(159,"div",58),d.Yb(160,"nz-layout",59),d.Yb(161,"nz-sider",60),d.fc("nzCollapsedChange",function(){return n.onClickSideMenuButton()}),d.Yb(162,"div"),d.Yb(163,"ul",61),d.Yb(164,"li",62),d.Tb(165,"i",63),d.Yb(166,"span"),d.Lc(167,"Home"),d.Xb(),d.Xb(),d.Yb(168,"li",64),d.Tb(169,"i",65),d.Yb(170,"span"),d.Lc(171,"Notification"),d.Xb(),d.Xb(),d.Yb(172,"li",66),d.fc("click",function(e){return n.onClickSideMenu(e,"Add-File-Component")}),d.Tb(173,"i",67),d.Yb(174,"span"),d.Lc(175,"Add Files"),d.Xb(),d.Xb(),d.Yb(176,"li",68),d.Tb(177,"i",69),d.Yb(178,"span"),d.Lc(179,"Message"),d.Xb(),d.Xb(),d.Yb(180,"li",68),d.Tb(181,"i",70),d.Yb(182,"span"),d.Lc(183,"Birthdays"),d.Xb(),d.Xb(),d.Yb(184,"li",68),d.Tb(185,"i",71),d.Yb(186,"span"),d.Lc(187,"FamilyMembers"),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb()),2&e&&(d.Eb(46),d.Nc(" ",n.daysToDday," "),d.Eb(4),d.Nc(" ",n.hoursToDday," "),d.Eb(4),d.Nc(" ",n.minutesToDday," "),d.Eb(4),d.Nc(" ",n.secondsToDday," "),d.Eb(103),d.rc("nzCollapsedWidth",0)("nzWidth",210)("nzCollapsed",n.isCollapsed),d.Eb(3),d.rc("nzTooltipTitle",n.isCollapsed?"Home":""),d.Eb(4),d.rc("nzTooltipTitle",n.isCollapsed?"Notification":""),d.Eb(4),d.rc("nzTooltipTitle",n.isCollapsed?"Add File":""),d.Eb(4),d.rc("nzTooltipTitle",n.isCollapsed?"Message":""),d.Eb(4),d.rc("nzTooltipTitle",n.isCollapsed?"Birthday":""),d.Eb(4),d.rc("nzTooltipTitle",n.isCollapsed?"FamilyMembers":""),d.Eb(1),d.rc("ngStyle",d.tc(14,m)))},directives:[c.b,c.a,c.d,g.c,s.a,g.d,b.d,l.a,i.n],styles:['.floating-header[_ngcontent-%COMP%]{position:fixed;z-index:1000;width:100%}.h2-heading[_ngcontent-%COMP%]{font-size:45px;font-family:Playball,cursive;color:#d291bc!important}.paragraph[_ngcontent-%COMP%]{line-height:1.6;font-size:1.05em;font-weight:900;color:#fffc}.icon[_ngcontent-%COMP%]{width:60px;height:60px;margin:auto 4px}.groom-bride-main-content[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;background:#0000004d}.bride-groom-backgroud[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/twohearts/images/xbg_2.jpg.pagespeed.ic.Qk76_jKxrb.webp);background-size:cover;background-repeat:no-repeat;background-position:50%;background-attachment:fixed}.bride-groom-backgroud[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;background:#0000004d}.groom-bride-main-content[_ngcontent-%COMP%]{margin-top:64px;height:100vh;position:relative;z-index:1;background-image:url(https://preview.colorlib.com/theme/wedding2/images/slider-1-1600x900.jpg.webp);background-size:cover;color:#fff}.groom-content-table[_ngcontent-%COMP%]{text-align:center;display:table;height:100%;width:100%}.wedding-content[_ngcontent-%COMP%]{line-height:1;display:table-cell;vertical-align:middle}.wedding-date[_ngcontent-%COMP%]{font-size:1.5em;line-height:1.5;color:#fff}.wedding-person-save[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:3em;color:#fff}.wedding-person-name[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:9em;color:#fff;line-height:1}.wedding-info[_ngcontent-%COMP%]{font-size:14px;font-weight:900;text-transform:uppercase;color:#d291bc;letter-spacing:7px;position:relative;background:#fff;padding:8px 15px;border-radius:2px}.section[_ngcontent-%COMP%]{padding:70px 0}.story-area[_ngcontent-%COMP%], .story-area[_ngcontent-%COMP%]:after{position:relative;z-index:1;text-align:center}.story-area[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:.8;background:url(https://preview.colorlib.com/theme/wedding2/images/Background_Circle.png.webp)}.container[_ngcontent-%COMP%]{width:1140px;max-width:100%}.container[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px}.row[_ngcontent-%COMP%]{margin-right:-15px;margin-left:-15px;text-align:center;display:block;flex-wrap:wrap}.row-padding[_ngcontent-%COMP%]{padding-bottom:3rem!important}.story-heading[_ngcontent-%COMP%]{padding-bottom:20px}.story-title[_ngcontent-%COMP%]{font-size:3.5em;line-height:1.1;font-family:Playball,cursive;color:#fb1567}.heading-bottom[_ngcontent-%COMP%]{margin-top:10px;display:inline-block;width:210px;height:20px;line-height:20px;position:relative;font-size:3.5em}.heading-bottom[_ngcontent-%COMP%]:after{left:0}.heading-bottom[_ngcontent-%COMP%]:after, .heading-bottom[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;margin-top:-8.5px;height:1px;width:90px;background:#aaa}.heading-bottom[_ngcontent-%COMP%]:before{right:0}.bottom-icon[_ngcontent-%COMP%]{margin-bottom:0;color:#e45f74}.story-content[_ngcontent-%COMP%]{line-height:1.6;font-size:20px;font-weight:400;color:#555;font-family:Bitter,serif}.counter-area[_ngcontent-%COMP%]{position:relative;z-index:1;background-image:url(https://preview.colorlib.com/theme/wedding2/images/counter-1-1600x600.jpg.webp);background-size:cover;color:#fff}.counter-area[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;background:#0000004d}.counter-title[_ngcontent-%COMP%]{font-size:3.5em;line-height:1.1;font-family:Playball,cursive;color:#f9f9f9}.time[_ngcontent-%COMP%]{position:relative;display:inline-block;margin:0 20px 30px;height:120px;width:120px;padding-top:25px;border-radius:100px;border:1px solid #fff}.counter-timing[_ngcontent-%COMP%]{font-size:3em;line-height:1;display:block}.subheading[_ngcontent-%COMP%]{font-size:14px;margin-bottom:5px;text-transform:uppercase;color:#0000004d;color:#d291bc;letter-spacing:2px;font-weight:900;border:1px dashed #d291bc;display:inline-block;padding:0 10px}.subheading-content[_ngcontent-%COMP%]{line-height:1.2;font-size:100px;font-weight:400;font-family:Playball,cursive;color:#d291bc;margin-bottom:1rem!important}.bride-groom[_ngcontent-%COMP%]{width:100%;position:relative;z-index:0;padding:0;margin-bottom:80px}.fadeInUp[_ngcontent-%COMP%]{animation-name:fadeInUp}.ftco-animated[_ngcontent-%COMP%]{animation-duration:.5s;animation-fill-mode:both}.img[_ngcontent-%COMP%]{display:block;width:400px;height:400px;margin:0 auto;border:15px solid #f0d9e8}.order-md-last[_ngcontent-%COMP%]{order:13}.ml-md-5[_ngcontent-%COMP%]{margin-left:3rem!important}.groom-image[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/twohearts/images/xgroom.jpg.pagespeed.ic.6E8xz7uPat.webp)}.bridal-image[_ngcontent-%COMP%], .groom-image[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:50%}.bridal-image[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/twohearts/images/xbride.jpg.pagespeed.ic.J4_wf5Jvyl.webp)}.text[_ngcontent-%COMP%]{width:calc(100% - 400px);position:relative;padding-top:30px}.font-style[_ngcontent-%COMP%]{font-size:17px;line-height:1.8;font-weight:400;color:#999}.wedding-detail[_ngcontent-%COMP%]{overflow:hidden;position:relative}.wedding-detail[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:50%;margin-left:-.5px;width:2px;background:#d291bc}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:30px}.wedding-event-main[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/twohearts/images/xbg_2.jpg.pagespeed.ic.Qk76_jKxrb.webp);background-size:cover;background-repeat:no-repeat;background-position:50%;background-attachment:fixed}.wedding-event[_ngcontent-%COMP%]{width:50%;padding:0 50px;margin-bottom:30px;position:relative;clear:both;margin-top:-40px}.wedding-event[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;height:18px;width:18px;border-radius:20px;z-index:1;border:1px solid #aaa;background:#fff}.right[_ngcontent-%COMP%]{text-align:left;float:right}.right[_ngcontent-%COMP%]:after{left:0;margin-left:-9px}.left[_ngcontent-%COMP%]{text-align:right;float:left}.left[_ngcontent-%COMP%]:after{right:0;margin-right:-9px}.wedding-event-title[_ngcontent-%COMP%]{margin:10px 0;font-size:2em;font-family:Playball,cursive;color:#fff}.wedding-event[_ngcontent-%COMP%]:first-child{margin-top:0}.wedding-event[_ngcontent-%COMP%]:last-child{margin-bottom:0}.icon-ciurclke[_ngcontent-%COMP%]:before{content:"\\65"}.wedding-event-inner[_ngcontent-%COMP%]{position:relative;z-index:0;background:#d291bc;padding:16px;box-shadow:0 10px 32px -19px #0000005c}.wedding-event-inner[_ngcontent-%COMP%]:before{transform:rotate(-1deg)}.wedding-event-inner[_ngcontent-%COMP%]:after, .wedding-event-inner[_ngcontent-%COMP%]:before{position:absolute;top:8px;left:5px;right:5px;bottom:8px;content:"";border:1px dashed #ffffff80;z-index:-1}.wedding-event-inner[_ngcontent-%COMP%]:after{transform:rotate(1deg)}.wedding-event-time[_ngcontent-%COMP%]{margin:10px 0;font-size:1.5em;font-family:Playball,cursive;color:#fff}.galary_item[_ngcontent-%COMP%]{height:253px;width:calc(33.33% - 15px);margin-right:15px;margin-bottom:15px;float:left;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;z-index:1}.set-background[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-position:top}.side-menu-wrapper[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.side-menu[_ngcontent-%COMP%]{position:fixed;margin-top:64px;display:none}.side-menu[_ngcontent-%COMP%], .side-menu-layout[_ngcontent-%COMP%]{height:100%}.navigation-button-position-prev[_ngcontent-%COMP%]{margin-left:10%}.navigation-button-position-next[_ngcontent-%COMP%]{margin-right:10%}.side-panel-main[_ngcontent-%COMP%]{height:95vh}.collapse-button-top[_ngcontent-%COMP%]{top:0;left:0}.dynamic-container[_ngcontent-%COMP%]{width:100%}.scrollspy-example[_ngcontent-%COMP%]{position:relative;height:200px;margin-top:.5rem;overflow:auto}[nz-carousel-content][_ngcontent-%COMP%]{text-align:center;background:#364d79;overflow:hidden}[nz-carousel-content][_ngcontent-%COMP%], img[_ngcontent-%COMP%]{color:#fff;-webkit-user-select:none;user-select:none}img[_ngcontent-%COMP%]{margin-bottom:0}.background-image[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:50%;background-image:url(image-1.5236f4ed5acf0e48c569.jpg);background-size:cover}.second-carousle-class[_ngcontent-%COMP%]{padding-top:24px}.invitation-content-main[_ngcontent-%COMP%]{padding-top:0;font-family:Bitter,serif;-webkit-user-select:none;user-select:none}.invitation-content-area[_ngcontent-%COMP%]{padding:16px 32px 32px;border-right:1px solid #f1f1f1}.carousle-image-height[_ngcontent-%COMP%]{height:600px;display:block;margin-left:auto;margin-right:auto;width:60%}.timer[_ngcontent-%COMP%]{margin-top:64px;text-align:center;font-family:Arial,sans-serif;font-size:1.4em;letter-spacing:-1px}.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2em;margin:0 3px 0 15px}@media screen and (max-width:728px){.wedding-person-save[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:2em;color:#fff}.wedding-person-name[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:5em;color:#fff;line-height:1}.row-padding[_ngcontent-%COMP%]{padding-bottom:0!important}.wedding-info[_ngcontent-%COMP%]{font-size:7px}.section[_ngcontent-%COMP%]{padding:30px 0}.story-heading[_ngcontent-%COMP%]{padding-bottom:0}.story-content[_ngcontent-%COMP%]{line-height:1.6;font-size:16px;font-weight:400;color:#555;font-family:Bitter,serif}.subheading-content[_ngcontent-%COMP%]{line-height:1.2;font-size:50px;font-weight:400;font-family:Playball,cursive;color:#d291bc;margin-bottom:1rem!important}.img[_ngcontent-%COMP%]{display:block;width:100%;height:400px;margin:0 auto;border:15px solid #f0d9e8}.ml-md-5[_ngcontent-%COMP%]{margin-left:0!important}.text[_ngcontent-%COMP%]{width:100%;padding-top:10px;text-align:center}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{text-align:left;float:none}.wedding-event-main[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/wed/assets/img/gallery/xstory1.jpg.pagespeed.ic.jH3duhP_fP.webp);background-size:cover;background-repeat:no-repeat;background-position:50%;background-attachment:fixed}.wedding-detail[_ngcontent-%COMP%]:after{left:0;margin-left:0}.wedding-detail[_ngcontent-%COMP%]{margin-left:15px;overflow:visible}.wedding-event[_ngcontent-%COMP%]{width:100%;padding:0 0 0 30px;margin:0 0 30px}.left[_ngcontent-%COMP%]:after{right:0;margin-right:-9px;left:0;margin-left:-9px}.bride-groom[_ngcontent-%COMP%]{width:100%;position:relative;z-index:0;padding:0;margin-bottom:0}.galary_item[_ngcontent-%COMP%]{width:calc(105% - 15px)}.invitation-content-main[_ngcontent-%COMP%]{padding-top:0;margin-left:0;-webkit-user-select:none;user-select:none}.invitation-content-area[_ngcontent-%COMP%]{padding:16px 10px;border-right:1px solid #f1f1f1}.carousle-image-height[_ngcontent-%COMP%]{height:300px;display:block;margin-left:auto;margin-right:auto;width:100%}.side-menu[_ngcontent-%COMP%]{position:fixed;margin-top:64px;height:100%;display:block;z-index:1000}.navigation-button-position-prev[_ngcontent-%COMP%]{margin-left:auto}.navigation-button-position-next[_ngcontent-%COMP%]{margin-right:auto}}']}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.Qb({type:e}),e.\u0275inj=d.Pb({imports:[[o.g.forChild(h)],o.g]}),e})();var u=t("3+2o");let v=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.Qb({type:e}),e.\u0275inj=d.Pb({imports:[[i.c,f,u.a]]}),e})()}}]);
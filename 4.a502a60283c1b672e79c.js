(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomeModule",function(){return y});var i=t("ofXK"),o=t("bhfF"),r=t("tyNb"),a=t("Etcd"),c=t("l5mm"),d=t("fXoL"),g=t("yW9e");let s=(()=>{class e{constructor(e){this._el=e,this.spiedTags=[],this.sectionChange=new d.o}onScroll(e){let n;const t=document.getElementById("invitation-content").children,i=e.target.scrollingElement.scrollTop+40,o=e.target.scrollingElement.offsetTop;for(let r=0;r<t.length;r++){const e=t[r];this.spiedTags.some(n=>n===e.tagName)&&e.offsetTop-o<=i&&(n=e.id)}n!==this.currentSection&&(this.currentSection=n,this.sectionChange.emit(this.currentSection))}}return e.\u0275fac=function(n){return new(n||e)(d.Sb(d.l))},e.\u0275dir=d.Nb({type:e,selectors:[["","scrollSpy",""]],hostBindings:function(e,n){1&e&&d.fc("scroll",function(e){return n.onScroll(e)},!1,d.Dc)},inputs:{spiedTags:"spiedTags"},outputs:{sectionChange:"sectionChange"}}),e})();var l=t("Q8cG"),b=t("C2AL"),p=t("nJia"),m=t("FwiY");const h=["invitation-content"],f=["homeComponent"],u=["sideMenuParent"];function v(e,n){if(1&e&&(d.Yb(0,"div",84),d.Yb(1,"div",85),d.Tb(2,"div",86),d.Yb(3,"div",87),d.Yb(4,"h3",88),d.Oc(5),d.Xb(),d.Yb(6,"span"),d.Oc(7),d.Xb(),d.Xb(),d.Xb(),d.Xb()),2&e){const e=d.jc().$implicit;d.Eb(2),d.Jc("background-image","url("+e.img+")"),d.Eb(3),d.Pc(e.name),d.Eb(2),d.Pc(e.relationShip)}}function O(e,n){if(1&e&&(d.Wb(0),d.Mc(1,v,8,4,"ng-template",83),d.Vb()),2&e){const e=n.$implicit;d.Eb(1),d.rc("id",e.id)}}const w=function(){return["SECTION"]},x=function(){return{color:"#6bb8ff"}},C=[{path:"",component:(()=>{class e{constructor(e){this.renderer=e,this.isCollapsed=!1,this.ready=!0,this.currentSection="home",this.dateNow=new Date,this.dDay=new Date("Nov 1 2021 00:00:00"),this.milliSecondsInASecond=1e3,this.hoursInADay=24,this.minutesInAnHour=60,this.SecondsInAMinute=60,this.customOptions={loop:!0,autoplay:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!0,navSpeed:700,navText:["",""],autoplayTimeout:2e3,responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!1},this.peoplesDetail=[{id:1,img:"https://preview.colorlib.com/theme/twohearts/images/xgroom.jpg.pagespeed.ic.6E8xz7uPat.webp",name:"People Name",relationShip:"Relation"},{id:2,img:"https://preview.colorlib.com/theme/twohearts/images/xbride.jpg.pagespeed.ic.J4_wf5Jvyl.webp",name:"People Name",relationShip:"Relation"},{id:3,img:"https://preview.colorlib.com/theme/weddingdreams/img/features/feature-1.jpg.webp",name:"People Name",relationShip:"Relation"},{id:4,img:"https://preview.colorlib.com/theme/twohearts/images/xbride.jpg.pagespeed.ic.J4_wf5Jvyl.webp",name:"People Name",relationShip:"Relation"},{id:5,img:"https://preview.colorlib.com/theme/twohearts/images/xgroom.jpg.pagespeed.ic.6E8xz7uPat.webp",name:"People Name",relationShip:"Relation"},{id:6,img:"https://preview.colorlib.com/theme/weddingdreams/img/features/feature-1.jpg.webp",name:"People Name",relationShip:"Relation"}],this.getTimeDifference(),this.renderer.listen("window","click",e=>{e.target===this.invitationContent.nativeElement&&(this.isCollapsed=!0)})}getTimeDifference(){this.timeDifference=this.dDay.getTime()-(new Date).getTime(),this.allocateTimeUnits(this.timeDifference)}allocateTimeUnits(e){this.secondsToDday=Math.floor(e/this.milliSecondsInASecond%this.SecondsInAMinute),this.minutesToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour)%this.SecondsInAMinute),this.hoursToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute)%this.hoursInADay),this.daysToDday=Math.floor(e/(this.milliSecondsInASecond*this.minutesInAnHour*this.SecondsInAMinute*this.hoursInADay))}ngOnInit(){const e=Object(c.a)(500);this.subscription=e.subscribe(e=>this.addDotBackground())}addDotBackground(){for(var e=document.getElementsByClassName("owl-dot"),n=0;n<e.length;n++)e[n].classList.contains("active")?e[n].firstElementChild.setAttribute("Style"," background: #d291bc;"):e[n].firstElementChild.setAttribute("Style"," background: #e6e6e6;")}ngOnDestroy(){}ngAfterViewInit(){this.homeComponent.first.elementRef.nativeElement.querySelector("nz-sider").children[1].setAttribute("Style","top: 12px;left: 8px;position: fixed;border-radius: 8px"),this.ready=!0}onClickSideMenuButton(){this.isCollapsed=!1;for(var e=document.getElementsByClassName("ant-menu-item"),n=0;n<e.length;n++)e[n].setAttribute("style"," padding-left:0px;")}onSectionChange(e){this.currentSection=e}scrollTo(e){this.isCollapsed=!0,document.querySelector("#"+e).scrollIntoView()}}return e.\u0275fac=function(n){return new(n||e)(d.Sb(d.G))},e.\u0275cmp=d.Mb({type:e,selectors:[["app-home"]],viewQuery:function(e,n){if(1&e&&(d.Sc(h,1),d.Sc(f,1),d.Sc(u,1)),2&e){let e;d.Ac(e=d.gc())&&(n.invitationContent=e.first),d.Ac(e=d.gc())&&(n.homeComponent=e),d.Ac(e=d.gc())&&(n.sideMenuParent=e)}},features:[d.Db([{provide:a.a,useValue:[{name:"transform-no-loop",strategy:a.d},{name:"flip",strategy:a.b}]}])],decls:217,vars:25,consts:[[1,""],[1,"floating-header"],["id","parentDiv","scrollSpy","",1,"",3,"spiedTags","sectionChange"],["homeComponent",""],["id","invitation-content",1,"invitation-content-main"],["id","home",1,"main-slider"],[1,"groom-bride-main-content"],[1,"groom-content-table"],[1,"wedding-content"],[1,"small-icon","icon","icon-tie"],[1,"wedding-date"],[1,"wedding-person-save"],[1,"wedding-person-name"],[1,"wedding-info"],["id","our-story",1,"section","story-area"],[1,"container"],[1,"row"],[1,"column"],[1,"story-heading"],[1,"story-title"],[1,"heading-bottom"],[1,"bottom-icon"],[1,"story-content"],["id","wedding-countdown",1,"section","counter-area"],[1,"colummn"],[1,"counter-title"],[1,"remaining-time"],[1,"clock"],[1,"time"],["id","days",1,"counter-timing"],["id","hours",1,"counter-timing"],["id","minutes",1,"counter-timing"],["id","seconds",1,"counter-timing"],["id","groom-bride",1,"section","groom-bride-area"],[1,"row","row-padding"],[1,"subheading"],[1,"subheading-content"],[1,"coulumn"],[1,"bride-groom","ftco-animate","d-md-flex","fadeInUp","ftco-animated"],[1,"img","order-md-last","ml-md-5","groom-image"],[1,"text","text-md-right","pl-md-5","mr-md-5","font-style"],[1,"h2-heading"],[1,"h1-heading"],[1,"dove-icon","icon-right"],["src","assets/icons/doves.png",1,"icon-size"],[1,"img","ml-md-5","bridal-image"],[1,"dove-icon","icon-left"],["id","event-timeline",1,"wedding-event-main"],[1,"story-title",2,"color","rgb(251 21 103)"],[1,"wedding-detail"],[1,"wedding-event","right"],[1,"wedding-event-inner"],["src","assets/icons/wedding-rings.png",1,"icon"],[1,"wedding-event-time"],[1,"wedding-event-title"],[1,"paragraph"],[1,"wedding-event","left"],["src","assets/icons/dish.png",1,"icon"],["src","assets/icons/wedding-cake.png",1,"icon"],["src","assets/icons/tripod.png",1,"icon"],["id","gallery",1,"section","background"],[1,"photo-gallery-title"],[1,"photos-container"],["data-setbg","img/features/feature-1.jpg",1,"galary_item","photography","set-background",2,"background-image",'url("https://preview.colorlib.com/theme/weddingdreams/img/features/feature-1.jpg.webp")',"left","0%","top","0px"],[1,"fg__item__text"],["id","bridesmaid-groomsmen",1,"section","background"],[3,"options"],[4,"ngFor","ngForOf"],["id","location",1,"section","background",2,"padding-top","0px"],[1,"container","map-room"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4427.649764897973!2d78.09916491513196!3d11.584368991776424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM1JzAzLjciTiA3OMKwMDYnMDQuOSJF!5e1!3m2!1sen!2sin!4v1634740923091!5m2!1sen!2sin","allowfullscreen","","loading","lazy",1,"map-container",2,"border","0"],[1,"side-menu"],["id","sideMenuParent",1,"side-menu-layout"],["id","side-nav-bar","nzCollapsible","","nzBreakpoint","lg","nzTheme","dark",1,"side-menu-wrapper",3,"nzCollapsedWidth","nzWidth","nzCollapsed","nzCollapsedChange"],["nz-menu","","nzMode","inline","nzTheme","dark",1,"side-panel-main"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right",3,"nzSelected","click"],["nz-icon","","nzType","home","nzTheme","twotone",2,"font-size","16px"],[1,"side-menu-conent"],["nz-icon","","nzType","bell","nzTheme","twotone"],["nz-icon","","nzType","file-add","nzTheme","twotone"],["nz-icon","","nzType","message","nzTheme","twotone"],["nz-icon","","nzType","gift","nzTheme","twotone"],["nz-icon","","nzType","usergroup-add","nzTheme","outline",3,"ngStyle"],["carouselSlide","",3,"id"],[1,"item"],[1,"people","text-center"],[1,"people-img"],[1,"relation-details"],[1,"h3-heading"]],template:function(e,n){1&e&&(d.Yb(0,"nz-layout",0),d.Yb(1,"div",1),d.Tb(2,"nz-header"),d.Xb(),d.Yb(3,"nz-layout",2,3),d.fc("sectionChange",function(e){return n.onSectionChange(e)}),d.Yb(5,"div",4),d.Yb(6,"section",5),d.Yb(7,"div",6),d.Yb(8,"div",7),d.Yb(9,"div",8),d.Tb(10,"i",9),d.Yb(11,"h5",10),d.Oc(12," 23 SETPEMBER 2017"),d.Xb(),d.Yb(13,"h3",11),d.Oc(14," Save The Date"),d.Xb(),d.Yb(15,"h1",12),d.Oc(16,"Bride Name &"),d.Xb(),d.Yb(17,"h1",12),d.Oc(18,"Groom Name"),d.Xb(),d.Yb(19,"span",13),d.Oc(20,"Are Getting Married"),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(21,"section",14),d.Yb(22,"div",15),d.Yb(23,"div",16),d.Yb(24,"div",17),d.Yb(25,"div",18),d.Yb(26,"h2",19),d.Oc(27,"Our Story"),d.Xb(),d.Yb(28,"span",20),d.Yb(29,"p",21),d.Oc(30,"*"),d.Xb(),d.Xb(),d.Xb(),d.Yb(31,"div",22),d.Yb(32,"p"),d.Oc(33," Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet. "),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(34,"section",23),d.Yb(35,"div",15),d.Yb(36,"div",16),d.Yb(37,"div",24),d.Yb(38,"div",18),d.Yb(39,"h2",25),d.Oc(40,"Don't miss it"),d.Xb(),d.Yb(41,"span",20),d.Yb(42,"p"),d.Oc(43,"*"),d.Xb(),d.Xb(),d.Xb(),d.Yb(44,"div",26),d.Yb(45,"div",27),d.Yb(46,"div",28),d.Yb(47,"span",29),d.Oc(48),d.Xb(),d.Oc(49,"Days "),d.Xb(),d.Yb(50,"div",28),d.Yb(51,"span",30),d.Oc(52),d.Xb(),d.Oc(53,"Hours "),d.Xb(),d.Yb(54,"div",28),d.Yb(55,"span",31),d.Oc(56),d.Xb(),d.Oc(57,"Minutes "),d.Xb(),d.Yb(58,"div",28),d.Yb(59,"span",32),d.Oc(60),d.Xb(),d.Oc(61,"Seconds "),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(62,"section",33),d.Yb(63,"div",15),d.Yb(64,"div",34),d.Yb(65,"div",17),d.Yb(66,"span",35),d.Oc(67,"About Bride & Groom"),d.Xb(),d.Yb(68,"h2",36),d.Oc(69,"Bride & Groom"),d.Xb(),d.Xb(),d.Xb(),d.Yb(70,"div",16),d.Yb(71,"div",37),d.Yb(72,"div",38),d.Tb(73,"div",39),d.Yb(74,"div",40),d.Yb(75,"h2",41),d.Oc(76,"Bride Name"),d.Xb(),d.Yb(77,"h1",42),d.Oc(78,"B.Tech(Information Technology)"),d.Xb(),d.Yb(79,"p"),d.Oc(80,"Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same.."),d.Xb(),d.Yb(81,"div",43),d.Tb(82,"img",44),d.Xb(),d.Xb(),d.Xb(),d.Yb(83,"div",38),d.Tb(84,"div",45),d.Yb(85,"div",40),d.Yb(86,"h2",41),d.Oc(87,"Groom Name"),d.Xb(),d.Yb(88,"h1",42),d.Oc(89,"B.Tech(Information Technology)"),d.Xb(),d.Yb(90,"p"),d.Oc(91,"A hundred hearts would be too few to carry all my love for you."),d.Xb(),d.Yb(92,"div",46),d.Tb(93,"img",44),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Tb(94,"div",17),d.Xb(),d.Xb(),d.Xb(),d.Yb(95,"section",47),d.Yb(96,"div",15),d.Yb(97,"div",16),d.Yb(98,"div",17),d.Yb(99,"div",18),d.Yb(100,"h2",48),d.Oc(101,"Wedding Details"),d.Xb(),d.Yb(102,"span",20),d.Yb(103,"p",21),d.Oc(104,"*"),d.Xb(),d.Xb(),d.Xb(),d.Yb(105,"div",49),d.Yb(106,"div",50),d.Yb(107,"div",51),d.Tb(108,"img",52),d.Yb(109,"h1",53),d.Oc(110,"7.30 am"),d.Xb(),d.Yb(111,"h4",54),d.Oc(112,"Ceremony"),d.Xb(),d.Yb(113,"p",55),d.Oc(114,"The beauty of marriage is not always seen from the very beginning but rather as love grows and develop over time"),d.Xb(),d.Xb(),d.Xb(),d.Yb(115,"div",56),d.Yb(116,"div",51),d.Tb(117,"img",57),d.Yb(118,"h1",53),d.Oc(119,"7.30 am"),d.Xb(),d.Yb(120,"h4",54),d.Oc(121,"Toast & Dinner"),d.Xb(),d.Yb(122,"p",55),d.Oc(123,"Life\u2019s short, drink lots of coffee \xa0 All happiness depends on a leisurely breakfast."),d.Xb(),d.Xb(),d.Xb(),d.Yb(124,"div",50),d.Yb(125,"div",51),d.Tb(126,"img",58),d.Yb(127,"h1",53),d.Oc(128,"7.30 am"),d.Xb(),d.Yb(129,"h4",54),d.Oc(130,"Wedding Cake"),d.Xb(),d.Yb(131,"p",55),d.Oc(132,"Cakes are special. Every celebration ends with something sweet, a cake, and people remember. It\u2019s all about the memories."),d.Xb(),d.Xb(),d.Xb(),d.Yb(133,"div",56),d.Yb(134,"div",51),d.Tb(135,"img",59),d.Yb(136,"h1",53),d.Oc(137,"7.30 am"),d.Xb(),d.Yb(138,"h4",54),d.Oc(139,"Photography"),d.Xb(),d.Yb(140,"p",55),d.Oc(141,"Once you learn to care, you can record images with your mind or on film. There is no difference between the two."),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(142,"section",60),d.Yb(143,"div",15),d.Yb(144,"div",16),d.Yb(145,"div",17),d.Yb(146,"div",61),d.Yb(147,"h2",19),d.Oc(148,"Our Photo Galarry"),d.Xb(),d.Yb(149,"span",20),d.Yb(150,"p",21),d.Oc(151,"*"),d.Xb(),d.Xb(),d.Xb(),d.Yb(152,"div",62),d.Yb(153,"div",63),d.Tb(154,"div",64),d.Xb(),d.Yb(155,"div",63),d.Tb(156,"div",64),d.Xb(),d.Yb(157,"div",63),d.Tb(158,"div",64),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(159,"section",65),d.Yb(160,"div",15),d.Yb(161,"div",16),d.Yb(162,"div",17),d.Yb(163,"span",35),d.Oc(164,"Bridesmaid & Groomsmen"),d.Xb(),d.Yb(165,"h2",36),d.Oc(166,"Family & Friends"),d.Xb(),d.Yb(167,"owl-carousel-o",66),d.Mc(168,O,2,1,"ng-container",67),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(169,"section",68),d.Yb(170,"div",69),d.Yb(171,"div",16),d.Yb(172,"div",17),d.Yb(173,"div",18),d.Yb(174,"h2",19),d.Oc(175,"Where & When"),d.Xb(),d.Yb(176,"span",20),d.Yb(177,"p",21),d.Oc(178,"*"),d.Xb(),d.Xb(),d.Xb(),d.Tb(179,"iframe",70),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Yb(180,"div",71),d.Yb(181,"nz-layout",72),d.Yb(182,"nz-sider",73),d.fc("nzCollapsedChange",function(){return n.onClickSideMenuButton()}),d.Yb(183,"div"),d.Yb(184,"ul",74),d.Yb(185,"li",75),d.fc("click",function(){return n.scrollTo("home")}),d.Tb(186,"i",76),d.Yb(187,"span",77),d.Oc(188,"Home"),d.Xb(),d.Xb(),d.Yb(189,"li",75),d.fc("click",function(){return n.scrollTo("our-story")}),d.Tb(190,"i",78),d.Yb(191,"span",77),d.Oc(192,"Our Story"),d.Xb(),d.Xb(),d.Yb(193,"li",75),d.fc("click",function(){return n.scrollTo("wedding-countdown")}),d.Tb(194,"i",79),d.Yb(195,"span",77),d.Oc(196,"Wedding CountDown"),d.Xb(),d.Xb(),d.Yb(197,"li",75),d.fc("click",function(){return n.scrollTo("groom-bride")}),d.Tb(198,"i",80),d.Yb(199,"span",77),d.Oc(200,"Grooom & Bride"),d.Xb(),d.Xb(),d.Yb(201,"li",75),d.fc("click",function(){return n.scrollTo("event-timeline")}),d.Tb(202,"i",81),d.Yb(203,"span",77),d.Oc(204,"Event TimeLine"),d.Xb(),d.Xb(),d.Yb(205,"li",75),d.fc("click",function(){return n.scrollTo("gallery")}),d.Tb(206,"i",82),d.Yb(207,"span",77),d.Oc(208,"Gallery"),d.Xb(),d.Xb(),d.Yb(209,"li",75),d.fc("click",function(){return n.scrollTo("bridesmaid-groomsmen")}),d.Tb(210,"i",82),d.Yb(211,"span",77),d.Oc(212,"Bridesmaid & Groomsmen"),d.Xb(),d.Xb(),d.Yb(213,"li",75),d.fc("click",function(){return n.scrollTo("location")}),d.Tb(214,"i",82),d.Yb(215,"span",77),d.Oc(216,"Location"),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb(),d.Xb()),2&e&&(d.Eb(3),d.rc("spiedTags",d.tc(21,w)),d.Eb(45),d.Qc(" ",n.daysToDday," "),d.Eb(4),d.Qc(" ",n.hoursToDday," "),d.Eb(4),d.Qc(" ",n.minutesToDday," "),d.Eb(4),d.Qc(" ",n.secondsToDday," "),d.Eb(107),d.rc("options",n.customOptions),d.Eb(1),d.rc("ngForOf",n.peoplesDetail),d.Eb(14),d.rc("nzCollapsedWidth",0)("nzWidth",210)("nzCollapsed",n.isCollapsed),d.Eb(3),d.rc("nzSelected","home"===n.currentSection||null==n.currentSection),d.Eb(4),d.rc("nzSelected","our-story"===n.currentSection),d.Eb(4),d.rc("nzSelected","wedding-countdown"===n.currentSection),d.Eb(4),d.rc("nzSelected","groom-bride"===n.currentSection),d.Eb(4),d.rc("nzSelected","event-timeline"===n.currentSection),d.Eb(4),d.rc("nzSelected","gallery"===n.currentSection),d.Eb(1),d.rc("ngStyle",d.tc(22,x)),d.Eb(3),d.rc("nzSelected","bridesmaid-groomsmen"===n.currentSection),d.Eb(1),d.rc("ngStyle",d.tc(23,x)),d.Eb(3),d.rc("nzSelected","location"===n.currentSection),d.Eb(1),d.rc("ngStyle",d.tc(24,x)))},directives:[g.b,g.a,s,o.a,i.l,g.d,l.c,b.a,l.d,p.d,m.a,i.n,o.c],styles:['.floating-header[_ngcontent-%COMP%]{position:fixed;z-index:1000;width:100%}.h2-heading[_ngcontent-%COMP%]{font-size:45px}.h1-heading[_ngcontent-%COMP%], .h2-heading[_ngcontent-%COMP%]{font-family:Playball,cursive;color:#d291bc!important}.h1-heading[_ngcontent-%COMP%]{font-size:20px}.h3-heading[_ngcontent-%COMP%]{font-size:30px;font-family:Playball,cursive;color:#d291bc!important}.paragraph[_ngcontent-%COMP%]{line-height:1.6;font-size:1.05em;font-weight:900;color:#fffc}.icon[_ngcontent-%COMP%]{width:60px;height:60px;margin:auto 4px}.groom-bride-main-content[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;background:#0000004d}.bride-groom-backgroud[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/twohearts/images/xbg_2.jpg.pagespeed.ic.Qk76_jKxrb.webp);background-size:cover;background-repeat:no-repeat;background-position:50%;background-attachment:fixed}.bride-groom-backgroud[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;background:#0000004d}.groom-bride-main-content[_ngcontent-%COMP%]{margin-top:64px;height:100vh;position:relative;z-index:1;background-image:url(https://preview.colorlib.com/theme/wedding2/images/slider-1-1600x900.jpg.webp);background-size:cover;color:#fff}.groom-content-table[_ngcontent-%COMP%]{text-align:center;display:table;height:100%;width:100%}.wedding-content[_ngcontent-%COMP%]{line-height:1;display:table-cell;vertical-align:middle}.wedding-date[_ngcontent-%COMP%]{font-size:1.5em;line-height:1.5;color:#fff}.wedding-person-save[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:3em;color:#fff}.wedding-person-name[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:9em;color:#fff;line-height:1}.wedding-info[_ngcontent-%COMP%]{font-size:14px;font-weight:900;text-transform:uppercase;color:#d291bc;letter-spacing:7px;position:relative;background:#fff;padding:8px 15px;border-radius:2px}.section[_ngcontent-%COMP%]{padding:70px 0}.story-area[_ngcontent-%COMP%], .story-area[_ngcontent-%COMP%]:after{position:relative;z-index:1;text-align:center}.story-area[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;opacity:.8;background:url(https://preview.colorlib.com/theme/wedding2/images/Background_Circle.png.webp)}.container[_ngcontent-%COMP%]{width:1140px;max-width:100%}.container[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{padding-right:15px;padding-left:15px}.row[_ngcontent-%COMP%]{margin-right:-15px;margin-left:-15px;text-align:center;display:block;flex-wrap:wrap}.row-padding[_ngcontent-%COMP%]{padding-bottom:3rem!important}.story-heading[_ngcontent-%COMP%]{padding-bottom:20px}.story-title[_ngcontent-%COMP%]{font-size:3.5em;line-height:1.1;font-family:Playball,cursive;color:#d291bc;font-weight:900}.heading-bottom[_ngcontent-%COMP%]{margin-top:10px;display:inline-block;width:210px;height:20px;line-height:20px;position:relative;font-size:3.5em}.heading-bottom[_ngcontent-%COMP%]:after{left:0}.heading-bottom[_ngcontent-%COMP%]:after, .heading-bottom[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;margin-top:-8.5px;height:1px;width:90px;background:#aaa}.heading-bottom[_ngcontent-%COMP%]:before{right:0}.bottom-icon[_ngcontent-%COMP%]{margin-bottom:0;color:#fb1567}.story-content[_ngcontent-%COMP%]{line-height:1.6;font-size:20px;font-weight:400;color:#555;font-family:Bitter,serif}.counter-area[_ngcontent-%COMP%]{position:relative;z-index:1;background-image:url(https://preview.colorlib.com/theme/wed/assets/img/hero/homeHero_1.jpg.webp);background-size:cover;color:#fff}.counter-area[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;background:#0000004d}.counter-title[_ngcontent-%COMP%]{font-size:3.5em;line-height:1.1;font-family:Playball,cursive;color:#f9f9f9}.time[_ngcontent-%COMP%]{position:relative;display:inline-block;margin:0 20px 30px;height:120px;width:120px;padding-top:25px;border-radius:100px;border:1px solid #fff}.counter-timing[_ngcontent-%COMP%]{font-size:3em;line-height:1;display:block}.subheading[_ngcontent-%COMP%]{font-size:14px;margin-bottom:5px;text-transform:uppercase;color:#0000004d;color:#d291bc;letter-spacing:2px;font-weight:900;border:1px dashed #d291bc;display:inline-block;padding:0 10px}.subheading-content[_ngcontent-%COMP%]{line-height:1.2;font-size:100px;font-weight:400;font-family:Playball,cursive;color:#d291bc;margin-bottom:1rem!important}.bride-groom[_ngcontent-%COMP%]{width:100%;position:relative;z-index:0;padding:0;margin-bottom:80px}.fadeInUp[_ngcontent-%COMP%]{animation-name:fadeInUp}.ftco-animated[_ngcontent-%COMP%]{animation-duration:.5s;animation-fill-mode:both}.img[_ngcontent-%COMP%]{display:block;width:400px;height:400px;margin:0 auto;border:15px solid #f0d9e8}.order-md-last[_ngcontent-%COMP%]{order:13}.ml-md-5[_ngcontent-%COMP%]{margin-left:3rem!important}.groom-image[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/twohearts/images/xgroom.jpg.pagespeed.ic.6E8xz7uPat.webp)}.bridal-image[_ngcontent-%COMP%], .groom-image[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;background-position:50%}.bridal-image[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/twohearts/images/xbride.jpg.pagespeed.ic.J4_wf5Jvyl.webp)}.text[_ngcontent-%COMP%]{width:calc(100% - 400px);position:relative;padding-top:30px}.font-style[_ngcontent-%COMP%]{font-size:17px;line-height:1.8;font-weight:400;color:#999}.groom-bride-area[_ngcontent-%COMP%]{background:url(https://preview.colorlib.com/theme/wedding2/images/Background_Circle.png.webp)}.dove-icon[_ngcontent-%COMP%]{bottom:0;position:absolute}.icon-right[_ngcontent-%COMP%]{right:0}.icon-left[_ngcontent-%COMP%]{left:0;margin-left:8rem}.icon-size[_ngcontent-%COMP%]{width:100px;height:100px}.wedding-detail[_ngcontent-%COMP%]{overflow:hidden;position:relative}.wedding-detail[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;bottom:0;left:50%;margin-left:-.5px;width:2px;background:#d291bc}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:30px}.wedding-event-main[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/wedding2/images/counter-1-1600x600.jpg.webp);background-size:cover;background-repeat:no-repeat;background-position:50%;background-attachment:fixed}.wedding-event[_ngcontent-%COMP%]{width:50%;padding:0 50px;margin-bottom:30px;position:relative;clear:both;margin-top:-40px}.wedding-event[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;height:18px;width:18px;border-radius:20px;z-index:1;border:1px solid #aaa;background:#fff}.right[_ngcontent-%COMP%]{text-align:left;float:right}.right[_ngcontent-%COMP%]:after{left:0;margin-left:-9px}.left[_ngcontent-%COMP%]{text-align:right;float:left}.left[_ngcontent-%COMP%]:after{right:0;margin-right:-9px}.wedding-event-title[_ngcontent-%COMP%]{margin:10px 0;font-size:2em;font-family:Playball,cursive;color:#fff}.wedding-event[_ngcontent-%COMP%]:first-child{margin-top:0}.wedding-event[_ngcontent-%COMP%]:last-child{margin-bottom:0}.icon-ciurclke[_ngcontent-%COMP%]:before{content:"\\65"}.wedding-event-inner[_ngcontent-%COMP%]{position:relative;z-index:0;background:#d291bc;padding:16px;box-shadow:0 10px 32px -19px #0000005c}.wedding-event-inner[_ngcontent-%COMP%]:before{transform:rotate(-1deg)}.wedding-event-inner[_ngcontent-%COMP%]:after, .wedding-event-inner[_ngcontent-%COMP%]:before{position:absolute;top:8px;left:5px;right:5px;bottom:8px;content:"";border:1px dashed #ffffff80;z-index:-1}.wedding-event-inner[_ngcontent-%COMP%]:after{transform:rotate(1deg)}.wedding-event-time[_ngcontent-%COMP%]{margin:10px 0;font-size:1.5em;font-family:Playball,cursive;color:#fff}.galary_item[_ngcontent-%COMP%]{height:253px;width:calc(33.33% - 15px);margin-right:15px;margin-bottom:15px;float:left;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;z-index:1}.set-background[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;background-position:top}.photo-gallery-title[_ngcontent-%COMP%]{padding-bottom:8px}.photos-container[_ngcontent-%COMP%]{display:inline-block;width:100%}.background[_ngcontent-%COMP%]{background:url(https://preview.colorlib.com/theme/wedding2/images/Background_Circle.png.webp)}.map-container[_ngcontent-%COMP%]{width:200%;height:500px}.map-room[_ngcontent-%COMP%]{margin:auto 0;min-width:100%}.people-img[_ngcontent-%COMP%]{width:200px;height:200px;background-size:cover;background-position:50%;background-repeat:no-repeat;border:15px solid #f0d9e8;margin:0 auto 20px}.active[_ngcontent-%COMP%]:first-child{background:#d291bc}.side-menu-wrapper[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.side-menu-conent[_ngcontent-%COMP%]{color:#000!important;font-size:11px;font-weight:600;text-transform:uppercase;font-family:Arial}.ant-menu-item-selected[_ngcontent-%COMP%]{background-color:#d291bc!important}.side-menu[_ngcontent-%COMP%]{position:fixed;margin-top:64px;display:none}.side-menu[_ngcontent-%COMP%], .side-menu-layout[_ngcontent-%COMP%]{height:100%}.navigation-button-position-prev[_ngcontent-%COMP%]{margin-left:10%}.navigation-button-position-next[_ngcontent-%COMP%]{margin-right:10%}.side-panel-main[_ngcontent-%COMP%]{height:95vh;background:#f0d9e8!important}.collapse-button-top[_ngcontent-%COMP%]{top:0;left:0}.dynamic-container[_ngcontent-%COMP%]{width:100%}.scrollspy-example[_ngcontent-%COMP%]{position:relative;height:200px;margin-top:.5rem;overflow:auto}[nz-carousel-content][_ngcontent-%COMP%]{text-align:center;background:#364d79;overflow:hidden}[nz-carousel-content][_ngcontent-%COMP%], img[_ngcontent-%COMP%]{color:#fff;-webkit-user-select:none;user-select:none}img[_ngcontent-%COMP%]{margin-bottom:0}.background-image[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:50%;background-image:url(image-1.5236f4ed5acf0e48c569.jpg);background-size:cover}.second-carousle-class[_ngcontent-%COMP%]{padding-top:24px}.invitation-content-main[_ngcontent-%COMP%]{padding-top:0;font-family:Bitter,serif;-webkit-user-select:none;user-select:none}.invitation-content-area[_ngcontent-%COMP%]{padding:16px 32px 32px;border-right:1px solid #f1f1f1}.carousle-image-height[_ngcontent-%COMP%]{height:600px;display:block;margin-left:auto;margin-right:auto;width:60%}.timer[_ngcontent-%COMP%]{margin-top:64px;text-align:center;font-family:Arial,sans-serif;font-size:1.4em;letter-spacing:-1px}.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2em;margin:0 3px 0 15px}@media screen and (max-width:728px){.wedding-person-save[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:2em;color:#fff}.story-title[_ngcontent-%COMP%]{font-size:2.5em}.wedding-person-name[_ngcontent-%COMP%]{font-family:Playball,cursive;font-size:5em;color:#fff;line-height:1}.row-padding[_ngcontent-%COMP%]{padding-bottom:0!important}.wedding-info[_ngcontent-%COMP%]{font-size:7px}.section[_ngcontent-%COMP%]{padding:30px 0}.story-heading[_ngcontent-%COMP%]{padding-bottom:0}.story-content[_ngcontent-%COMP%]{line-height:1.6;font-size:16px;font-weight:400;color:#555;font-family:Bitter,serif}.subheading-content[_ngcontent-%COMP%]{line-height:1.2;font-size:50px;font-weight:400;font-family:Playball,cursive;color:#d291bc;margin-bottom:1rem!important}.img[_ngcontent-%COMP%]{display:block;width:100%;height:400px;margin:0 auto;border:15px solid #f0d9e8}.ml-md-5[_ngcontent-%COMP%]{margin-left:0!important}.text[_ngcontent-%COMP%]{width:100%;padding-top:10px;text-align:center;margin-right:3rem!important}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{text-align:left;float:none}.dove-icon[_ngcontent-%COMP%]{bottom:0;position:unset}.icon-left[_ngcontent-%COMP%]{left:0;margin-left:0}.wedding-event-main[_ngcontent-%COMP%]{background-image:url(https://preview.colorlib.com/theme/wed/assets/img/gallery/xstory1.jpg.pagespeed.ic.jH3duhP_fP.webp);background-size:cover;background-repeat:no-repeat;background-position:50%;background-attachment:fixed}.wedding-detail[_ngcontent-%COMP%]:after{left:0;margin-left:0}.wedding-detail[_ngcontent-%COMP%]{margin-left:15px;overflow:visible}.wedding-event[_ngcontent-%COMP%]{width:100%;padding:0 0 0 30px;margin:0 0 30px}.left[_ngcontent-%COMP%]:after{right:0;margin-right:-9px;left:0;margin-left:-9px}.bride-groom[_ngcontent-%COMP%]{width:100%;position:relative;z-index:0;padding:0;margin-bottom:0}.galary_item[_ngcontent-%COMP%]{width:calc(105% - 15px)}.map-container[_ngcontent-%COMP%]{width:100%;height:400px}.invitation-content-main[_ngcontent-%COMP%]{padding-top:0;margin-left:0;-webkit-user-select:none;user-select:none}.invitation-content-area[_ngcontent-%COMP%]{padding:16px 10px;border-right:1px solid #f1f1f1}.carousle-image-height[_ngcontent-%COMP%]{height:300px;display:block;margin-left:auto;margin-right:auto;width:100%}.side-menu[_ngcontent-%COMP%]{position:fixed;margin-top:64px;height:100%;display:block;z-index:1000}.navigation-button-position-prev[_ngcontent-%COMP%]{margin-left:auto}.navigation-button-position-next[_ngcontent-%COMP%]{margin-right:auto}}']}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.Qb({type:e}),e.\u0275inj=d.Pb({imports:[[r.g.forChild(C)],r.g]}),e})();var M=t("3+2o");let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.Qb({type:e}),e.\u0275inj=d.Pb({imports:[[i.c,P,M.a,o.b]]}),e})()}}]);
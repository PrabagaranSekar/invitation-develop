(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/carousel */ "Etcd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _shared_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/scroll-spy-directive */ "pqxY");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");











const _c0 = ["invitation-content"];
const _c1 = ["homeComponent"];
const _c2 = ["sideMenuParent"];
function HomeComponent_ng_container_168_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const people_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", "url(" + people_r2.img + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](people_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](people_r2.relationShip);
} }
function HomeComponent_ng_container_168_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_container_168_ng_template_1_Template, 8, 4, "ng-template", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const people_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", people_r2.id);
} }
const _c3 = function () { return ["SECTION"]; };
const _c4 = function () { return { "color": "#6bb8ff" }; };
class HomeComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.isCollapsed = false;
        this.ready = true;
        this.currentSection = 'home';
        this.dateNow = new Date();
        this.dDay = new Date('Nov 1 2021 00:00:00');
        this.milliSecondsInASecond = 1000;
        this.hoursInADay = 24;
        this.minutesInAnHour = 60;
        this.SecondsInAMinute = 60;
        this.customOptions = {
            loop: true,
            autoplay: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            navText: ['', ''],
            autoplayTimeout: 2000,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: false
        };
        this.peoplesDetail = [
            { id: 1, img: "https://preview.colorlib.com/theme/twohearts/images/xgroom.jpg.pagespeed.ic.6E8xz7uPat.webp", name: "People Name", relationShip: "Relation" },
            { id: 2, img: "https://preview.colorlib.com/theme/twohearts/images/xbride.jpg.pagespeed.ic.J4_wf5Jvyl.webp", name: "People Name", relationShip: "Relation" },
            { id: 3, img: "https://preview.colorlib.com/theme/weddingdreams/img/features/feature-1.jpg.webp", name: "People Name", relationShip: "Relation" },
            { id: 4, img: "https://preview.colorlib.com/theme/twohearts/images/xbride.jpg.pagespeed.ic.J4_wf5Jvyl.webp", name: "People Name", relationShip: "Relation" },
            { id: 5, img: "https://preview.colorlib.com/theme/twohearts/images/xgroom.jpg.pagespeed.ic.6E8xz7uPat.webp", name: "People Name", relationShip: "Relation" },
            { id: 6, img: "https://preview.colorlib.com/theme/weddingdreams/img/features/feature-1.jpg.webp", name: "People Name", relationShip: "Relation" },
        ];
        this.renderer.listen('window', 'click', (e) => {
            if (e.target === this.invitationContent.nativeElement) {
                this.isCollapsed = true;
            }
        });
    }
    getTimeDifference() {
        this.timeDifference = this.dDay.getTime() - new Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }
    allocateTimeUnits(timeDifference) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    }
    ngOnInit() {
        const timeInteval = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(500);
        this.subscription = timeInteval.subscribe(val => this.addDotBackground());
    }
    addDotBackground() {
        var owlClass = document.getElementsByClassName("owl-dot");
        for (var i = 0; i < owlClass.length; i++) {
            if (owlClass[i].classList.contains('active')) {
                owlClass[i].firstElementChild.setAttribute("Style", " background: #d291bc;");
            }
            else {
                owlClass[i].firstElementChild.setAttribute("Style", " background: #e6e6e6;");
            }
        }
        //countdown check
        this.getTimeDifference();
    }
    ngOnDestroy() {
    }
    ngAfterViewInit() {
        this.homeComponent.first.elementRef.nativeElement.querySelector('nz-sider').children[1]
            .setAttribute("Style", "top: 12px;left: 8px;position: fixed;border-radius: 8px");
        this.ready = true;
    }
    onClickSideMenuButton() {
        this.isCollapsed = false;
        var sideMenuItems = document.getElementsByClassName("ant-menu-item");
        for (var i = 0; i < sideMenuItems.length; i++) {
            sideMenuItems[i].setAttribute("style", " padding-left:0px;");
        }
    }
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
    scrollTo(section) {
        this.isCollapsed = true;
        document.querySelector('#' + section)
            .scrollIntoView();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.invitationContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.homeComponent = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sideMenuParent = _t);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            {
                provide: ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_0__["NZ_CAROUSEL_CUSTOM_STRATEGIES"],
                useValue: [
                    { name: 'transform-no-loop', strategy: ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_0__["NzCarouselTransformNoLoopStrategy"] },
                    { name: 'flip', strategy: ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_0__["NzCarouselFlipStrategy"] }
                ]
            }
        ])], decls: 217, vars: 25, consts: [[1, ""], [1, "floating-header"], ["id", "parentDiv", "scrollSpy", "", 1, "", 3, "spiedTags", "sectionChange"], ["homeComponent", ""], ["id", "invitation-content", 1, "invitation-content-main"], ["id", "home", 1, "main-slider"], [1, "groom-bride-main-content"], [1, "groom-content-table"], [1, "wedding-content"], [1, "small-icon", "icon", "icon-tie"], [1, "wedding-date"], [1, "wedding-person-save"], [1, "wedding-person-name"], [1, "wedding-info"], ["id", "our-story", 1, "section", "story-area"], [1, "container"], [1, "row"], [1, "column"], [1, "story-heading"], [1, "story-title"], [1, "heading-bottom"], [1, "bottom-icon"], [1, "story-content"], ["id", "wedding-countdown", 1, "section", "counter-area"], [1, "colummn"], [1, "counter-title"], [1, "remaining-time"], [1, "clock"], [1, "time"], ["id", "days", 1, "counter-timing"], ["id", "hours", 1, "counter-timing"], ["id", "minutes", 1, "counter-timing"], ["id", "seconds", 1, "counter-timing"], ["id", "groom-bride", 1, "section", "groom-bride-area"], [1, "row", "row-padding"], [1, "subheading"], [1, "subheading-content"], [1, "coulumn"], [1, "bride-groom", "ftco-animate", "d-md-flex", "fadeInUp", "ftco-animated"], [1, "img", "order-md-last", "ml-md-5", "groom-image"], [1, "text", "text-md-right", "pl-md-5", "mr-md-5", "font-style"], [1, "h2-heading"], [1, "h1-heading"], [1, "dove-icon", "icon-right"], ["src", "assets/icons/doves.png", 1, "icon-size"], [1, "img", "ml-md-5", "bridal-image"], [1, "dove-icon", "icon-left"], ["id", "event-timeline", 1, "wedding-event-main"], [1, "story-title", 2, "color", "rgb(251 21 103)"], [1, "wedding-detail"], [1, "wedding-event", "right"], [1, "wedding-event-inner"], ["src", "assets/icons/wedding-rings.png", 1, "icon"], [1, "wedding-event-time"], [1, "wedding-event-title"], [1, "paragraph"], [1, "wedding-event", "left"], ["src", "assets/icons/dish.png", 1, "icon"], ["src", "assets/icons/wedding-cake.png", 1, "icon"], ["src", "assets/icons/tripod.png", 1, "icon"], ["id", "gallery", 1, "section", "background"], [1, "photo-gallery-title"], [1, "photos-container"], ["data-setbg", "img/features/feature-1.jpg", 1, "galary_item", "photography", "set-background", 2, "background-image", "url(\"https://preview.colorlib.com/theme/weddingdreams/img/features/feature-1.jpg.webp\")", "left", "0%", "top", "0px"], [1, "fg__item__text"], ["id", "bridesmaid-groomsmen", 1, "section", "background"], [3, "options"], [4, "ngFor", "ngForOf"], ["id", "location", 1, "section", "background", 2, "padding-top", "0px"], [1, "container", "map-room"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4427.649764897973!2d78.09916491513196!3d11.584368991776424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM1JzAzLjciTiA3OMKwMDYnMDQuOSJF!5e1!3m2!1sen!2sin!4v1634740923091!5m2!1sen!2sin", "allowfullscreen", "", "loading", "lazy", 1, "map-container", 2, "border", "0"], [1, "side-menu"], ["id", "sideMenuParent", 1, "side-menu-layout"], ["id", "side-nav-bar", "nzCollapsible", "", "nzBreakpoint", "lg", "nzTheme", "dark", 1, "side-menu-wrapper", 3, "nzCollapsedWidth", "nzWidth", "nzCollapsed", "nzCollapsedChange"], ["nz-menu", "", "nzMode", "inline", "nzTheme", "dark", 1, "side-panel-main"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", 3, "nzSelected", "click"], ["nz-icon", "", "nzType", "home", "nzTheme", "twotone", 2, "font-size", "16px"], [1, "side-menu-conent"], ["nz-icon", "", "nzType", "bell", "nzTheme", "twotone"], ["nz-icon", "", "nzType", "file-add", "nzTheme", "twotone"], ["nz-icon", "", "nzType", "message", "nzTheme", "twotone"], ["nz-icon", "", "nzType", "gift", "nzTheme", "twotone"], ["nz-icon", "", "nzType", "usergroup-add", "nzTheme", "outline", 3, "ngStyle"], ["carouselSlide", "", 3, "id"], [1, "item"], [1, "people", "text-center"], [1, "people-img"], [1, "relation-details"], [1, "h3-heading"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-layout", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sectionChange", function HomeComponent_Template_nz_layout_sectionChange_3_listener($event) { return ctx.onSectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " 23 SETPEMBER 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Save The Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Bride Name &");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Groom Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Are Getting Married");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Don't miss it");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Hours ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Minutes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Seconds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "About Bride & Groom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Bride & Groom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Bride Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "B.Tech(Information Technology)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same..");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Groom Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "B.Tech(Information Technology)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "A hundred hearts would be too few to carry all my love for you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "section", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h2", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Wedding Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "h1", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "7.30 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "h4", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Ceremony");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "The beauty of marriage is not always seen from the very beginning but rather as love grows and develop over time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h1", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "7.30 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "h4", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Toast & Dinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Life\u2019s short, drink lots of coffee \u00A0 All happiness depends on a leisurely breakfast.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "h1", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "7.30 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "h4", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Wedding Cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Cakes are special. Every celebration ends with something sweet, a cake, and people remember. It\u2019s all about the memories.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "h1", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "7.30 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "h4", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Photography");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Once you learn to care, you can record images with your mind or on film. There is no difference between the two.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Our Photo Galarry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "section", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Bridesmaid & Groomsmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Family & Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "owl-carousel-o", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](168, HomeComponent_ng_container_168_Template, 2, 1, "ng-container", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "section", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Where & When");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "iframe", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "nz-layout", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "nz-sider", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzCollapsedChange", function HomeComponent_Template_nz_sider_nzCollapsedChange_182_listener() { return ctx.onClickSideMenuButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "ul", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_185_listener() { return ctx.scrollTo("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_189_listener() { return ctx.scrollTo("our-story"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Our Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_193_listener() { return ctx.scrollTo("wedding-countdown"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Wedding CountDown");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_197_listener() { return ctx.scrollTo("groom-bride"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Grooom & Bride");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_201_listener() { return ctx.scrollTo("event-timeline"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Event TimeLine");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_205_listener() { return ctx.scrollTo("gallery"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_209_listener() { return ctx.scrollTo("bridesmaid-groomsmen"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Bridesmaid & Groomsmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_213_listener() { return ctx.scrollTo("location"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](216, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.daysToDday, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.hoursToDday, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.minutesToDday, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.secondsToDday, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.peoplesDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzCollapsedWidth", 0)("nzWidth", 210)("nzCollapsed", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "home" || ctx.currentSection == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "our-story");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "wedding-countdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "groom-bride");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "event-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "bridesmaid-groomsmen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelected", ctx.currentSection === "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c4));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzHeaderComponent"], _shared_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_4__["ScrollSpyDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzSiderComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuItemDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselSlideDirective"]], styles: [".floating-header[_ngcontent-%COMP%] {\r\n   position: fixed;\r\n    z-index: 1000;\r\n    width: 100%;\r\n}.h2-heading[_ngcontent-%COMP%]{\r\n  font-size: 45px;\r\n  font-family: 'Playball', cursive;\r\n  color: #d291bc !important;\r\n}.h1-heading[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  font-family: 'Playball', cursive;\r\n  color: #d291bc !important;\r\n}.h3-heading[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n  font-family: 'Playball', cursive;\r\n  color: #d291bc !important;\r\n}.paragraph[_ngcontent-%COMP%] {\r\n  line-height: 1.6;\r\n  font-size: 1.05em;\r\n  font-weight: 900;\r\n  color: rgba(255, 255, 255, 0.8);\r\n}.icon[_ngcontent-%COMP%]{\r\n  width: 60px;\r\n  height: 60px;\r\n  margin: auto 4px;\r\n}.groom-bride-main-content[_ngcontent-%COMP%]:after{\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    background: rgba(0,0,0,.35);\r\n}.bride-groom-backgroud[_ngcontent-%COMP%]{\r\n   background-image: url(https://preview.colorlib.com/theme/twohearts/images/xbg_2.jpg.pagespeed.ic.Qk76_jKxrb.webp);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n}.bride-groom-backgroud[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  background: rgba(0,0,0,.3);\r\n}.groom-bride-main-content[_ngcontent-%COMP%]{\r\n    margin-top: 64px;\r\n    height: 100vh;\r\n    position: relative;\r\n    z-index: 1;\r\n    background-image: url(https://preview.colorlib.com/theme/wedding2/images/slider-1-1600x900.jpg.webp);\r\n    background-size: cover;\r\n    color: #fff;\r\n}.groom-content-table[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    display: table;\r\n    height: 100%;\r\n    width: 100%;\r\n}.wedding-content[_ngcontent-%COMP%]{\r\n  line-height:1; \r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}.wedding-date[_ngcontent-%COMP%]{\r\n  font-size: 1.5em;\r\n  line-height: 1.5;\r\n  color: #fff;\r\n}.wedding-person-save[_ngcontent-%COMP%]{\r\n  font-family: 'Playball', cursive;\r\n  font-size: 3em;\r\n  color: #fff;\r\n}.wedding-person-name[_ngcontent-%COMP%]{\r\n  font-family: 'Playball', cursive;\r\n  font-size: 9em;\r\n  color: #fff;\r\n  line-height: 1;\r\n}.wedding-info[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n    font-weight: 900;\r\n    text-transform: uppercase;\r\n    color: #d291bc;\r\n    letter-spacing: 7px;\r\n    position: relative;\r\n    background: #fff;\r\n    padding: 8px 15px;\r\n    border-radius: 2px;\r\n}.section[_ngcontent-%COMP%]{\r\n  padding: 70px 0 70px;\r\n}.story-area[_ngcontent-%COMP%]:after{\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n}.story-area[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n}.story-area[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  opacity: .8;\r\n   background: url(https://preview.colorlib.com/theme/wedding2/images/Background_Circle.png.webp)\r\n  \r\n}.container[_ngcontent-%COMP%]{\r\n  width: 1140px;\r\n  max-width: 100%;\r\n  padding-right: 15px;\r\n    padding-left: 15px;\r\n}.row[_ngcontent-%COMP%]{\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n  text-align: center;\r\n  display: block;\r\n  flex-wrap: wrap;\r\n}.row-padding[_ngcontent-%COMP%] {\r\n  padding-bottom: 3rem !important;\r\n}.column[_ngcontent-%COMP%]{\r\n\r\n}.story-heading[_ngcontent-%COMP%]{\r\n  padding-bottom: 20px;\r\n}.story-title[_ngcontent-%COMP%]{\r\n  font-size: 3.5em;\r\n  line-height: 1.1;\r\n  font-family: 'Playball', cursive;\r\n  \r\n  color: rgb(210 145 188);\r\n  font-weight: 900;\r\n}.heading-bottom[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  width: 210px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  position: relative;\r\n  font-size: 3.5em\r\n}.heading-bottom[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50%;\r\n    margin-top: -8.5px;\r\n    height: 1px;\r\n    width: 90px;\r\n    background: #aaa;\r\n}.heading-bottom[_ngcontent-%COMP%]:before{\r\n  content: '';\r\n    position: absolute;\r\n    right: 0;\r\n    top: 50%;\r\n    margin-top: -8.5px;\r\n    height: 1px;\r\n    width: 90px;\r\n    background: #aaa;\r\n}.bottom-icon[_ngcontent-%COMP%]{\r\n  margin-bottom: 0px;\r\n  color: #fb1567;\r\n}.story-content[_ngcontent-%COMP%]{\r\n  line-height: 1.6;\r\n  font-size: 20px;\r\n  font-weight: 400;\r\n  color: #555;\r\n  font-family: 'Bitter', serif;\r\n}.counter-area[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 1;\r\n  background-image: url(  https://preview.colorlib.com/theme/wed/assets/img/hero/homeHero_1.jpg.webp);\r\n  background-size: cover;\r\n  color: #fff;\r\n}.counter-area[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: -1;\r\n  background: rgba(0,0,0,.3)\r\n}.counter-title[_ngcontent-%COMP%]{\r\n  font-size: 3.5em;\r\n  line-height: 1.1;\r\n  font-family: 'Playball', cursive;\r\n  color: #f9f9f9;\r\n}.time[_ngcontent-%COMP%]{\r\n  position: relative;\r\n    display: inline-block;\r\n    margin: 0 20px;\r\n    margin-bottom: 30px;\r\n    height: 120px;\r\n    width: 120px;\r\n    padding-top: 25px;\r\n    border-radius: 100px;\r\n    border: 1px solid #fff;\r\n}.counter-timing[_ngcontent-%COMP%]{\r\n  font-size: 3em;\r\n  line-height: 1;\r\n  display: block;\r\n}.subheading[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 5px;\r\n    text-transform: uppercase;\r\n    color: rgba(0, 0, 0, 0.3);\r\n    color: #d291bc;\r\n    letter-spacing: 2px;\r\n    font-weight: 900;\r\n    border: 1px dashed #d291bc;\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n}.subheading-content[_ngcontent-%COMP%]{\r\n  line-height: 1.2;\r\n  font-size: 100px;\r\n  font-weight: normal;\r\n  font-family: 'Playball', cursive;\r\n  color: #d291bc;\r\n  margin-bottom: 1rem !important;\r\n}.bride-groom[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: relative;\r\n  z-index: 0;\r\n  padding: 0;\r\n  margin-bottom: 80px;\r\n}.ftco-animate[_ngcontent-%COMP%]{\r\n}.d-md-flex[_ngcontent-%COMP%] {\r\n\r\n}.fadeInUp[_ngcontent-%COMP%]{\r\n  animation-name: fadeInUp;\r\n}.ftco-animated[_ngcontent-%COMP%]{\r\n  animation-duration: .5s;\r\n  animation-fill-mode: both\r\n}.img[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 400px;\r\n  height: 400px;\r\n  margin: 0 auto;\r\n  border: 15px solid #f0d9e8;\r\n}.order-md-last[_ngcontent-%COMP%]{\r\n  order: 13;\r\n}.ml-md-5[_ngcontent-%COMP%]{\r\n  margin-left: 3rem !important;\r\n}.groom-image[_ngcontent-%COMP%]{\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-image: url(https://preview.colorlib.com/theme/twohearts/images/xgroom.jpg.pagespeed.ic.6E8xz7uPat.webp);\r\n}.bridal-image[_ngcontent-%COMP%]{\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-image: url(https://preview.colorlib.com/theme/twohearts/images/xbride.jpg.pagespeed.ic.J4_wf5Jvyl.webp);\r\n}.text[_ngcontent-%COMP%]{\r\n  width: calc(100% - 400px);\r\n  position: relative;\r\n  padding-top: 30px;\r\n}.font-style[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n  line-height: 1.8;\r\n  font-weight: 400;\r\n  color: #999999;\r\n}.groom-bride-area[_ngcontent-%COMP%]{\r\n   background: url(https://preview.colorlib.com/theme/wedding2/images/Background_Circle.png.webp)\r\n}.dove-icon[_ngcontent-%COMP%]{\r\n  bottom: 0;\r\n  position: absolute;\r\n}.icon-right[_ngcontent-%COMP%]{\r\n  right: 0;\r\n}.icon-left[_ngcontent-%COMP%]{\r\n  left: 0;\r\n  margin-left: 8rem;\r\n}.icon-size[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  height: 100px;\r\n}.wedding-detail[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  position: relative;\r\n}.wedding-detail[_ngcontent-%COMP%]:after{\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -.5px;\r\n  width: 2px;\r\n  background: #d291bc;\r\n}.margin-bottom[_ngcontent-%COMP%] {\r\n  margin-bottom: 30px;\r\n}.wedding-event-main[_ngcontent-%COMP%] {\r\n  background-image: url(https://preview.colorlib.com/theme/wedding2/images/counter-1-1600x600.jpg.webp);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-attachment: fixed;\r\n}.wedding-event[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  padding: 0 50px;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n  clear: both;\r\n  margin-top: -40px;\r\n}.wedding-event[_ngcontent-%COMP%]:after{\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    height: 18px;\r\n    width: 18px;\r\n    border-radius: 20px;\r\n    z-index: 1;\r\n    border: 1px solid #aaa;\r\n    background: #fff;\r\n}.right[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n  float: right;\r\n}.right[_ngcontent-%COMP%]:after{\r\n  left: 0;\r\n  margin-left: -9px;\r\n}.left[_ngcontent-%COMP%]{\r\n  text-align: right;\r\n  float: left;\r\n}.left[_ngcontent-%COMP%]:after{\r\n  right: 0;\r\n  margin-right: -9px;\r\n}.wedding-event-title[_ngcontent-%COMP%]{\r\n   margin: 10px 0;\r\n   font-size: 2em;\r\n   font-family: 'Playball', cursive;\r\n  color: #fff;\r\n}.wedding-event[_ngcontent-%COMP%]:first-child{\r\n  margin-top: 0\r\n}.wedding-event[_ngcontent-%COMP%]:last-child {\r\n  margin-bottom: 0;\r\n}.icon-ciurclke[_ngcontent-%COMP%]:before{\r\n  content: \"\\65\";\r\n}.wedding-event-inner[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  z-index: 0;\r\n  background: #d291bc;\r\n  padding: 16px;\r\n  box-shadow: 0px 10px 32px -19px rgb(0 0 0 / 36%);\r\n}.wedding-event-inner[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 5px;\r\n  right: 5px;\r\n  bottom: 8px;\r\n  content: '';\r\n  border: 1px dashed rgba(255, 255, 255, 0.5);\r\n  z-index: -1;\r\n  transform: rotate(\r\n-1deg);\r\n}.wedding-event-inner[_ngcontent-%COMP%]:after {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 5px;\r\n  right: 5px;\r\n  bottom: 8px;\r\n  content: '';\r\n  border: 1px dashed rgba(255, 255, 255, 0.5);\r\n  z-index: -1;\r\n  transform: rotate(\r\n1deg);\r\n}.wedding-event-time[_ngcontent-%COMP%]{\r\n  margin: 10px 0;\r\n  font-size: 1.5em;\r\n  font-family: 'Playball', cursive;\r\n  color: #fff;\r\n}.galary_item[_ngcontent-%COMP%]{\r\n  height: 253px;\r\n  width: calc(33.33% - 15px);\r\n  margin-right: 15px;\r\n  margin-bottom: 15px;\r\n  float: left;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  position: relative;\r\n  z-index: 1;\r\n}.set-background[_ngcontent-%COMP%]{\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: top center;\r\n}.photo-gallery-title[_ngcontent-%COMP%]{\r\n  padding-bottom: 8px;\r\n}.photos-container[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  width: 100%;\r\n}.background[_ngcontent-%COMP%]{\r\n  background: url(https://preview.colorlib.com/theme/wedding2/images/Background_Circle.png.webp);\r\n}.map-container[_ngcontent-%COMP%]{\r\n  width: 200%;\r\n  height: 500px;\r\n}.map-room[_ngcontent-%COMP%] {\r\n  margin: auto 0px auto 0px;\r\n  min-width: 100%;\r\n}.people-img[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  height: 200px;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  border: 15px solid #f0d9e8;\r\n  margin: 0 auto;\r\n  margin-bottom: 20px;\r\n}.active[_ngcontent-%COMP%]:first-child {\r\n  background: #d291bc;\r\n}.side-menu-wrapper[_ngcontent-%COMP%]{\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}.side-menu-conent[_ngcontent-%COMP%]{\r\n  color: #000000 !important;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  font-family: Arial;\r\n}.ant-menu-item-selected[_ngcontent-%COMP%]{\r\n  background-color: #d291bc !important;\r\n}.side-menu[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  margin-top: 64px;\r\n  height: 100%;\r\n  display: none;\r\n}.side-menu-layout[_ngcontent-%COMP%] {\r\nheight: 100%;\r\n}.navigation-button-position-prev[_ngcontent-%COMP%] {\r\n    margin-left: 10%;\r\n}.navigation-button-position-next[_ngcontent-%COMP%]{\r\n   margin-right: 10%;\r\n}.side-panel-main[_ngcontent-%COMP%] {\r\n  height: 95vh;\r\n  background: #f0d9e8 !important;\r\n}.collapse-button-top[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left: 0;\r\n}.dynamic-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}.scrollspy-example[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 200px;\r\n    margin-top: .5rem;\r\n    overflow: auto;\r\n}[nz-carousel-content][_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background: #364d79;\r\n  color: #fff;\r\n  overflow: hidden;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}img[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  margin-bottom: 0;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}.background-image[_ngcontent-%COMP%] {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-image: url('image-1.jpg');\r\n    background-size: cover;\r\n}.second-carousle-class[_ngcontent-%COMP%]{\r\n  padding-top: 24px;\r\n}.invitation-content-main[_ngcontent-%COMP%]{\r\n  padding-top: 0px;\r\n  font-family: 'Bitter', serif;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}.invitation-content-area[_ngcontent-%COMP%]{\r\n  padding: 16px 32px 32px 32px;\r\n  border-right: 1px solid #f1f1f1;\r\n}.carousle-image-height[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 60%;\r\n}.timer[_ngcontent-%COMP%] {\r\n  margin-top: 64px;\r\n  text-align: center;\r\n  font-family: Arial, sans-serif;\r\n  font-size: 1.4em;\r\n  letter-spacing: -1px;\r\n}.timer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  margin: 0 3px 0 15px;\r\n}@media screen and (max-width: 728px) {\r\n  .wedding-person-save[_ngcontent-%COMP%]{\r\n    font-family: 'Playball', cursive;\r\n    font-size: 2em;\r\n    color: #fff;\r\n  } .story-title[_ngcontent-%COMP%]{\r\n    font-size: 2.5em;\r\n  }\r\n  .wedding-person-name[_ngcontent-%COMP%]{\r\n    font-family: 'Playball', cursive;\r\n    font-size: 5em;\r\n    color: #fff;\r\n    line-height: 1;\r\n  }.row-padding[_ngcontent-%COMP%] {\r\n    padding-bottom: 0rem !important;\r\n  }\r\n  .wedding-info[_ngcontent-%COMP%]{\r\n    font-size: 7px;\r\n  }\r\n  .section[_ngcontent-%COMP%]{\r\n    padding: 30px 0 30px;\r\n  }\r\n  .story-heading[_ngcontent-%COMP%]{\r\n    padding-bottom: 0px;\r\n  }\r\n  .story-content[_ngcontent-%COMP%]{\r\n    line-height: 1.6;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    color: #555;\r\n    font-family: 'Bitter', serif;\r\n  } .subheading-content[_ngcontent-%COMP%]{\r\n    line-height: 1.2;\r\n    font-size: 50px;\r\n    font-weight: normal;\r\n    font-family: 'Playball', cursive;\r\n    color: #d291bc;\r\n    margin-bottom: 1rem !important;\r\n  } .img[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 400px;\r\n    margin: 0 auto;\r\n    border: 15px solid #f0d9e8;\r\n  }  .ml-md-5[_ngcontent-%COMP%]{\r\n    margin-left:0rem !important;;\r\n  } .text[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    text-align: center;\r\n    margin-right: 3rem!important;\r\n  }.left[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    float: none;\r\n  }.right[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    float: none;\r\n  } .dove-icon[_ngcontent-%COMP%]{\r\n    bottom: 0px;\r\n    position: unset;\r\n  } .icon-left[_ngcontent-%COMP%]{\r\n    left: 0;\r\n    margin-left: 0rem;\r\n  }.wedding-event-main[_ngcontent-%COMP%] {\r\n    background-image: url(https://preview.colorlib.com/theme/wed/assets/img/gallery/xstory1.jpg.pagespeed.ic.jH3duhP_fP.webp);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    background-attachment: fixed;\r\n  } .wedding-detail[_ngcontent-%COMP%]:after{\r\n    left: 0;\r\n    margin-left: 0px;\r\n  } .wedding-detail[_ngcontent-%COMP%]{\r\n    margin-left: 15px;\r\n    overflow: visible;\r\n  } .wedding-event[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0 0 0 30px;\r\n    margin: 0 0 30px;\r\n  } .left[_ngcontent-%COMP%]:after{\r\n    right: 0;\r\n    margin-right: -9px;\r\n    left: 0;\r\n    margin-left: -9px;\r\n  } .bride-groom[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    z-index: 0;\r\n    padding: 0;\r\n    margin-bottom: 0px;\r\n  } .galary_item[_ngcontent-%COMP%]{\r\n    width: calc(105% - 15px);\r\n  }\r\n\r\n  .map-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 400px;\r\n  }\r\n\r\n\r\n  .invitation-content-main[_ngcontent-%COMP%] {\r\n    padding-top: 0px;\r\n    margin-left: 0px;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n  }\r\n  .invitation-content-area[_ngcontent-%COMP%]{\r\n    padding: 16px 10px 16px 10px;\r\n    border-right: 1px solid #f1f1f1;\r\n  }\r\n\r\n  .carousle-image-height[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n  }\r\n\r\n  .side-menu[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    margin-top: 64px;\r\n    height: 100%;\r\n    display: block;\r\n    z-index: 1000;\r\n  }\r\n\r\n  .navigation-button-position-prev[_ngcontent-%COMP%]{\r\n    margin-left:auto;\r\n  }\r\n\r\n  .navigation-button-position-next[_ngcontent-%COMP%]{\r\n    margin-right: auto;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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bEIsRUFBRTtJQUNBLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkIsRUFBRTtJQUNBLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCLEVBQUU7SUFDQSxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxpQkFBaUI7RUFDbkIsRUFBRTtJQUNBLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7RUFDcEIsRUFBRTtJQUNBLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7OztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBaUI7WUFBakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxvYXRpbmctaGVhZGVyIHtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59LmgyLWhlYWRpbmd7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWJhbGwnLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiAjZDI5MWJjICFpbXBvcnRhbnQ7XHJcbn0gLmgxLWhlYWRpbmd7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWJhbGwnLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiAjZDI5MWJjICFpbXBvcnRhbnQ7XHJcbn0gLmgzLWhlYWRpbmd7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWJhbGwnLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiAjZDI5MWJjICFpbXBvcnRhbnQ7XHJcbn0ucGFyYWdyYXBoIHtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGZvbnQtc2l6ZTogMS4wNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufSAuaWNvbntcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIDRweDtcclxufVxyXG4uZ3Jvb20tYnJpZGUtbWFpbi1jb250ZW50OmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjM1KTtcclxufSAuYnJpZGUtZ3Jvb20tYmFja2dyb3Vke1xyXG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcmV2aWV3LmNvbG9ybGliLmNvbS90aGVtZS90d29oZWFydHMvaW1hZ2VzL3hiZ18yLmpwZy5wYWdlc3BlZWQuaWMuUWs3Nl9qS3hyYi53ZWJwKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn0gLmJyaWRlLWdyb29tLWJhY2tncm91ZDphZnRlcntcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjMpO1xyXG59XHJcbi5ncm9vbS1icmlkZS1tYWluLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcmV2aWV3LmNvbG9ybGliLmNvbS90aGVtZS93ZWRkaW5nMi9pbWFnZXMvc2xpZGVyLTEtMTYwMHg5MDAuanBnLndlYnApO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZ3Jvb20tY29udGVudC10YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndlZGRpbmctY29udGVudHtcclxuICBsaW5lLWhlaWdodDoxOyBcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLndlZGRpbmctZGF0ZXtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLndlZGRpbmctcGVyc29uLXNhdmV7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5YmFsbCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLndlZGRpbmctcGVyc29uLW5hbWV7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5YmFsbCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA5ZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLndlZGRpbmctaW5mb3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZDI5MWJjO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA4cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLnNlY3Rpb257XHJcbiAgcGFkZGluZzogNzBweCAwIDcwcHg7XHJcbn1cclxuLnN0b3J5LWFyZWE6YWZ0ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdG9yeS1hcmVhe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3RvcnktYXJlYTphZnRlcntcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9wcmV2aWV3LmNvbG9ybGliLmNvbS90aGVtZS93ZWRkaW5nMi9pbWFnZXMvQmFja2dyb3VuZF9DaXJjbGUucG5nLndlYnApXHJcbiAgXHJcbn1cclxuLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTE0MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5yb3d7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufSAucm93LXBhZGRpbmcge1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbHVtbntcclxuXHJcbn1cclxuLnN0b3J5LWhlYWRpbmd7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnN0b3J5LXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBmb250LWZhbWlseTogJ1BsYXliYWxsJywgY3Vyc2l2ZTtcclxuICAvKiBjb2xvcjogcmdiKDI1MSAyMSAxMDMpOyAqL1xyXG4gIGNvbG9yOiByZ2IoMjEwIDE0NSAxODgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuLmhlYWRpbmctYm90dG9te1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMTBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMy41ZW1cclxufVxyXG4uaGVhZGluZy1ib3R0b206YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOC41cHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2FhYTtcclxufSBcclxuLmhlYWRpbmctYm90dG9tOmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtOC41cHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2FhYTtcclxufSAuYm90dG9tLWljb257XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGNvbG9yOiAjZmIxNTY3O1xyXG59XHJcbi5zdG9yeS1jb250ZW50e1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcclxufVxyXG4uY291bnRlci1hcmVhe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCggIGh0dHBzOi8vcHJldmlldy5jb2xvcmxpYi5jb20vdGhlbWUvd2VkL2Fzc2V0cy9pbWcvaGVyby9ob21lSGVyb18xLmpwZy53ZWJwKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59IC5jb3VudGVyLWFyZWE6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zKVxyXG59IFxyXG4uY291bnRlci10aXRsZXtcclxuICBmb250LXNpemU6IDMuNWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5YmFsbCcsIGN1cnNpdmU7XHJcbiAgY29sb3I6ICNmOWY5Zjk7XHJcbn1cclxuLnRpbWV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5jb3VudGVyLXRpbWluZ3tcclxuICBmb250LXNpemU6IDNlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufSAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGNvbG9yOiAjZDI5MWJjO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2QyOTFiYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufSAuc3ViaGVhZGluZy1jb250ZW50e1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWJhbGwnLCBjdXJzaXZlO1xyXG4gIGNvbG9yOiAjZDI5MWJjO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxufSAuYnJpZGUtZ3Jvb20ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufS5mdGNvLWFuaW1hdGV7XHJcbn0gLmQtbWQtZmxleCB7XHJcblxyXG59LmZhZGVJblVwe1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxufSAuZnRjby1hbmltYXRlZHtcclxuICBhbmltYXRpb24tZHVyYXRpb246IC41cztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoXHJcbn0gLmltZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXI6IDE1cHggc29saWQgI2YwZDllODtcclxufSAub3JkZXItbWQtbGFzdHtcclxuICBvcmRlcjogMTM7XHJcbn0gLm1sLW1kLTV7XHJcbiAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcclxufSAuZ3Jvb20taW1hZ2V7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcHJldmlldy5jb2xvcmxpYi5jb20vdGhlbWUvdHdvaGVhcnRzL2ltYWdlcy94Z3Jvb20uanBnLnBhZ2VzcGVlZC5pYy42RTh4ejd1UGF0LndlYnApO1xyXG59LmJyaWRhbC1pbWFnZXtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcmV2aWV3LmNvbG9ybGliLmNvbS90aGVtZS90d29oZWFydHMvaW1hZ2VzL3hicmlkZS5qcGcucGFnZXNwZWVkLmljLko0X3dmNUp2eWwud2VicCk7XHJcbn0gLnRleHR7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbn0gLmZvbnQtc3R5bGV7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzk5OTk5OTtcclxufSAuZ3Jvb20tYnJpZGUtYXJlYXtcclxuICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcHJldmlldy5jb2xvcmxpYi5jb20vdGhlbWUvd2VkZGluZzIvaW1hZ2VzL0JhY2tncm91bmRfQ2lyY2xlLnBuZy53ZWJwKVxyXG59LmRvdmUtaWNvbntcclxuICBib3R0b206IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59IC5pY29uLXJpZ2h0e1xyXG4gIHJpZ2h0OiAwO1xyXG59IC5pY29uLWxlZnR7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tbGVmdDogOHJlbTtcclxufSAuaWNvbi1zaXple1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ud2VkZGluZy1kZXRhaWx7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gLndlZGRpbmctZGV0YWlsOmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLS41cHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjZDI5MWJjO1xyXG59IC5tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59IFxyXG4ud2VkZGluZy1ldmVudC1tYWluIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcmV2aWV3LmNvbG9ybGliLmNvbS90aGVtZS93ZWRkaW5nMi9pbWFnZXMvY291bnRlci0xLTE2MDB4NjAwLmpwZy53ZWJwKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59IC53ZWRkaW5nLWV2ZW50e1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMCA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG59IC53ZWRkaW5nLWV2ZW50OmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn0ucmlnaHR7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn0gLnJpZ2h0OmFmdGVye1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XHJcbn0ubGVmdHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmbG9hdDogbGVmdDtcclxufSAubGVmdDphZnRlcntcclxuICByaWdodDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IC05cHg7XHJcbn0ud2VkZGluZy1ldmVudC10aXRsZXtcclxuICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICBmb250LWZhbWlseTogJ1BsYXliYWxsJywgY3Vyc2l2ZTtcclxuICBjb2xvcjogI2ZmZjtcclxufS53ZWRkaW5nLWV2ZW50OmZpcnN0LWNoaWxke1xyXG4gIG1hcmdpbi10b3A6IDBcclxufSAud2VkZGluZy1ldmVudDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IC5pY29uLWNpdXJjbGtlOmJlZm9yZXtcclxuICBjb250ZW50OiBcIlxcNjVcIjtcclxufSAud2VkZGluZy1ldmVudC1pbm5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZDI5MWJjO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMzJweCAtMTlweCByZ2IoMCAwIDAgLyAzNiUpO1xyXG59IC53ZWRkaW5nLWV2ZW50LWlubmVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZShcclxuLTFkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoXHJcbi0xZGVnKTtcclxufSAud2VkZGluZy1ldmVudC1pbm5lcjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZShcclxuMWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKFxyXG4xZGVnKTtcclxufS53ZWRkaW5nLWV2ZW50LXRpbWV7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LWZhbWlseTogJ1BsYXliYWxsJywgY3Vyc2l2ZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5nYWxhcnlfaXRlbXtcclxuICBoZWlnaHQ6IDI1M3B4O1xyXG4gIHdpZHRoOiBjYWxjKDMzLjMzJSAtIDE1cHgpO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn0gLnNldC1iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG59IC5waG90by1nYWxsZXJ5LXRpdGxle1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn0gLnBob3Rvcy1jb250YWluZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9wcmV2aWV3LmNvbG9ybGliLmNvbS90aGVtZS93ZWRkaW5nMi9pbWFnZXMvQmFja2dyb3VuZF9DaXJjbGUucG5nLndlYnApO1xyXG59XHJcblxyXG4ubWFwLWNvbnRhaW5lcntcclxuICB3aWR0aDogMjAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59IC5tYXAtcm9vbSB7XHJcbiAgbWFyZ2luOiBhdXRvIDBweCBhdXRvIDBweDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ucGVvcGxlLWltZ3tcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXI6IDE1cHggc29saWQgI2YwZDllODtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59IC5hY3RpdmU6Zmlyc3QtY2hpbGQge1xyXG4gIGJhY2tncm91bmQ6ICNkMjkxYmM7XHJcbn1cclxuXHJcbi8qKiBzaWRlIE1lbnUgZGVzaWduICoqLyBcclxuXHJcbi5zaWRlLW1lbnUtd3JhcHBlcntcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59IC5zaWRlLW1lbnUtY29uZW50e1xyXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyOTFiYyAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZS1tZW51LWxheW91dCB7XHJcbmhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tYnV0dG9uLXBvc2l0aW9uLXByZXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tYnV0dG9uLXBvc2l0aW9uLW5leHR7XHJcbiAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uc2lkZS1wYW5lbC1tYWluIHtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgYmFja2dyb3VuZDogI2YwZDllOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sbGFwc2UtYnV0dG9uLXRvcCB7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmR5bmFtaWMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNjcm9sbHNweS1leGFtcGxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5bbnotY2Fyb3VzZWwtY29udGVudF0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzY0ZDc5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS0xLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zZWNvbmQtY2Fyb3VzbGUtY2xhc3N7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuLmludml0YXRpb24tY29udGVudC1tYWlue1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdCaXR0ZXInLCBzZXJpZjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmludml0YXRpb24tY29udGVudC1hcmVhe1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweCAzMnB4IDMycHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG4uY2Fyb3VzbGUtaW1hZ2UtaGVpZ2h0e1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi50aW1lciB7XHJcbiAgbWFyZ2luLXRvcDogNjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbn1cclxuLnRpbWVyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIG1hcmdpbjogMCAzcHggMCAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBGb3IgTW9iaWxlIFZpZXcqKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyOHB4KSB7XHJcbiAgLndlZGRpbmctcGVyc29uLXNhdmV7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXliYWxsJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfSAuc3RvcnktdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gIH1cclxuICAud2VkZGluZy1wZXJzb24tbmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWJhbGwnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH0ucm93LXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgLndlZGRpbmctaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gIH1cclxuICAuc2VjdGlvbntcclxuICAgIHBhZGRpbmc6IDMwcHggMCAzMHB4O1xyXG4gIH1cclxuICAuc3RvcnktaGVhZGluZ3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5zdG9yeS1jb250ZW50e1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XHJcbiAgfSAuc3ViaGVhZGluZy1jb250ZW50e1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXliYWxsJywgY3Vyc2l2ZTtcclxuICAgIGNvbG9yOiAjZDI5MWJjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIH0gLmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDE1cHggc29saWQgI2YwZDllODtcclxuICB9ICAubWwtbWQtNXtcclxuICAgIG1hcmdpbi1sZWZ0OjByZW0gIWltcG9ydGFudDs7XHJcbiAgfSAudGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtIWltcG9ydGFudDtcclxuICB9LmxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfS5yaWdodHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICB9IC5kb3ZlLWljb257XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICB9IC5pY29uLWxlZnR7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XHJcbiAgfS53ZWRkaW5nLWV2ZW50LW1haW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcHJldmlldy5jb2xvcmxpYi5jb20vdGhlbWUvd2VkL2Fzc2V0cy9pbWcvZ2FsbGVyeS94c3RvcnkxLmpwZy5wYWdlc3BlZWQuaWMuakgzZHVoUF9mUC53ZWJwKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgfSAud2VkZGluZy1kZXRhaWw6YWZ0ZXJ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9IC53ZWRkaW5nLWRldGFpbHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgfSAud2VkZGluZy1ldmVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDMwcHg7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gIH0gLmxlZnQ6YWZ0ZXJ7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogLTlweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTlweDtcclxuICB9IC5icmlkZS1ncm9vbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH0gLmdhbGFyeV9pdGVte1xyXG4gICAgd2lkdGg6IGNhbGMoMTA1JSAtIDE1cHgpO1xyXG4gIH1cclxuXHJcbiAgLm1hcC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmludml0YXRpb24tY29udGVudC1tYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbnZpdGF0aW9uLWNvbnRlbnQtYXJlYXtcclxuICAgIHBhZGRpbmc6IDE2cHggMTBweCAxNnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2xlLWltYWdlLWhlaWdodHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2lkZS1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1idXR0b24tcG9zaXRpb24tcHJldntcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgfVxyXG5cclxuICAubmF2aWdhdGlvbi1idXR0b24tcG9zaXRpb24tbmV4dHtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _shared_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ng-zorro-ant-module */ "3+2o");
/* harmony import */ var _shared_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/scroll-spy-directive */ "pqxY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _shared_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_5__["ScrollSpyDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"]] }); })();


/***/ }),

/***/ "pqxY":
/*!********************************************!*\
  !*** ./src/shared/scroll-spy-directive.ts ***!
  \********************************************/
/*! exports provided: ScrollSpyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function() { return ScrollSpyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onScroll(event) {
        let currentSection;
        const children = document.getElementById('invitation-content').children;
        const scrollTop = event.target.scrollingElement.scrollTop + 40;
        const parentOffset = event.target.scrollingElement.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element['offsetTop'] - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) { return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollSpyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollSpyDirective, selectors: [["", "scrollSpy", ""]], hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
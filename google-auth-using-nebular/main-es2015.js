(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/callback/callback.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Please wait for authentication...</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/oauth/oauth.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/oauth/oauth.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div class=\"header-row row align-items-end justify-content-center\">\r\n    <p class=\"header-text\">Please login through google to view profile details</p>\r\n  </div>\r\n  <div class=\"login-row row align-items-end justify-content-center\">\r\n    <img class=\"login-button\" (click)=\"login()\" src=\"assets/icons/google_login.png\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"token_valid\">\r\n    <div class=\"header\">\r\n        <div class=\"picture-border\">\r\n            <img class=\"profile-picture\" [src]=\"userProfileInfo?.picture\">\r\n        </div>\r\n        <div class=\"profile-head\">Profile</div>\r\n    </div>\r\n    <div class=\"profile-row align-items-end\">\r\n        <div class=\"profile-name\">{{userProfileInfo?.name}}</div>\r\n        <div class=\"email-id\">{{userProfileInfo?.email}}</div>\r\n    </div>\r\n    <div class=\"logout-row row align-items-end justify-content-center m-0\">\r\n        <button class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oauth/oauth.component */ "./src/app/oauth/oauth.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");







const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        component: _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_5__["OauthComponent"],
    },
    {
        path: 'callback',
        component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_3__["CallbackComponent"],
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");



let AppComponent = class AppComponent {
    constructor(iconLibraries) {
        this.iconLibraries = iconLibraries;
        this.title = 'angular-task';
        this.iconLibraries.registerFontPack('font-awesome', { iconClassPrefix: 'fa' });
    }
};
AppComponent.ctorParameters = () => [
    { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconLibraries"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oauth/oauth.component */ "./src/app/oauth/oauth.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/fesm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _oauth_oauth_component__WEBPACK_IMPORTED_MODULE_5__["OauthComponent"],
            _callback_callback_component__WEBPACK_IMPORTED_MODULE_6__["CallbackComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbAuthModule"].forRoot({
                strategies: [
                    _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbOAuth2AuthStrategy"].setup({
                        name: "google",
                        clientId: "273826063453-bmeb56dvbt0b3r6eo1cq94guafl1hgj3.apps.googleusercontent.com",
                        clientSecret: "6iYbfdwiT-a12vrdpAwZqRFB",
                        authorize: {
                            endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
                            responseType: _nebular_auth__WEBPACK_IMPORTED_MODULE_7__["NbOAuth2ResponseType"].TOKEN,
                            scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
                            redirectUri: `http://localhost:${window.location.port}/callback`,
                        },
                        redirect: {
                            success: "/auth",
                        },
                    }),
                ],
            }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbThemeModule"].forRoot(),
        ],
        providers: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconLibraries"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/callback/callback.component.scss":
/*!**************************************************!*\
  !*** ./src/app/callback/callback.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");




let CallbackComponent = class CallbackComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authService.authenticate('google')
            .subscribe((authResult) => {
            if (authResult.isSuccess()) {
                this.router.navigateByUrl('/profile');
            }
        });
    }
    ngOnInit() {
    }
};
CallbackComponent.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/index.js!./src/app/callback/callback.component.html"),
        styles: [__webpack_require__(/*! ./callback.component.scss */ "./src/app/callback/callback.component.scss")]
    })
], CallbackComponent);



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");




let AuthGuard = class AuthGuard {
    constructor(nbAuthService, router) {
        this.nbAuthService = nbAuthService;
        this.router = router;
    }
    canActivate() {
        return new Promise(res => {
            this.nbAuthService.onTokenChange()
                .subscribe((token) => {
                console.log(token, token.isValid());
                if (token && token.isValid()) {
                    res(true);
                }
                else {
                    this.router.navigateByUrl('auth');
                    res(false);
                }
            });
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/oauth/oauth.component.scss":
/*!********************************************!*\
  !*** ./src/app/oauth/oauth.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main .header-row {\n  height: 50px;\n  margin: 0px;\n}\n.main .header-row .header-text {\n  font-size: 20px;\n  font-family: Metropolis-Bold;\n  margin: 0px;\n}\n.main .login-row {\n  height: 80px;\n  margin: 0px;\n}\n.main .login-row .login-button {\n  width: 200px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2F1dGgvQzpcXFVzZXJzXFxSbzkzOVxcRG9jdW1lbnRzXFxhbmd1bGFyXFxnb29nbGUtYXV0aC11c2luZy1uZWJ1bGFyL3NyY1xcYXBwXFxvYXV0aFxcb2F1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29hdXRoL29hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NaO0FERUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FSO0FEQ1E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvb2F1dGgvb2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICAuaGVhZGVyLXJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIC5oZWFkZXItdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1ldHJvcG9saXMtQm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ2luLXJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIC5sb2dpbi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIubWFpbiAuaGVhZGVyLXJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubWFpbiAuaGVhZGVyLXJvdyAuaGVhZGVyLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBNZXRyb3BvbGlzLUJvbGQ7XG4gIG1hcmdpbjogMHB4O1xufVxuLm1haW4gLmxvZ2luLXJvdyB7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubWFpbiAubG9naW4tcm93IC5sb2dpbi1idXR0b24ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/oauth/oauth.component.ts":
/*!******************************************!*\
  !*** ./src/app/oauth/oauth.component.ts ***!
  \******************************************/
/*! exports provided: OauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthComponent", function() { return OauthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");




let OauthComponent = class OauthComponent {
    constructor(nbAuthService, router) {
        this.nbAuthService = nbAuthService;
        this.router = router;
        this.nbAuthService.onTokenChange()
            .subscribe((token) => {
            console.log(token.getPayload());
            if (token && token.isValid()) {
                this.router.navigateByUrl('profile');
                console.log(token.getPayload());
            }
        });
    }
    login() {
        this.nbAuthService.authenticate('google')
            .subscribe((authResult) => {
            console.log('loginAuth', authResult);
        });
    }
    ngOnInit() { }
};
OauthComponent.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OauthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oauth',
        template: __webpack_require__(/*! raw-loader!./oauth.component.html */ "./node_modules/raw-loader/index.js!./src/app/oauth/oauth.component.html"),
        styles: [__webpack_require__(/*! ./oauth.component.scss */ "./src/app/oauth/oauth.component.scss")]
    })
], OauthComponent);



/***/ }),

/***/ "./src/app/oauth/oauth.service.ts":
/*!****************************************!*\
  !*** ./src/app/oauth/oauth.service.ts ***!
  \****************************************/
/*! exports provided: OauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthService", function() { return OauthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let OauthService = class OauthService {
    constructor(http) {
        this.http = http;
    }
    getUserProfileInfo(access_token) {
        const url = 'https://www.googleapis.com/oauth2/v1/userinfo';
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('access_token', access_token);
        return this.http.get(url, { params });
    }
};
OauthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OauthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OauthService);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 70px;\n  background-image: -webkit-gradient(linear, left top, right top, from(#5574f7), to(#60c3ff));\n  background-image: linear-gradient(to right, #5574f7, #60c3ff);\n  position: relative;\n  text-align: center;\n}\n.header .picture-border {\n  width: 120px;\n  height: 120px;\n  border: 4px solid #fff;\n  border-radius: 6px;\n  position: absolute;\n  left: 35.7px;\n  top: 25.5px;\n}\n.header .picture-border .profile-picture {\n  width: 100%;\n  height: 100%;\n  border-radius: 6px;\n}\n.header .profile-head {\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #fff;\n  -webkit-transform: translateY(25px);\n          transform: translateY(25px);\n  font-family: Metropolis-Bold;\n  letter-spacing: 1px;\n}\n.profile-row {\n  padding: 20px 0 0 190px;\n}\n.profile-row .profile-name {\n  font-size: 20px;\n  text-transform: capitalize;\n  font-family: Metropolis-Bold;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: block;\n}\n.profile-row .email-id {\n  font-size: 16px;\n  font-family: Metropolis-Medium;\n}\n.logout-row {\n  height: 80px;\n  width: 100%;\n}\n.logout-row .btn {\n  font-size: 14px;\n  font-family: Metropolis-Bold;\n}\n@media only screen and (max-width: 600px) {\n  .picture-border {\n    width: 90px !important;\n    height: 90px !important;\n    left: 20px !important;\n  }\n\n  .profile-row {\n    padding: 50px 0 0 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXFJvOTM5XFxEb2N1bWVudHNcXGFuZ3VsYXJcXGdvb2dsZS1hdXRoLXVzaW5nLW5lYnVsYXIvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFlBQUE7RUFDQSwyRkFBQTtFQUFBLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0hKO0FESUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDRlI7QURHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDRlI7QURLQTtFQUNJLHVCQUFBO0FDRko7QURHSTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER0k7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7QUNEUjtBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNESjtBREVJO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0FDQVI7QURHQTtFQUNJO0lBQ0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLHFCQUFBO0VDQU47O0VERUU7SUFDSSxzQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZm9udC1mYWNlIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnbGF0byc7XHJcbi8vICAgICBzcmM6IHVybChhc3NldHMvZm9udC9MYXRvLm90ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbi8vICAgfVxyXG4uaGVhZGVyIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU1NzRmNywgIzYwYzNmZik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAucGljdHVyZS1ib3JkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAzNS43cHg7XHJcbiAgICAgICAgdG9wOiAyNS41cHg7XHJcbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1oZWFkIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjVweCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE1ldHJvcG9saXMtQm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG59XHJcbi5wcm9maWxlLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAxOTBweDtcclxuICAgIC5wcm9maWxlLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBmb250LWZhbWlseTogTWV0cm9wb2xpcy1Cb2xkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5lbWFpbC1pZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBNZXRyb3BvbGlzLU1lZGl1bTtcclxuICAgIH1cclxufVxyXG4ubG9nb3V0LXJvdyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5idG4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogTWV0cm9wb2xpcy1Cb2xkO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5waWN0dXJlLWJvcmRlciB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZS1yb3cge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMCAwIDIwcHg7XHJcbiAgICB9XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGhlaWdodDogNzBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTU3NGY3LCAjNjBjM2ZmKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyIC5waWN0dXJlLWJvcmRlciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM1LjdweDtcbiAgdG9wOiAyNS41cHg7XG59XG4uaGVhZGVyIC5waWN0dXJlLWJvcmRlciAucHJvZmlsZS1waWN0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmhlYWRlciAucHJvZmlsZS1oZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xuICBmb250LWZhbWlseTogTWV0cm9wb2xpcy1Cb2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ucHJvZmlsZS1yb3cge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAxOTBweDtcbn1cbi5wcm9maWxlLXJvdyAucHJvZmlsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IE1ldHJvcG9saXMtQm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2ZpbGUtcm93IC5lbWFpbC1pZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IE1ldHJvcG9saXMtTWVkaXVtO1xufVxuXG4ubG9nb3V0LXJvdyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9nb3V0LXJvdyAuYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogTWV0cm9wb2xpcy1Cb2xkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5waWN0dXJlLWJvcmRlciB7XG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDkwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJvZmlsZS1yb3cge1xuICAgIHBhZGRpbmc6IDUwcHggMCAwIDIwcHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nebular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/auth */ "./node_modules/@nebular/auth/fesm2015/index.js");
/* harmony import */ var _oauth_oauth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../oauth/oauth.service */ "./src/app/oauth/oauth.service.ts");





let ProfileComponent = class ProfileComponent {
    constructor(nbAuthService, oauthService, router) {
        this.nbAuthService = nbAuthService;
        this.oauthService = oauthService;
        this.router = router;
        this.getAccessToken();
    }
    logout() {
        this.nbAuthService.logout('google')
            .subscribe((authResult) => {
            console.log('logoutAuth', authResult);
            this.router.navigateByUrl('auth');
        });
    }
    getAccessToken() {
        this.nbAuthService.onTokenChange()
            .subscribe((token) => {
            if (token && token.isValid()) {
                console.log(token.getPayload());
                this.getUserProfileInfo(token.getPayload().access_token);
            }
        });
    }
    getUserProfileInfo(access_token) {
        this.oauthService.getUserProfileInfo(access_token).subscribe(UserProfileResponse => {
            console.log(UserProfileResponse);
            this.userProfileInfo = UserProfileResponse;
        });
    }
    ngOnInit() { }
};
ProfileComponent.ctorParameters = () => [
    { type: _nebular_auth__WEBPACK_IMPORTED_MODULE_3__["NbAuthService"] },
    { type: _oauth_oauth_service__WEBPACK_IMPORTED_MODULE_4__["OauthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ro939\Documents\angular\google-auth-using-nebular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
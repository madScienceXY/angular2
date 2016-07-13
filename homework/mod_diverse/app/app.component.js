"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
<<<<<<< HEAD
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent initialized');
=======
var child_component_1 = require('./child.component');
var svc_messages_1 = require('./svc.messages');
var AppComponent = (function () {
    function AppComponent(_messageProvider) {
        this._messageProvider = _messageProvider;
        this.currentValue = 3;
        this.messages = [];
        this.title = _messageProvider.getMessage();
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent initialized');
        this.messages.push('OnInit');
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        this.messages.push('AfterContentInit');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.messages.push('AfterViewInit');
>>>>>>> 36169d4bdf21375d0453c84387c3b1ad9272e945
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            templateUrl: 'app/app.component.html',
<<<<<<< HEAD
            directives: []
        }), 
        __metadata('design:paramtypes', [])
=======
            providers: [svc_messages_1.MessageProvider],
            directives: [child_component_1.ChildComponent]
        }), 
        __metadata('design:paramtypes', [svc_messages_1.MessageProvider])
>>>>>>> 36169d4bdf21375d0453c84387c3b1ad9272e945
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
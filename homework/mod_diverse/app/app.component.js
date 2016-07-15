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
var child_component_1 = require('./child.component');
var svc_messages_1 = require('./svc.messages');
var person_component_1 = require('./components/person.component');
var messages_service_1 = require('./messages.service');
var indicator_component_1 = require('./indicator.component');
var AppComponent = (function () {
    function AppComponent(_messageProvider, _messageService) {
        this._messageProvider = _messageProvider;
        this._messageService = _messageService;
        this.currentValue = 3;
        this.messages = [];
        this.items = [{ "firstName": "Lancaster", "lastName": "Jacobson", "department": "ZENSOR" }, { "firstName": "Elizabeth", "lastName": "Mcclure", "department": "SPLINX" }, { "firstName": "Marci", "lastName": "Bass", "department": "SPHERIX" }, { "firstName": "Cristina", "lastName": "Wooten", "department": "ENQUILITY" }, { "firstName": "Neal", "lastName": "Griffin", "department": "ZIORE" }, { "firstName": "Robles", "lastName": "Kane", "department": "AQUASURE" }, { "firstName": "Jo", "lastName": "Mcfarland", "department": "ENTHAZE" }, { "firstName": "Jaclyn", "lastName": "Rodriguez", "department": "ROTODYNE" }, { "firstName": "Marlene", "lastName": "Figueroa", "department": "WAAB" }, { "firstName": "Salas", "lastName": "Saunders", "department": "NORALEX" }];
        this.title = _messageProvider.getMessage();
        this.appMessage = _messageService.getErrorMessage();
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
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            templateUrl: 'app/app.component.html',
            providers: [svc_messages_1.MessageProvider, messages_service_1.MessageService],
            directives: [child_component_1.ChildComponent, person_component_1.PersonComponent, indicator_component_1.IndicatorComponent]
        }), 
        __metadata('design:paramtypes', [svc_messages_1.MessageProvider, messages_service_1.MessageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
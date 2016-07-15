"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var svc_messages_1 = require('./svc.messages');
var messages_service_1 = require('./messages.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [svc_messages_1.MessageProvider, messages_service_1.MessageService]);
//# sourceMappingURL=main.js.map
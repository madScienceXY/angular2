"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
<<<<<<< HEAD
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, []);
=======
var svc_messages_1 = require('./svc.messages');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [svc_messages_1.MessageProvider]);
>>>>>>> 36169d4bdf21375d0453c84387c3b1ad9272e945
//# sourceMappingURL=main.js.map
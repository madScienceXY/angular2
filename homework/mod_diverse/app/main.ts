import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {MessageProvider} from './svc.messages';

bootstrap(AppComponent, [MessageProvider]);
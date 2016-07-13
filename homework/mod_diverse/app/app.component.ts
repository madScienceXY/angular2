import {Component, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';
import {ChildComponent} from './child.component';
import {MessageProvider} from './svc.messages';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  providers: [MessageProvider],
  directives:  [ChildComponent]
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit  {

  public title : string;

  public currentValue : number = 3;

  messages : string[] = [];

  public constructor(private _messageProvider : MessageProvider) {
    this.title = _messageProvider.getMessage();
  }

  ngOnInit() {
    console.log('AppComponent initialized');
    this.messages.push('OnInit');
  }

  ngAfterContentInit() {
    this.messages.push('AfterContentInit');
  }

  ngAfterViewInit() {
    this.messages.push('AfterViewInit');
  }

}

import {Component, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';
import {ChildComponent} from './child.component';
import {MessageProvider} from './svc.messages';
import {PersonComponent} from './components/person.component';
import {MessageService} from './messages.service';
import {IndicatorComponent} from './indicator.component';
import * as DataManager from './sample.module';
import * as moment from 'moment';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  providers: [MessageProvider, MessageService],
  directives:  [ChildComponent, PersonComponent, IndicatorComponent]
})

export class AppComponent implements OnInit, AfterContentInit, AfterViewInit  {

  public title : string;

  public currentValue : number = 3;

  messages : string[] = [];

  public currentDate : string;

  public sinceDate : string;

  public stringExample : string = new DataManager.StringGetter().GetString();
  public numberExample : number = new DataManager.NumberGetter().GetNumber();

  public items : any[] = [{"firstName":"Lancaster","lastName":"Jacobson","department":"ZENSOR"},{"firstName":"Elizabeth","lastName":"Mcclure","department":"SPLINX"},{"firstName":"Marci","lastName":"Bass","department":"SPHERIX"},{"firstName":"Cristina","lastName":"Wooten","department":"ENQUILITY"},{"firstName":"Neal","lastName":"Griffin","department":"ZIORE"},{"firstName":"Robles","lastName":"Kane","department":"AQUASURE"},{"firstName":"Jo","lastName":"Mcfarland","department":"ENTHAZE"},{"firstName":"Jaclyn","lastName":"Rodriguez","department":"ROTODYNE"},{"firstName":"Marlene","lastName":"Figueroa","department":"WAAB"},{"firstName":"Salas","lastName":"Saunders","department":"NORALEX"}];

  private appMessage : string;

  public constructor(private _messageProvider : MessageProvider, private _messageService : MessageService) {
    this.title = _messageProvider.getMessage();
    this.appMessage = _messageService.getErrorMessage();
    this.currentDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    this.sinceDate = moment('2016-01-01', 'YYYY-MM-DD').fromNow();
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

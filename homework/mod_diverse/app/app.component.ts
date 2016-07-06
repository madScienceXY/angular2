import {Component, OnInit, AfterContentInit, AfterViewInit} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  [ChildComponent]
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit  {

  public currentValue : number = 3;

  messages : string[] = [];


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
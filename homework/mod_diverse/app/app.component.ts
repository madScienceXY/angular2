import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent implements OnInit {
  ngOnInit() {
      console.log('AppComponent initialized');
  }
 }
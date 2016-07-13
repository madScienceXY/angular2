import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'child-component',
  template: '<h2>Child Component</h2><blockquote><strong>value : </strong>{{ value }}</blockquote>',
  directives:  []
})
export class ChildComponent implements OnInit, OnChanges {

    @Input() value : number;

    ngOnInit() {
        console.log('ChildComponent initialized');
    }

    ngOnChanges(changes: any) {
        console.log('ChildComponent Property changed:' +  changes['value'].currentValue);
    }

}
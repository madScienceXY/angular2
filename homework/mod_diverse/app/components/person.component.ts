import {Component, Input} from '@angular/core';

@Component({
    selector: 'person-details',
    templateUrl: 'app/components/person.component.html',
    directives: []
})
export class PersonComponent {
    @Input() context: any;


}
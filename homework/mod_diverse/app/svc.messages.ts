import {Injectable} from '@angular/core';

@Injectable()
export class MessageProvider {
    getMessage() : string {
        return "Hello Someone?";
    }

}
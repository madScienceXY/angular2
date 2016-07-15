import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
    getErrorMessage() : string {
        return "Issue Occured";
    }

    getSuccessMessage() : string {
        return "Success";
    }
}
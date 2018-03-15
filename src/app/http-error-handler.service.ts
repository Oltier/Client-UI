import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {SubscribeFormService} from './subscribe-form-component/subscribe-form.service'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => string;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
  subscribeformService: SubscribeFormService; 
  constructor(/*private messageService: MessageService*/) { }

  /** Create curried handleError function that already knows the service name */
 createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);
 
  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse)  => {
      // TODO: send the error to remote logging infrastructure
      console.error(error.status+"error which happened"); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;
      console.log(message);
      //this.subscribeformService.setMessage(message);
      // Let the app keep running by returning a safe result.
      return message;
     // return of( result);
    };

  }
 
}

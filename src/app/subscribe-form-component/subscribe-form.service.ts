import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError,tap } from 'rxjs/operators';
import {_Subscriber} from './subscriber'
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { error } from 'protractor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class SubscribeFormService {
  //'http://localhost:3030/sqlite'
  //https://api:3000/api/subscribers
  private frmUrl = 'https://api:3000/api/subscribers';
  private handleError: HandleError;
  message: string;
  @Input()
  private messageSubscribe;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler ) { 
  this.handleError = httpErrorHandler.createHandleError('Subscriber Service');
     }
  addSubscriber (user: _Subscriber){
    return this.http.post(this.frmUrl, user)
  .pipe(
        tap(  (response) =>this.messageSubscribe="Thank you for subscription", //console.log(),
       ),
        catchError( 
          (error: HttpErrorResponse) =>  
          this.messageSubscribe = (error.error instanceof ErrorEvent) ?
           error.error.message :
          `server returned code ${error.status} with body "${error.message}"`,
                           ), 
      );
  }
  messageSub(){
    return this.messageSubscribe;
  }
}

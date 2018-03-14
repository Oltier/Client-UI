import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError,tap } from 'rxjs/operators';
import {_Subscriber} from './subscriber'
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
@Injectable()
export class SubscribeFormService {
  private frmUrl = 'https://api:3000/api/subscribers';
  private handleError: HandleError;
  private messageSubscribe;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler ) { 
    this.handleError = httpErrorHandler.createHandleError('Subscriber Service');
    this.messageSubscribe="";
   }
  addSubscriber (user: _Subscriber): Observable<_Subscriber> {
    return this.http.post<_Subscriber>(this.frmUrl, user)
      .pipe(
        tap(() => this.messageSubscribe="Thank you for subsciption"),
        catchError(this.handleError('addSubscirber', user))
      );
  }
  public messageSub() {
    return this.messageSubscribe;
  }
}

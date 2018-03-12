import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import {_Subscriber} from './subscriber'
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
@Injectable()
export class SubscribeFormService {
  private frmUrl = 'http://api:3000';
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler ) { 
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }
  addSubscriber (user: _Subscriber): Observable<_Subscriber> {
    return this.http.post<_Subscriber>(this.frmUrl, user)
      .pipe(
        catchError(this.handleError('addSubscirber', user))
      );
  }
}

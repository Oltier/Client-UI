import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ChallComponentComponent} from './chall-component/chall-component.component';
import { BoxComponentComponent } from './box-component/box-component.component';
import { SubscribeFormComponentComponent } from './subscribe-form-component/subscribe-form-component.component'
import {HttpErrorHandler} from './http-error-handler.service';
@NgModule({  
  declarations: [
    AppComponent,
    ChallComponentComponent,
    BoxComponentComponent,
    SubscribeFormComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule , 
    ReactiveFormsModule 
  ],
  providers: [HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }

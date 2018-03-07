import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import {ChallComponentComponent} from './chall-component/chall-component.component';
import { BoxComponentComponent } from './box-component/box-component.component';
import { SubscribeFormComponentComponent } from './subscribe-form-component/subscribe-form-component.component'

@NgModule({
  declarations: [
    AppComponent,
    ChallComponentComponent,
    BoxComponentComponent,
    SubscribeFormComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscribeFormService } from './subscribe-form.service'
import { Subscriber } from 'rxjs/Subscriber';
import { _Subscriber } from './subscriber';

@Component({
  selector: 'app-subscribe-form-component',
  templateUrl: './subscribe-form-component.component.html',
  styleUrls: ['./subscribe-form-component.component.css'],
  providers: [SubscribeFormService],
})
export class SubscribeFormComponentComponent implements OnInit {
  model = new _Subscriber("", "", "");
  submitted = false;
  responseMessage: string;
  constructor(private subscribeService: SubscribeFormService) { }

  ngOnInit() {
 this.responseMessage="";
  }
  async onSubmit(form) {
    if (!form.valid) {
      return;
    }
    // The server will generate the id for this new subscriber
    this.model = new _Subscriber(form.value['firstName'], form.value['lastName'], form.value['email']);
    this.subscribeService.addSubscriber(this.model)
      .subscribe(
        response => this.responseMessage=this.subscribeService.messageSub(),
        );
    this.submitted = true;
  }
 


}

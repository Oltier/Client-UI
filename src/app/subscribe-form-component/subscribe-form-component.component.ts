import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {SubscribeFormService} from './subscribe-form.service'
import { Subscriber } from 'rxjs/Subscriber';
import {_Subscriber} from './subscriber'
@Component({
  selector: 'app-subscribe-form-component',
  templateUrl: './subscribe-form-component.component.html',
  styleUrls: ['./subscribe-form-component.component.css'],
  providers: [SubscribeFormService],
})
export class SubscribeFormComponentComponent implements OnInit {
  model=new _Subscriber("","","");
  submitted=false;
  constructor(private heroesService: SubscribeFormService) { }

  ngOnInit() {
    
  }

  async onSubmit(form) {
    if (!form.valid) {
      return;
    }
// The server will generate the id for this new subscriber
//const newSubscirber: _Subscriber = { name } as _Subscriber;
this.model= new _Subscriber(form.value['fname'],form.value['lname'],form.value['email']);
this.heroesService.addSubscriber(this.model)
.subscribe();
console.log(form.value['fname']);
this.submitted=true;
  //   this.router.navigateByUrl('/pets');
  }
    
  

}

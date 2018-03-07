import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFormComponentComponent } from './subscribe-form-component.component';

describe('SubscribeFormComponentComponent', () => {
  let component: SubscribeFormComponentComponent;
  let fixture: ComponentFixture<SubscribeFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

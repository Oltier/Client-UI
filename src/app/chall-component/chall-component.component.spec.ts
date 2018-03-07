import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallComponentComponent } from './chall-component.component';

describe('ChallComponentComponent', () => {
  let component: ChallComponentComponent;
  let fixture: ComponentFixture<ChallComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

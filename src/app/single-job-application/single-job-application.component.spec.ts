import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobApplicationComponent } from './single-job-application.component';

describe('SingleJobApplicationComponent', () => {
  let component: SingleJobApplicationComponent;
  let fixture: ComponentFixture<SingleJobApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJobApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

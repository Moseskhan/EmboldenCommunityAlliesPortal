import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobApplicationComponent } from './new-job-application.component';

describe('NewJobApplicationComponent', () => {
  let component: NewJobApplicationComponent;
  let fixture: ComponentFixture<NewJobApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

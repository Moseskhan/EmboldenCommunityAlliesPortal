import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticJobApplicationsComponent } from './static-job-applications.component';

describe('StaticJobApplicationsComponent', () => {
  let component: StaticJobApplicationsComponent;
  let fixture: ComponentFixture<StaticJobApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticJobApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticJobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentOnLearningComponent } from './time-spent-on-learning.component';

describe('TimeSpentOnLearningComponent', () => {
  let component: TimeSpentOnLearningComponent;
  let fixture: ComponentFixture<TimeSpentOnLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSpentOnLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSpentOnLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

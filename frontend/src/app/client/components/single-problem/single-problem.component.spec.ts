import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProblemComponent } from './single-problem.component';

describe('SingleProblemComponent', () => {
  let component: SingleProblemComponent;
  let fixture: ComponentFixture<SingleProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

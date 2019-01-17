import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProblemsComponent } from './select-problems.component';

describe('SelectProblemsComponent', () => {
  let component: SelectProblemsComponent;
  let fixture: ComponentFixture<SelectProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

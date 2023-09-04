import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectedcoursesComponent } from './view-selectedcourses.component';

describe('ViewSelectedcoursesComponent', () => {
  let component: ViewSelectedcoursesComponent;
  let fixture: ComponentFixture<ViewSelectedcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectedcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSelectedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

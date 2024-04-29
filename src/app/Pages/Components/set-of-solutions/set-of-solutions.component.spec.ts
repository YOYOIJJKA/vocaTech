import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOfSolutionsComponent } from './set-of-solutions.component';

describe('SetOfSolutionsComponent', () => {
  let component: SetOfSolutionsComponent;
  let fixture: ComponentFixture<SetOfSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetOfSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetOfSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

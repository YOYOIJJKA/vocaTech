import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuissnessSolutionsComponent } from './buissness-solutions.component';

describe('BuissnessSolutionsComponent', () => {
  let component: BuissnessSolutionsComponent;
  let fixture: ComponentFixture<BuissnessSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuissnessSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuissnessSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

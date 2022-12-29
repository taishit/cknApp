import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCorrectComponent } from './app-correct.component';

describe('AppCorrectComponent', () => {
  let component: AppCorrectComponent;
  let fixture: ComponentFixture<AppCorrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCorrectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

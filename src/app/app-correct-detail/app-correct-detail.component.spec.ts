import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCorrectDetailComponent } from './app-correct-detail.component';

describe('AppCorrectDetailComponent', () => {
  let component: AppCorrectDetailComponent;
  let fixture: ComponentFixture<AppCorrectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCorrectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCorrectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

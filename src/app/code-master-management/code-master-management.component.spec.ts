import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMasterManagementComponent } from './code-master-management.component';

describe('CodeMasterManagementComponent', () => {
  let component: CodeMasterManagementComponent;
  let fixture: ComponentFixture<CodeMasterManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeMasterManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMasterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

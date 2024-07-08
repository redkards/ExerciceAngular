import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserFormsArrayComponent } from './test-user-forms-array.component';

describe('TestUserFormsArrayComponent', () => {
  let component: TestUserFormsArrayComponent;
  let fixture: ComponentFixture<TestUserFormsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUserFormsArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUserFormsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

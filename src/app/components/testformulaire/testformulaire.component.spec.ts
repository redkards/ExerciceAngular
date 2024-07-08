import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestformulaireComponent } from './testformulaire.component';

describe('TestformulaireComponent', () => {
  let component: TestformulaireComponent;
  let fixture: ComponentFixture<TestformulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestformulaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestformulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

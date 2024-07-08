import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormBuiderListeComponent } from './test-form-buider-liste.component';

describe('TestFormBuiderListeComponent', () => {
  let component: TestFormBuiderListeComponent;
  let fixture: ComponentFixture<TestFormBuiderListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFormBuiderListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFormBuiderListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

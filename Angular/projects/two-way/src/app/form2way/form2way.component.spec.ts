import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2wayComponent } from './form2way.component';

describe('Form2wayComponent', () => {
  let component: Form2wayComponent;
  let fixture: ComponentFixture<Form2wayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Form2wayComponent]
    });
    fixture = TestBed.createComponent(Form2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

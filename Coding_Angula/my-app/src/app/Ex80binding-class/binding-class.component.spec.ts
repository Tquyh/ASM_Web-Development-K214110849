import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingClassComponent } from './binding-class.component';

describe('BindingClassComponent', () => {
  let component: BindingClassComponent;
  let fixture: ComponentFixture<BindingClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingClassComponent]
    });
    fixture = TestBed.createComponent(BindingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

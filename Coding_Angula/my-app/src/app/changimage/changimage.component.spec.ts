import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangimageComponent } from './changimage.component';

describe('ChangimageComponent', () => {
  let component: ChangimageComponent;
  let fixture: ComponentFixture<ChangimageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangimageComponent]
    });
    fixture = TestBed.createComponent(ChangimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

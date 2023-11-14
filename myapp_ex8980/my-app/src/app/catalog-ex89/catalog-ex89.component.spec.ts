import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogEx89Component } from './catalog-ex89.component';

describe('CatalogEx89Component', () => {
  let component: CatalogEx89Component;
  let fixture: ComponentFixture<CatalogEx89Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogEx89Component]
    });
    fixture = TestBed.createComponent(CatalogEx89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

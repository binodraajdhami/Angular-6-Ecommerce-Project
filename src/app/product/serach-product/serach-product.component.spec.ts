import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachProductComponent } from './serach-product.component';

describe('SerachProductComponent', () => {
  let component: SerachProductComponent;
  let fixture: ComponentFixture<SerachProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

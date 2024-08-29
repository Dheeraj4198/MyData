import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVillaNumberComponent } from './add-villa-number.component';

describe('AddVillaNumberComponent', () => {
  let component: AddVillaNumberComponent;
  let fixture: ComponentFixture<AddVillaNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVillaNumberComponent]
    });
    fixture = TestBed.createComponent(AddVillaNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

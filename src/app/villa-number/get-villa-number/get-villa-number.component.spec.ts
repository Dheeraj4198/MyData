import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVillaNumberComponent } from './get-villa-number.component';

describe('GetVillaNumberComponent', () => {
  let component: GetVillaNumberComponent;
  let fixture: ComponentFixture<GetVillaNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetVillaNumberComponent]
    });
    fixture = TestBed.createComponent(GetVillaNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

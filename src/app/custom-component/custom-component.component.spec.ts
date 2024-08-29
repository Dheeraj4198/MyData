import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentComponent } from './custom-component.component';

describe('CustomComponentComponent', () => {
  let component: CustomComponentComponent;
  let fixture: ComponentFixture<CustomComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomComponentComponent]
    });
    fixture = TestBed.createComponent(CustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

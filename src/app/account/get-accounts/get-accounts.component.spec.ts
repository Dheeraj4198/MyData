import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetAccountsComponent } from './get-accounts.component';



describe('GetAccountsComponent', () => {
  let component: GetAccountsComponent;
  let fixture: ComponentFixture<GetAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAccountsComponent]
    });
    fixture = TestBed.createComponent(GetAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

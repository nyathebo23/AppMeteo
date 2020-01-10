import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressesRegisteredComponent } from './adresses-registered.component';

describe('AdressesRegisteredComponent', () => {
  let component: AdressesRegisteredComponent;
  let fixture: ComponentFixture<AdressesRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressesRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressesRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

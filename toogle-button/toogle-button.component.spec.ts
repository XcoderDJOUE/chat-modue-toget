import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleButtonComponent } from './toogle-button.component';

describe('ToogleButtonComponent', () => {
  let component: ToogleButtonComponent;
  let fixture: ComponentFixture<ToogleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

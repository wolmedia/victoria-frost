import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMessage3Component } from './modal-message3.component';

describe('ModalMessage3Component', () => {
  let component: ModalMessage3Component;
  let fixture: ComponentFixture<ModalMessage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMessage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMessage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

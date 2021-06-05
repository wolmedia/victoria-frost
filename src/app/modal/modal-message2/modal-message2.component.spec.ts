import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMessage2Component } from './modal-message2.component';

describe('ModalMessage2Component', () => {
  let component: ModalMessage2Component;
  let fixture: ComponentFixture<ModalMessage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMessage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMessage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

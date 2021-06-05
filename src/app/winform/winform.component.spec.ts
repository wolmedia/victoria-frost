import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinformComponent } from './winform.component';

describe('WinformComponent', () => {
  let component: WinformComponent;
  let fixture: ComponentFixture<WinformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

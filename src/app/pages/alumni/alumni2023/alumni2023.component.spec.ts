import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumni2023Component } from './alumni2023.component';

describe('Alumni2023Component', () => {
  let component: Alumni2023Component;
  let fixture: ComponentFixture<Alumni2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alumni2023Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumni2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

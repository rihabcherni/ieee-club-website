import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumni2021Component } from './alumni2021.component';

describe('Alumni2021Component', () => {
  let component: Alumni2021Component;
  let fixture: ComponentFixture<Alumni2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alumni2021Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumni2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

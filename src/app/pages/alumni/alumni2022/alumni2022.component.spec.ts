import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumni2022Component } from './alumni2022.component';

describe('Alumni2022Component', () => {
  let component: Alumni2022Component;
  let fixture: ComponentFixture<Alumni2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alumni2022Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumni2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

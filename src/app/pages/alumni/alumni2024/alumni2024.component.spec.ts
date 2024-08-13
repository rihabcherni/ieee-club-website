import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumni2024Component } from './alumni2024.component';

describe('Alumni2024Component', () => {
  let component: Alumni2024Component;
  let fixture: ComponentFixture<Alumni2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alumni2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alumni2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

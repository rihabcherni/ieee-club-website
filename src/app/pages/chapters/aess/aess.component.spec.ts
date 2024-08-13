import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AessComponent } from './aess.component';

describe('AessComponent', () => {
  let component: AessComponent;
  let fixture: ComponentFixture<AessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

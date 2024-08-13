import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WieComponent } from './wie.component';

describe('WieComponent', () => {
  let component: WieComponent;
  let fixture: ComponentFixture<WieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

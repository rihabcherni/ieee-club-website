import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IasComponent } from './ias.component';

describe('IasComponent', () => {
  let component: IasComponent;
  let fixture: ComponentFixture<IasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

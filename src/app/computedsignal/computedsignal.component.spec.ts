import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedsignalComponent } from './computedsignal.component';

describe('ComputedsignalComponent', () => {
  let component: ComputedsignalComponent;
  let fixture: ComponentFixture<ComputedsignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedsignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedsignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

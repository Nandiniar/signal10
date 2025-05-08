import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasignalComponent } from './datasignal.component';

describe('DatasignalComponent', () => {
  let component: DatasignalComponent;
  let fixture: ComponentFixture<DatasignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatasignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatasignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

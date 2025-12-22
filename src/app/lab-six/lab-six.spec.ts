import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSix } from './lab-six';

describe('LabSix', () => {
  let component: LabSix;
  let fixture: ComponentFixture<LabSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabSix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

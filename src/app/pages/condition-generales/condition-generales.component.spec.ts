import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionGeneralesComponent } from './condition-generales.component';

describe('ConditionGeneralesComponent', () => {
  let component: ConditionGeneralesComponent;
  let fixture: ComponentFixture<ConditionGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionGeneralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

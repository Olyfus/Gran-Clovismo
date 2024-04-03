import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuriesComponent } from './ecuries.component';

describe('EcuriesComponent', () => {
  let component: EcuriesComponent;
  let fixture: ComponentFixture<EcuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcuriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

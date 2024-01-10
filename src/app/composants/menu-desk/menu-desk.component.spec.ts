import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDeskComponent } from './menu-desk.component';

describe('MenuDeskComponent', () => {
  let component: MenuDeskComponent;
  let fixture: ComponentFixture<MenuDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuDeskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

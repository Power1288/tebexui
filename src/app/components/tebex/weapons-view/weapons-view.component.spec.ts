import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsViewComponent } from './weapons-view.component';

describe('WeaponsViewComponent', () => {
  let component: WeaponsViewComponent;
  let fixture: ComponentFixture<WeaponsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

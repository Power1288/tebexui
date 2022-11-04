import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TebexComponent } from './tebex.component';

describe('TebexComponent', () => {
  let component: TebexComponent;
  let fixture: ComponentFixture<TebexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TebexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TebexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanchisseurComponent } from './blanchisseur.component';

describe('BlanchisseurComponent', () => {
  let component: BlanchisseurComponent;
  let fixture: ComponentFixture<BlanchisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlanchisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlanchisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

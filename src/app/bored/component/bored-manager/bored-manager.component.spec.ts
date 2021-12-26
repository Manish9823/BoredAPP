import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredManagerComponent } from './bored-manager.component';

describe('BoredManagerComponent', () => {
  let component: BoredManagerComponent;
  let fixture: ComponentFixture<BoredManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoredManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

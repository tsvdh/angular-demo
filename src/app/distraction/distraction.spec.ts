import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Distraction } from './distraction';

describe('Distraction', () => {
  let component: Distraction;
  let fixture: ComponentFixture<Distraction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Distraction],
    }).compileComponents();

    fixture = TestBed.createComponent(Distraction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

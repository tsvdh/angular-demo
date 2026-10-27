import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DistractionHolder } from './distraction-holder';

describe('DistractionHolder', () => {
  let component: DistractionHolder;
  let fixture: ComponentFixture<DistractionHolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistractionHolder],
    }).compileComponents();

    fixture = TestBed.createComponent(DistractionHolder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

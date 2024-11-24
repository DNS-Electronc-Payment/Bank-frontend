import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDataEnteringComponent } from './card-data-entering.component';

describe('CardDataEnteringComponent', () => {
  let component: CardDataEnteringComponent;
  let fixture: ComponentFixture<CardDataEnteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDataEnteringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDataEnteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

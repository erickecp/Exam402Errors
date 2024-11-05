import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcgCardComponent } from './tcg-card.component';

describe('TcgCardComponent', () => {
  let component: TcgCardComponent;
  let fixture: ComponentFixture<TcgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcgCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TcgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

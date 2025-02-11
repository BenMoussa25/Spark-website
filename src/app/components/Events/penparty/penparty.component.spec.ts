import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenpartyComponent } from './penparty.component';

describe('PenpartyComponent', () => {
  let component: PenpartyComponent;
  let fixture: ComponentFixture<PenpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenpartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

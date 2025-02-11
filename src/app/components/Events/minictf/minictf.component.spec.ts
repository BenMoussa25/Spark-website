import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinictfComponent } from './minictf.component';

describe('MinictfComponent', () => {
  let component: MinictfComponent;
  let fixture: ComponentFixture<MinictfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinictfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinictfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkctfComponent } from './sparkctf.component';

describe('SparkctfComponent', () => {
  let component: SparkctfComponent;
  let fixture: ComponentFixture<SparkctfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparkctfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparkctfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

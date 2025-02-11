import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybermazeComponent } from './cybermaze.component';

describe('CybermazeComponent', () => {
  let component: CybermazeComponent;
  let fixture: ComponentFixture<CybermazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybermazeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybermazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

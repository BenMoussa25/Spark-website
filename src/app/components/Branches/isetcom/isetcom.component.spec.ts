import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsetcomComponent } from './isetcom.component';

describe('IsetcomComponent', () => {
  let component: IsetcomComponent;
  let fixture: ComponentFixture<IsetcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsetcomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsetcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

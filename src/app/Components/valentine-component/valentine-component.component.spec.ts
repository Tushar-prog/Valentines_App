import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineComponentComponent } from './valentine-component.component';

describe('ValentineComponentComponent', () => {
  let component: ValentineComponentComponent;
  let fixture: ComponentFixture<ValentineComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValentineComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValentineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

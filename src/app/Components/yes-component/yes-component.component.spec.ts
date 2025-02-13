import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesComponentComponent } from './yes-component.component';

describe('YesComponentComponent', () => {
  let component: YesComponentComponent;
  let fixture: ComponentFixture<YesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

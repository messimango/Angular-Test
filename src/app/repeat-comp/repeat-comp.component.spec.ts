import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatCompComponent } from './repeat-comp.component';

describe('RepeatCompComponent', () => {
  let component: RepeatCompComponent;
  let fixture: ComponentFixture<RepeatCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

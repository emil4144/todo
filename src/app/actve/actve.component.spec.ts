import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActveComponent } from './actve.component';

describe('ActveComponent', () => {
  let component: ActveComponent;
  let fixture: ComponentFixture<ActveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateIdComponent } from './activate-id.component';

describe('ActivateIdComponent', () => {
  let component: ActivateIdComponent;
  let fixture: ComponentFixture<ActivateIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

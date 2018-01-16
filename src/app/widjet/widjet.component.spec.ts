import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidjetComponent } from './widjet.component';

describe('WidjetComponent', () => {
  let component: WidjetComponent;
  let fixture: ComponentFixture<WidjetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidjetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

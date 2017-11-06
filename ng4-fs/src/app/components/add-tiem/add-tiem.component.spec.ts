import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiemComponent } from './add-tiem.component';

describe('AddTiemComponent', () => {
  let component: AddTiemComponent;
  let fixture: ComponentFixture<AddTiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

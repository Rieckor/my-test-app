/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrecisionComponent } from './precision.component';

describe('PrecisionComponent', () => {
  let component: PrecisionComponent;
  let fixture: ComponentFixture<PrecisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

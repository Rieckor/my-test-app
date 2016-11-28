/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegeditComponent } from './regedit.component';

describe('RegeditComponent', () => {
  let component: RegeditComponent;
  let fixture: ComponentFixture<RegeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

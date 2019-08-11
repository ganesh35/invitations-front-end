import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteesComponent } from './_invitees.component';

describe('InviteesComponent', () => {
  let component: InviteesComponent;
  let fixture: ComponentFixture<InviteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

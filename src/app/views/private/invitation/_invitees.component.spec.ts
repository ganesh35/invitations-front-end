import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteesComponent } from './_invitees.component';
import { CoreModule } from 'core';
import { PaginationModule, TabsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

describe('InviteesComponent', () => {
  let component: InviteesComponent;
  let fixture: ComponentFixture<InviteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteesComponent ],
      imports: [ CoreModule, PaginationModule, TabsModule, FormsModule, HttpClientModule ]
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

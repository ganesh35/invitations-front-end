import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InviteesComponent } from './_invitees.component';
import { EditComponent } from './edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'core';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent, InviteesComponent ],
      imports: [ RouterTestingModule, CoreModule, FormsModule, HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

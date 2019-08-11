import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Page404Component } from './page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'core';
import { RouterTestingModule } from '@angular/router/testing';
describe('Page404Component', () => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404Component ],
      imports: [ HttpClientModule, CoreModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

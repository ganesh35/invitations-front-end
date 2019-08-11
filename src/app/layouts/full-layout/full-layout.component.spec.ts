import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FullLayoutComponent } from './full-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'core';
import { HttpClientModule } from '@angular/common/http';
describe('FullLayoutComponent', () => {
  let component: FullLayoutComponent;
  let fixture: ComponentFixture<FullLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutComponent ], 
      imports: [ 
          RouterTestingModule, CoreModule,
          HttpClientModule
      ],
      providers: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



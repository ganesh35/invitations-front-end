import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopnavComponent } from './topnav.component';
import { LoadingComponent } from '../../components/tools/loading/loading.component';
import { SearchComponent } from '../_search/search.component';
import { FiltersComponent } from '../_filters/filters.component';
import { FilterItemsComponent } from '../_filters/filter.items.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopnavComponent', () => {
  let component: TopnavComponent;
  let fixture: ComponentFixture<TopnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavComponent, SearchComponent,  FiltersComponent, LoadingComponent, FilterItemsComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

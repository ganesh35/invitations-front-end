import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoadingComponent } from './components/tools/loading/loading.component';
import { AlertComponent } from './components/tools/alert/alert.component';
import { LogService, StorageService, NetService, AuthGuard, AuthService } from './services/index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LibHttpInterceptor} from './interceptor/lib-http.interceptor';
import { FooterComponent } from './views/footer/footer.component';
import { CookiePolicyComponent } from './views/cookie-policy/cookie-policy.component';
import { TopnavComponent } from './views/topnav/topnav.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './views/_search/search.component';
import { FiltersComponent } from './views/_filters/filters.component';

@NgModule({
  declarations: [ 
  	LoadingComponent, AlertComponent, FooterComponent, CookiePolicyComponent, TopnavComponent, 
  	SearchComponent, FiltersComponent
  ],
  imports: [ CommonModule, RouterModule ],
  exports: [ 
  	LoadingComponent, AlertComponent, FooterComponent, CookiePolicyComponent, 
  	TopnavComponent, SearchComponent, FiltersComponent
  ],
  providers: [
  	LogService, StorageService, NetService, AuthGuard, AuthService, AuthService,
  	{ provide: HTTP_INTERCEPTORS, useClass: LibHttpInterceptor, multi: true }, 
  ]
})
export class CoreModule { }

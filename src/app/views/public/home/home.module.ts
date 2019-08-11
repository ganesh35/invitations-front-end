import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'core';

@NgModule({
  imports: [
    HomeRoutingModule, 
    CoreModule,
    CommonModule
  ],
  declarations: [ HomeComponent ],
  providers: []
})
export class HomeModule { }

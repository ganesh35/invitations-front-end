import { NgModule } from '@angular/core';

import { AWSInboundRoutingModule } from './awsInbound-routing.module';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'core';

import { AWSInboundLoginComponent } from './awsInboundLogin.component';
import { AWSInboundLogoutComponent } from './awsInboundLogout.component';

@NgModule({
  imports: [
    AWSInboundRoutingModule,
    CommonModule,
    CoreModule
  ],
  declarations: [ AWSInboundLoginComponent, AWSInboundLogoutComponent ],
  providers: []
})
export class AWSInboundModule { }

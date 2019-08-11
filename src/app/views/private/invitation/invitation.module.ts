import { NgModule } from '@angular/core';
import { InvitationRoutingModule } from './invitation-routing.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'core';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { EditComponent } from './edit.component';
import { InviteesComponent } from './_invitees.component';

import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    InvitationRoutingModule, 
    CoreModule,
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  declarations: [ ListComponent, AddComponent, EditComponent, InviteesComponent ],
  providers: []
})
export class InvitationModule { }

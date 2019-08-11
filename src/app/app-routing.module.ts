import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { Page404Component } from './views/page404/page404.component';

import { AuthGuard } from 'core';
const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: '',
        component: FullLayoutComponent,
        children: [{
        	path: '',
            loadChildren: './views/public/home/home.module#HomeModule'
        }]
    },
    {
        path: '',
        component: SimpleLayoutComponent,
        children: [{
            path: '_aws',
            loadChildren: './views/public/_aws/awsInbound.module#AWSInboundModule'
        }]
    },
    {
        path: '',
        component: FullLayoutComponent,
        canActivate: [ AuthGuard ],
        children: [{
            path: 'invitations',
            loadChildren: './views/private/invitation/invitation.module#InvitationModule'
        }]
    },    
    { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

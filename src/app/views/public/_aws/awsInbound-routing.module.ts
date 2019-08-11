import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AWSInboundLoginComponent } from './awsInboundLogin.component';
import { AWSInboundLogoutComponent } from './awsInboundLogout.component';
const routes: Routes = [
  	{
    	path: '',
    	data: {
      		title: 'Auth'
    	},
    	children:[
	      {
	        path: 'login',
	        component: AWSInboundLoginComponent,
	        data: {
	          title: 'Machine 2 Machine communication for Login'
	        }
	      },
        {
	        path: 'logout',
	        component: AWSInboundLogoutComponent,
	        data: {
	          title: 'Machine 2 Machine communication for Logout'
	        }
	      }
	    ]
  	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AWSInboundRoutingModule {}

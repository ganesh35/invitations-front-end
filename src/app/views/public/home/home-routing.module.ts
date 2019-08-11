import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
const routes: Routes = [
  	{
    	path: '',
    	data: {
      		title: 'Home'
    	},
    	children:[
	      {
	        path: '',
	        component: HomeComponent
	      },
        {
          path: 'theme/:name',
          component: HomeComponent,
        },
        {
          path: 'type/:name',
          component: HomeComponent,
        },
        {
          path: 'destination/:country',
          component: HomeComponent,
        },
        {
          path: 'destination/:country/:location',
          component: HomeComponent,
        }
	    ]
  	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

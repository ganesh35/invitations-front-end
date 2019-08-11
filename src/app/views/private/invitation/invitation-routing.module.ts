import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'core';
import { ListComponent } from './list.component';
import { AddComponent } from './add.component';
import { EditComponent } from './edit.component';


const routes: Routes = [
  	{
    	path: '',
    	data: {
      		title: 'Invitation'
    	},
    	children:[
	      {
          path: '',
          canActivate: [AuthGuard],
          component: ListComponent,
          data: {
            title: 'Invitations'
          }
        },
        {
          path: 'list',
          canActivate: [AuthGuard],
          component: ListComponent,
          data: {
            title: 'Manage Invitations'
          }
        },
        {
          path: 'new',
          canActivate: [AuthGuard],
          component: AddComponent,
          data: {
            title: 'New'
          }
        },
        
      {
            path: 'edit/:id',
            canActivate: [AuthGuard],
            component: EditComponent,
            data: {
              title: 'Edit'
            }
        }
	    ]
  	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationRoutingModule {}

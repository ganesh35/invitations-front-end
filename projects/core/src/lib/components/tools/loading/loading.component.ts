import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  	selector: 'lib-loading',
  	styleUrls: ['./loading.component.css'],
  	template: `
    <!-- Start page loading -->
    <div id="preloader" >
        <div class="row loader">
            <div class="loader-icon"></div>
        </div>
    </div>
    <!-- End page loading -->
  	`,
})
export class LoadingComponent{
	env: any;
	constructor(){
		this.env = environment;
	}
}

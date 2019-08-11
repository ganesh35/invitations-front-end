import { Component, OnInit} from '@angular/core';
import { LogService } from 'core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`  
})
export class AppComponent implements OnInit {
	constructor(
		private _logService: LogService,
	){
		this._logService.info("-- Initiated: src/app/app.component:constructor");
	}
  	ngOnInit(){}
}

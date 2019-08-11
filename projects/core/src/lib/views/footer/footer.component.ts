import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	today: number = Date.now();
  	constructor(
  		private _logService: LogService
  	){
  		this._logService.info("-- Initiated: projects/core/src/lib/views/footer/footer.component:constructor");
  	}
	ngOnInit() {}
}

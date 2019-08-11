import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService, LogService } from '../../services/index';
@Component({
  selector: 'lib-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
	  @Output() hideFilters: EventEmitter<any> =new EventEmitter();
    isLoading: boolean = false;
    filterData: any;

  	constructor(
      public _auth: AuthService,
  		private _logService: LogService,
      
  	) {
  		this._logService.info("-- Initiated: core/src/lib/views/_filters/filters.component:constructor");
  	}
  	ngOnInit() {
  	}
    clearFilters(){
        this.hideFilters.emit();
    }
}

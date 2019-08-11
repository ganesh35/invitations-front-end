import { Component, OnInit } from '@angular/core';
import { NetService, LogService } from 'core';
import { Title }     from '@angular/platform-browser';

@Component({
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

	constructor(
        private _titleService: Title,
    	  private _netService: NetService,
        private _logService: LogService
    ){
        this._logService.info("-- Initiated: src/app/views/pages/page404.component:constructor");
    }

  isLoading: boolean = true;
  ngOnInit() {
  	this._titleService.setTitle('Page not found: 400');
    this.isLoading = false;

  }

}

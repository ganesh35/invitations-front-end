import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NetService, LogService, AuthService } from 'core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	isLoading: boolean = true;
	pageContent: any;
	errorMsg: string = "";
    constructor(
    	private _title: Title,
    	private _netService: NetService,
        private _logService: LogService,
    	public _auth: AuthService
    ){
    	this._logService.info("-- Initiated: src/app/views/home/home.component:constructor");
    }
    ngOnInit() {
    	this.loadContent();
    }

    loadContent(){
        this.isLoading = true;
        let url = '/page/home.json';
        this._netService.getContent(url).subscribe(
            res => {
                if(res) {
                    this.pageContent = res;
                    this._title.setTitle(this.pageContent['Title']);
                } else {
                	this.errorMsg="Error loading page";	
                }
                this.isLoading = false; 
            },
            error => { 
                this.isLoading = false; 
                this.errorMsg="Page not found";
            }
        );
    }

}

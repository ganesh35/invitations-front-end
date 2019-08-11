import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NetService, LogService, AuthService, DialogService } from 'core';
import { Invitation }              from '../../../models/index';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	isLoading: boolean = true;
	pageContent: any;
	errorMsg: string = "";
    successMsg:string = '';
    public item = new Invitation();

    constructor(
    	private _title: Title,
    	private _netService: NetService,
        private _logService: LogService,
    	public _auth: AuthService,
        public _dialogService: DialogService
    ){}
    ngOnInit() {
    	this.loadContent();
    }

    clearMsg(){
        this.errorMsg = '';
        this.successMsg = '';
    }
    loadContent(){
        this.isLoading = true;
        let url = '/page/invitation.new.json';
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
	  
    createItem(){
    	if(this.item.title.length <= 0 || this.item.description.length <= 0){
    		this.errorMsg=this.pageContent['Messages']['ValidationError'];
    		return false;
    	}
        this.isLoading = true;
        this._netService.post( 'invitations', this.item)
        .subscribe(
            res => { 
                if(res['error'] != undefined){
                    this.errorMsg = res['error'].join("<br/>");
                } else {
                    this.successMsg=this.pageContent['Messages']['CreateSuccess'];
                }              
              this.isLoading = false;
            },
            error =>  {
              this.errorMsg = error.status + ': ' + error.error;
              this.isLoading = false;
            }
        );
    }    


}




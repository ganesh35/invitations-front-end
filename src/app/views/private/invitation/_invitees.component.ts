import { Component, OnInit, Input } from '@angular/core';
import { NetService, LogService } from 'core';
import { Invitee }              from '../../../models/index';

@Component({
  selector: 'app-invitees',
  templateUrl: './_invitees.component.html',
  styleUrls: ['./_invitees.component.css']
})
export class InviteesComponent implements OnInit {
	@Input('invitationId') invitationId: number;
	items:Invitee[];
	
	invitees: string;
	isLoading: boolean = true;
	pageContent: any;
  	errorMsg: string = "";
    successMsg:string = '';
    constructor(
    	private _netService: NetService,
        private _logService: LogService
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
        let url = '/invitee.json';
        this._netService.getContent(url).subscribe(
            res => {
                if(res) {
                    this.pageContent = res;
                    console.log("invitation Id " + this.invitationId);
                    this.loadItems();
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

    currentPage: number = 0;
    itemsPerPage: number = 10;
    payload: any;
    loadItems(){
    	//if(!this.invitationId ) return false;
    	this.isLoading = false; 

    	let url = 'invitees/'+this.invitationId+'?limit=' + this.itemsPerPage + '&page=' + this.currentPage;
    	this._netService.get(url).subscribe(
            res => {
                if(res) {
                    this.payload = res;
                    if(this.payload['items']){
                        this.payload['items']= JSON.parse(this.payload['items']);
                    }
                } else {
                	this.errorMsg=this.pageContent['Messages']['LoadError'];
                }
                this.isLoading = false; 
            },
            error => { 
                this.isLoading = false; 
                this.errorMsg=this.pageContent['Messages']['UnknownError'];
            }
        );
    }

    saveItems(){
    	if(!this.invitees){
    		this.errorMsg=this.pageContent['Messages']['ValidationError'];
    		return false;
    	}
        this.isLoading = true;
        this._netService.post( 'invitees/'+this.invitationId, {invitees: this.invitees})
        .subscribe(
            res => { 
                if(res['error'] != undefined){
                    this.errorMsg = res['error'].join("<br/>");
                } else {
                    this.successMsg=this.pageContent['Messages']['CreateSuccess'];
                    this.successMsg += '<br/>Sent to: ' + res['valid'].join(",");
                    this.successMsg += '<br/>Already Sent to: ' + res['ignored'].join(",");
                    this.successMsg += '<br/>Not Sent to: ' + res['invalid'].join(",");
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

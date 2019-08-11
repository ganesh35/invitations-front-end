import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NetService, LogService, DialogService } from 'core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invitation }              from '../../../models/index';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	isLoading: boolean = true;
	pageContent: any;
	errorMsg: string = "";
    successMsg:string = '';
    public item = new Invitation();
    id:string=''

    constructor(
    	private _title: Title,
    	private _netService: NetService,
        private _logService: LogService,
        public _dialogService: DialogService,
        private _route: ActivatedRoute,
        private _router: Router,
    ){}
    ngOnInit() {
    	this._route.params.subscribe(params => {
            if (params['id']){
            	this.id = params['id'];
            } 
        });
        this.loadContent();
    }

    clearMsg(){
        this.errorMsg = '';
        this.successMsg = '';
    }
    loadContent(){
        this.isLoading = true;
        let url = '/page/invitation.edit.json';
        this._netService.getContent(url).subscribe(
            res => {
                if(res) {
                    this.pageContent = res;
                    this._title.setTitle(this.pageContent['Title']);
                    this.loadItem();
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
	  

	payload: any;
	loadItem(){
        this.isLoading = true;
        let url = 'invitations/' + this.id ;
        this._netService.get(url).subscribe(
            res => {
                if(res) {
                    this.payload = res;
                    if(this.payload['item']){
                        this.item= this.payload['item'];
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

    saveItem(){
    	if(this.item.title.length <= 0 || this.item.description.length <= 0){
    		this.errorMsg=this.pageContent['Messages']['ValidationError'];
    		return false;
    	}
        this.isLoading = true;
        this._netService.put( 'invitations/'+this.item.id, this.item)
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


    deleteItem(){
    	if (this._dialogService.showDialog(this.pageContent['Messages']['Delete']  + ': ' + this.item.title + '?'  ) != true) return false;
        this.isLoading = true;
        let apiUrl = 'invitations/' + this.item.id;
        this._netService.delete(apiUrl)
            .subscribe(
                res => {
                    this.successMsg=this.pageContent['Messages']['DeleteSuccess'];

                    this.isLoading = false;
                    this._router.navigate(['/invitations']);
                },
                error => {
                    this.isLoading = false;
                    this.errorMsg=this.pageContent['Messages']['UnknownError'];
                }
            );
    }
}




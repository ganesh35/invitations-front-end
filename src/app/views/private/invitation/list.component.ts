import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { NetService, LogService, AuthService, DialogService } from 'core';

@Component({
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
	isLoading: boolean = true;
	pageContent: any;
	errorMsg: string = "";
    successMsg:string = '';
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
        let url = '/page/invitation.list.json';
        this._netService.getContent(url).subscribe(
            res => {
                if(res) {
                    this.pageContent = res;
                    this._title.setTitle(this.pageContent['Title']);
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
        this.isLoading = true;
        let url = 'invitations?limit=' + this.itemsPerPage + '&page=' + this.currentPage;

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



    deleteItem(index: string) {

        if (this._dialogService.showDialog(this.pageContent['Messages']['Delete']  + ': ' + this.payload['items'][index]['title'] + '?'  ) != true) return false;
        this.isLoading = true;
        let apiUrl = 'invitations/' + this.payload['items'][index]['id'];
        this._netService.delete(apiUrl)
            .subscribe(
                res => {
                    this.successMsg=this.pageContent['Messages']['DeleteSuccess'];
                    this.payload['items'].splice(index, 1);
                    this.isLoading = false;
                },
                error => {
                    this.isLoading = false;
                    this.errorMsg=this.pageContent['Messages']['UnknownError'];
                }
            );

    }
}

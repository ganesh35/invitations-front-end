import { Component, OnInit } from '@angular/core';
import { LogService, NetService, StorageService } from '../../services/index';


@Component({
  selector: 'lib-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.css']
})
export class CookiePolicyComponent implements OnInit {
    areCookiesAccepted: any = false;
    isLoading: boolean = false;
    cookieContent: any;
  	constructor(
  		private _logService: LogService,
      private _storage: StorageService,
      private _netService: NetService,
  	){
  		  this._logService.info("-- Initiated: projects/core/src/lib/views/cookie-policy/cookie-policy.component:constructor");
  	}

  	ngOnInit(){
        this.areCookiesAccepted= this._storage.getStorage('CookiesAccepted');
        this._logService.info("----  Cookies accepted : " + this.areCookiesAccepted);
        this.loadContent();
  	}

    concentChange(res: boolean){
        this._logService.info("----  Cookies accepted : " +  res );
        this.areCookiesAccepted=res;
        this._storage.setStorage('CookiesAccepted', true);
    }


    loadContent(){
        this.cookieContent =  JSON.parse(this._storage.getStorage('cookieContent'));
        if(this.cookieContent ) return false;

        this.isLoading = true;
        this._netService.getContent('/cookie.json').subscribe(
            res => {
                if(res) {
                    this.cookieContent = res;  
                    this._storage.setStorage('cookieContent', JSON.stringify(this.cookieContent));
                }
                this.isLoading = false;
            },
            error => { this.isLoading = false; }
        );
    }
}

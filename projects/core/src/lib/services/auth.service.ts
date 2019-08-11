import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  	constructor(
    	private _http: HttpClient,
    	private _router: Router,
      private _storage: StorageService
  	) {}

    public errorMsg: string = '';
    login(_authKey: string) {
        let apiUrl = environment.cognito.awsCognitoDomain + 'oauth2/token';
        let httpOptions = {
  	        headers: new HttpHeaders({
  	            'Content-Type': 'application/x-www-form-urlencoded',
  	            'Authorization': 'Basic ' + btoa(environment.cognito.appClientId + ":" + environment.cognito.appClientSecret)
  	        })
  	    };

        let body = new URLSearchParams();
        body.set('grant_type', 'authorization_code');
        body.set('client_id', environment.cognito.appClientId);
        body.set('code', _authKey);
        body.set('redirect_uri', environment.cognito.login_redirect_uri);

  	    this._http.post(apiUrl, body.toString(), httpOptions)
        .subscribe(res => {
              if(res != undefined){
                    if(res['id_token']) this._storage.setStorage("id_token", res['id_token']);
                    if(res['access_token']) this._storage.setStorage("access_token", res['access_token']);
                    if(res['refresh_token']) this._storage.setStorage("refresh_token", res['refresh_token']);
                    console.log("goto invitations");
                    this._router.navigate(['/invitations']);
                }
                return true;
            },
            error => {
               this.errorMsg = error.error.error;
               return error;
            }
        );
    }

    logout(): boolean {
    	this._storage.removeStorage('id_token');
      this._storage.removeStorage('access_token');
      this._storage.removeStorage('refresh_token');
      let link = environment.cognito.awsCognitoDomain + 'logout?client_id=' + environment.cognito.appClientId + '&logout_uri='+environment.cognito.logout_uri ;
      window.location.href = link;
      return true;
  	}
    clearMsg(){
        this.errorMsg='';
    }

    getToken(){
      let token = this._storage.getStorage('id_token');
      if(token == undefined || token == null) return false;
      return token;
    }
    isLogged(){
      let token = this._storage.getStorage('id_token');
      if(token == undefined || token == null) return false;
      return true;   
    }


    parseJWT(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
    getUser(){
      let token = this.getToken();
      if(token){
          return this.parseJWT(this.getToken());
      }
      return null;
    }

    // ------------------- external links of aws auth ---------------------
    doLoginLink(){
        let link = environment.cognito.awsCognitoDomain + 'login?response_type=code&client_id=' + environment.cognito.appClientId + '&redirect_uri='+environment.cognito.login_redirect_uri ;
        console.log(link)
        window.location.href = link;
    }

    doRegisterLink(){
        let link = environment.cognito.awsCognitoDomain + 'signup?response_type=code&client_id=' + environment.cognito.appClientId + '&redirect_uri='+environment.cognito.login_redirect_uri ;
        console.log(link)
        window.location.href = link;
    }

    doForgotPassLink(){
        let link = environment.cognito.awsCognitoDomain + 'forgotPassword?response_type=code&client_id=' + environment.cognito.appClientId + '&redirect_uri='+environment.cognito.login_redirect_uri ;
        console.log(link)
        window.location.href = link;
    }
}

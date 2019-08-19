import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthService, NetService } from 'core';

@Component({
    template: `
    <div class="container text-center" *ngIf="loading && !_auth.errorMsg">
      Authenticating your access, Please wait .....<br/>
      </div>
      <lib-loading *ngIf="loading"></lib-loading>
      <lib-alert *ngIf="_auth.errorMsg" [alertType]="'danger'" [alertContent]="_auth.errorMsg" (alertClose)="this._auth.clearMsg()"></lib-alert>
      
        <p *ngIf="_auth.errorMsg" class="animated fadeIn text-center">
            <button class="btn btn-primary my-2" (click)="_auth.doLoginLink()"  ><i class="fa fa-fw fa-sign-in"></i> Login</button> &nbsp;
            <button class="btn btn-secondary my-2" (click)="_auth.doRegisterLink()"><i class="fa fa-fw fa-user-plus"></i> Register</button>
        </p>
    `
})


export class AWSInboundLoginComponent implements OnInit {
    loading:boolean = true;
    code: string;
    constructor(
      private _route: ActivatedRoute,
      public _auth: AuthService,
      private _router: Router,
      private _netservice: NetService
    ) {}
  	ngOnInit() {
        this.code = this._route.snapshot.queryParamMap.get("code")
        this.login();
    }

    result: any;
    login(){
        this._auth.login(this.code);
        this.loading = false;
    }
}

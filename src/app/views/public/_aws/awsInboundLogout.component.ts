import { Component, OnInit } from '@angular/core';
import { AuthService } from 'core';

@Component({
    styleUrls: ['./awsInbound.component.css'],
    template: `
    <lib-loading *ngIf="loading"></lib-loading>
    <div class="container">
    <section class="jumbotron text-center border" *ngIf="!loading">

      <h1 class="jumbotron-heading">You have successfully logged out!</h1>
      <p class="lead text-muted">If you accidentally logged out, or you want to register please follow below links. </p>
      <p *ngIf="!_auth.isLogged()">
        <button class="btn btn-primary my-2" (click)="_auth.doLoginLink()"  ><i class="fa fa-fw fa-sign-in"></i> Login</button> &nbsp;
        <button class="btn btn-secondary my-2" (click)="_auth.doRegisterLink()"><i class="fa fa-fw fa-user-plus"></i> Register</button>
      </p>

      </section>
    </div>
    `
})
export class AWSInboundLogoutComponent implements OnInit {
    loading:boolean = true;
    constructor( public _auth: AuthService) {}
  	ngOnInit() {
          this.loading = false;
    }
}

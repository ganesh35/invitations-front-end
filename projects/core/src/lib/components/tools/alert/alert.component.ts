import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  	selector: 'lib-alert',
  	template: `
<div class="alert alert-dismissible fade show" [ngClass]="'alert-' + alertType"  role="alert" >
  <span [innerHtml]="alertContent"></span>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close" (click)="closeAlert()">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  	`,
})
export class AlertComponent{
	@Input('alertType') alertType: string;
	@Input('alertContent') alertContent: any;
	@Output() alertClose = new EventEmitter();
	constructor(){}
	closeAlert(){
		this.alertClose.emit();
	}
}

import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class DialogService {
    // Usage:
    // if(this._helpers.showDialog('') != true) return false;
	showDialog(msg: string){
		if(msg == '' ) msg = "Are you sure!";
		if (confirm(msg)) {
    		return true;
		} else {
    		return false;
		}
	}
}	

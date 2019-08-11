import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router, private _auth: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._auth.isLogged() ) {
            return true;
        }
        this._router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}

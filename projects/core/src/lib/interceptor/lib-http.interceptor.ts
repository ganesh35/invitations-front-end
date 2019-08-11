import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { LogService } from '../services/log.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LibHttpInterceptor implements HttpInterceptor {
    constructor(
        private _logService: LogService,
        private _auth: AuthService
    ) {
        this._logService.info("-- Initiated: core/src/lib/interceptor/lib-http.interceptor:constructor");
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        if (!request.headers.has('Authorization') && this._auth.getToken() ) {
            request = request.clone({ headers: request.headers.set('Authorization', 'bearer ' + this._auth.getToken()) });
        }

        //request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this._logService.info('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this._logService.error("-- Start: core/src/lib/interceptor/lib-http.interceptor:intercept");
                this._logService.error('event--->>>', data);
                this._logService.error("-- End: core/src/lib/interceptor/lib-http.interceptor:intercept");
                return throwError(error);
            }));
    }


}

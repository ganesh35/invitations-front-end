import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LogService } from '../services/log.service';

/**
 * A service handle all http requests.
 * NetService is available as an injectable class, with methods to handle all http requests 
*/

@Injectable({
  providedIn: 'root'
})
export class NetService {
  /**
   * Required dependencies for this service class
   * param {HttpClient} _http
   */

    constructor(
        private _http: HttpClient,
        private _logService: LogService
    ) {
    	this._logService.info("-- Initiated: core/src/lib/services/net.service:constructor");
    }

  /**
   * Get method to request page content
   *
   * param {string} url
   */
    getContent<T>(url:string) {
        this._logService.info('-- Running: core/src/lib/services/net.service:getContent')
        return this._http.get(environment.contentUrl + '/'+environment.defaultLang + url, this.getRequestHeaders());
    }

  /**
   * Get method to request data without authentication
   *
   * param {string} url
   */
    get<T>(url:string) {
    	  this._logService.info('-- Running: core/src/lib/services/net.service:get')
        return this._http.get(environment.apiUrl + url, this.getRequestHeaders());
    }

   /**
   * Put method to create a record without authentication
   *
   * param {string} url
   * param {any} data
   */
    put<T>(url:string, data:any){
        return this._http.put( environment.apiUrl + url, data, this.getRequestHeaders());
    }


    post<T>(url:string, data:any){
        return this._http.post(environment.apiUrl + url, data, this.getRequestHeaders());
    }

    delete<T>(url:string){
        return this._http.delete(environment.apiUrl + url, this.getRequestHeaders());
    }

   	/**
   	* Gets the request headers to add to the outgoing request
   	*
   	* returns {{}}
   	*/
  	getRequestHeaders(): {} {
        return { headers: {} }
  	}





}

import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    /**
     * Required dependencies for this service class
     * param {LogService} _logService
     */
    constructor(
        private _logService: LogService
    ) {
        this._logService.info("-- Initiated: core/src/lib/services/Storage:constructor" + environment.storageUID);
    }

    /*  setStorage: writes a key into localStorage setting a expire time
      params:
          key <string>     : localStorage key
          value <string>   : localStorage value
      returns:
          <boolean> : telling if operation succeeded
    */
    setStorage(key, value) {
        key = environment.storageUID + '_' + key;
        try {
            localStorage.setItem(key, value);
            this._logService.debug('setStorage: success setting key [' + key + '] with value [' + value + ']');
        } catch (e) {
            this._logService.debug('setStorage: Error setting key [' + key + '] in localStorage: ' + JSON.stringify(e));
            return false;
        }
        return true;
    }


    /*  removeStorage: removes a key from localStorage and its sibling expiracy key
        params:
            key <string>     : localStorage key to remove
        returns:
            <boolean> : telling if operation succeeded
     */
    removeStorage(key) {
        key = environment.storageUID + '_' + key;
        try {
            localStorage.removeItem(key);
        } catch (e) {
            this._logService.debug('removeStorage: Error removing key [' + key + '] from localStorage: ' + JSON.stringify(e));
            return false;
        }
        return true;
    }


    /*  getStorage: retrieves a key from localStorage previously set with setStorage().
      params:
          key <string> : localStorage key
      returns:
          <string> : value of localStorage key
          null : in case of expired key or failure
     */
    getStorage(key) {
        key = environment.storageUID + '_' + key;
        try {
            var value = localStorage.getItem(key);
            return value;
        } catch (e) {
            this._logService.debug('getStorage: Error reading key [' + key + '] from localStorage: ' + JSON.stringify(e));
            return null;
        }
    }


}



import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LogService {
  /**
   * Private read-only variable to determine if logging to console should be enabled.
   * type {boolean}
   * private
   */
  //private readonly _enabled = !environment.production;
  private readonly _enabled = environment.logging;

  /**
   * The default constructor.
   */
  constructor() {
      this.info("-- Initiated: core/src/lib/services/log.service:constructor");
  }

  /**
   * Outputs a debug level statement to console.
   * returns {()}
   */
  public get debug() {
    return this._enabled ? console.debug.bind(console) : this._noop;
  }

  /**
   * Outputs an info level statement to console.
   * returns {()}
   */
  public get info() {
    return this._enabled ? console.info.bind(console) : this._noop;
  }

  /**
   * Outputs a log statement to console.
   * returns {()}
   */
  public get log() {
    return this._enabled ? console.log.bind(console) : this._noop;
  }

  /**
   * Outputs a warning level statement to console.
   * returns {()}
   */
  public get warn() {
    return this._enabled ? console.warn.bind(console) : this._noop;
  }

  /**
   * Ouputs an error level statement to console.
   * returns {()}
   */
  public get error() {
    return this._enabled ? console.error.bind(console) : this._noop;
  }

  /**
   * Private noop method.
   */
  private _noop() {
  }

}

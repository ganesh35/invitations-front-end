import { TestBed, inject } from '@angular/core/testing';
import { NetService } from './net.service';
import { HttpClientModule  } from '@angular/common/http';
//import { LogService } from './log.service';

describe('NetService', () => {
  	beforeEach(() => TestBed.configureTestingModule({
  		imports: [HttpClientModule],
  		providers: [
  //        	LogService 
      	]
  	}));

/*  it('should be created', () => {
    const netService: NetService = TestBed.get(NetService);
    expect(netService).toBeTruthy();
  });
  */
  it('should be created', inject([NetService], (service: NetService) => {
    expect(service).toBeTruthy();
  }));
  
});

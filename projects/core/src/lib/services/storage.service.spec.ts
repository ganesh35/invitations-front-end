import { TestBed, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { LogService } from './log.service';
describe('StorageService', () => {
	beforeEach(() => TestBed.configureTestingModule({
  		providers: [
          	LogService 
      	]
  	}));
  	it('should be created', inject([StorageService], (service: StorageService) => {
    	expect(service).toBeTruthy();
  	}));


    it('should fail retrieving variable isTrue', inject([StorageService], (service: StorageService) => {
      service.removeStorage('isTrue');
    	expect(service.getStorage('isTrue')).toBeFalsy();
  	}));

  	it('should pass retrieving variable isTrue', inject([StorageService], (service: StorageService) => {
  		service.setStorage('isTrue', true);
    	expect(service.getStorage('isTrue')).toBeTruthy();
  	}));

    it('should fail retrieving variable isTrue as it is deleted', inject([StorageService], (service: StorageService) => {
      service.removeStorage('isTrue');
      expect(service.getStorage('isTrue')).toBeFalsy();
    }));


});


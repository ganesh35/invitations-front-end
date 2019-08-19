import { TestBed, inject } from '@angular/core/testing';
import { DialogService } from './dialog.service';

describe('DialogService', () => {
  	beforeEach(() => TestBed.configureTestingModule({
  		  imports: [ ]
  	}));

    it('should be created', () => {
        const service: DialogService = TestBed.get(DialogService);
        expect(service).toBeTruthy();
    });

});

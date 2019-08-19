import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { HttpClientModule  } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  	beforeEach(() => TestBed.configureTestingModule({
  		  imports: [ HttpClientModule, RouterTestingModule ],
  		  providers: [
          	AuthGuard 
      	]
  	}));

    it('should be created', () => {
        const service: AuthGuard = TestBed.get(AuthGuard);
        expect(service).toBeTruthy();
    });

  
});

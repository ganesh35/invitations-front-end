import { TestBed, inject  } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibHttpInterceptor } from './lib-http.interceptor';
import { LogService } from '../services/log.service';

describe('LibHttpInterceptor', () => {
	beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
          LogService,
      ]
   }));

  it('should create an instance',
    inject([LogService], (_logService: LogService) => {
      expect(new LibHttpInterceptor(_logService)).toBeTruthy();
  })
);
});




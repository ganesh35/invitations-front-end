import { TestBed } from '@angular/core/testing';
import { LogService } from './log.service';
import { environment } from '../../environments/environment';

describe('LogService', () => {
  let service: LogService;

  describe('Enabled logging', () => {
    beforeAll(() => {
      environment.logging  = true;
      service = new LogService();
    });

    it('should call console.log', () => {
      const spy = spyOn(console, 'log').and.stub();
      service.log('Test');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Test');
    });

    it('should call console.warn', () => {
      const spy = spyOn(console, 'warn').and.stub();
      service.warn('Test');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Test');
    });

    it('should call console.info', () => {
      const spy = spyOn(console, 'info').and.stub();
      service.info('Test');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Test');
    });

    it('should call console.error', () => {
      const spy = spyOn(console, 'error').and.stub();
      service.error('Test');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Test');
    });

    it('should call console.debug', () => {
      const spy = spyOn(console, 'debug').and.stub();
      service.debug('Test');
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith('Test');
    });
  });

  describe('Disabled logging', () => {
    beforeAll(() => {
      environment.logging  = false;
      service = new LogService();
    });

    it('should call console.log', () => {
      const spy = spyOn(console, 'log').and.stub();
      service.log('Test');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call console.warn', () => {
      const spy = spyOn(console, 'warn').and.stub();
      service.warn('Test');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call console.info', () => {
      const spy = spyOn(console, 'info').and.stub();
      service.info('Test');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call console.error', () => {
      const spy = spyOn(console, 'error').and.stub();
      service.error('Test');
      expect(spy).not.toHaveBeenCalled();
    });

    it('should call console.debug', () => {
      const spy = spyOn(console, 'debug').and.stub();
      service.debug('Test');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
/*
describe('LogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogService = TestBed.get(LogService);
    expect(service).toBeTruthy();
  });
});
*/
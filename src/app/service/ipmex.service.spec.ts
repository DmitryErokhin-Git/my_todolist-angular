/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IpmexService } from './ipmex.service';

describe('Service: Ipmex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpmexService]
    });
  });

  it('should ...', inject([IpmexService], (service: IpmexService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IpmortExportService } from './import-export';

describe('Service: Ipmex', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpmortExportService]
    });
  });

  it('should ...', inject([IpmortExportService], (service: IpmortExportService) => {
    expect(service).toBeTruthy();
  }));
});

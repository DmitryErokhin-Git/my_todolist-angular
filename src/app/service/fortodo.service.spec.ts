/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FortodoService } from './fortodo.service';

describe('Service: Fortodo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FortodoService]
    });
  });

  it('should ...', inject([FortodoService], (service: FortodoService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { TesttttttService } from './testttttt.service';

describe('TesttttttService', () => {
  let service: TesttttttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesttttttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataapiproviderService } from './dataapiprovider.service';

describe('DataapiproviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataapiproviderService = TestBed.get(DataapiproviderService);
    expect(service).toBeTruthy();
  });
});

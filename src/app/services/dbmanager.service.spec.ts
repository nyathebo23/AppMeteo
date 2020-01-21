import { TestBed } from '@angular/core/testing';

import { DbmanagerService } from './dbmanager.service';

describe('DbmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbmanagerService = TestBed.get(DbmanagerService);
    expect(service).toBeTruthy();
  });
});

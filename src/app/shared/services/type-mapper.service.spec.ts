import { TestBed } from '@angular/core/testing';

import { TypeMapperService } from './type-mapper.service';

describe('TypeMapperService', () => {
  let service: TypeMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

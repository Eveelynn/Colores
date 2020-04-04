import { TestBed } from '@angular/core/testing';

import { ColoresService } from './colores.service';

describe('ColoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColoresService = TestBed.get(ColoresService);
    expect(service).toBeTruthy();
  });
});

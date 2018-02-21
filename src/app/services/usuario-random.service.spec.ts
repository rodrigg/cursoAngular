import { TestBed, inject } from '@angular/core/testing';

import { UsuarioRandomService } from './usuario-random.service';

describe('UsuarioRandomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioRandomService]
    });
  });

  it('should be created', inject([UsuarioRandomService], (service: UsuarioRandomService) => {
    expect(service).toBeTruthy();
  }));
});

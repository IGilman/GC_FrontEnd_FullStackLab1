import { TestBed } from '@angular/core/testing';

import { TodoserService } from './todoser.service';

describe('TodoserService', () => {
  let service: TodoserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

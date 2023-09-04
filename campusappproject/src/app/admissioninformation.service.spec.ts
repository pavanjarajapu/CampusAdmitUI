import { TestBed } from '@angular/core/testing';

import { AdmissioninformationService } from './admissioninformation.service';

describe('AdmissioninformationService', () => {
  let service: AdmissioninformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissioninformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

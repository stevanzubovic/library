import { TestBed } from '@angular/core/testing';

import { NewsLetterSubscriptionService } from './news-letter-subscription.service';

describe('NewsLetterSubscriptionService', () => {
  let service: NewsLetterSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsLetterSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('should add a message', () => {
      service.add('Message added');
      expect(service.messages).toContain('Message added');
    });
  });

  describe('clear', () => {
    beforeEach(() => {
      service.add('Default message');
    });

    it('should clear the message list', () => {
      service.clear();
      expect(service.messages).toEqual([]);
    });
  });
});

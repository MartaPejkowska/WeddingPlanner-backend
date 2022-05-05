import { Test, TestingModule } from '@nestjs/testing';
import { WeddingsService } from './weddings.service';

describe('WeddingsService', () => {
  let service: WeddingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeddingsService],
    }).compile();

    service = module.get<WeddingsService>(WeddingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

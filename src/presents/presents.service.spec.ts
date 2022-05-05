import { Test, TestingModule } from '@nestjs/testing';
import { PresentsService } from './presents.service';

describe('PresentsService', () => {
  let service: PresentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresentsService],
    }).compile();

    service = module.get<PresentsService>(PresentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

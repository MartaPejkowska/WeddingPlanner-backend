import { Test, TestingModule } from '@nestjs/testing';
import { BridesService } from './brides.service';

describe('BridesService', () => {
  let service: BridesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BridesService],
    }).compile();

    service = module.get<BridesService>(BridesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

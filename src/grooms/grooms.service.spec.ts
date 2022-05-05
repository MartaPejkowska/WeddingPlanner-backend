import { Test, TestingModule } from '@nestjs/testing';
import { GroomsService } from './grooms.service';

describe('GroomsService', () => {
  let service: GroomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroomsService],
    }).compile();

    service = module.get<GroomsService>(GroomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

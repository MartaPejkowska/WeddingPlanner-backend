import { Test, TestingModule } from '@nestjs/testing';
import { LayoutsService } from './layouts.service';

describe('LayoutsService', () => {
  let service: LayoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayoutsService],
    }).compile();

    service = module.get<LayoutsService>(LayoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

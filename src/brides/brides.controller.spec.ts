import { Test, TestingModule } from '@nestjs/testing';
import { BridesController } from './brides.controller';
import { BridesService } from './brides.service';

describe('BridesController', () => {
  let controller: BridesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BridesController],
      providers: [BridesService],
    }).compile();

    controller = module.get<BridesController>(BridesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

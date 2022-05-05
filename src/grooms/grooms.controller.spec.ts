import { Test, TestingModule } from '@nestjs/testing';
import { GroomsController } from './grooms.controller';
import { GroomsService } from './grooms.service';

describe('GroomsController', () => {
  let controller: GroomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroomsController],
      providers: [GroomsService],
    }).compile();

    controller = module.get<GroomsController>(GroomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

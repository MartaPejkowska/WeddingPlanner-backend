import { Test, TestingModule } from '@nestjs/testing';
import { PresentsController } from './presents.controller';
import { PresentsService } from './presents.service';

describe('PresentsController', () => {
  let controller: PresentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresentsController],
      providers: [PresentsService],
    }).compile();

    controller = module.get<PresentsController>(PresentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

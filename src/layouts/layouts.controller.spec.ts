import { Test, TestingModule } from '@nestjs/testing';
import { LayoutsController } from './layouts.controller';
import { LayoutsService } from './layouts.service';

describe('LayoutsController', () => {
  let controller: LayoutsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LayoutsController],
      providers: [LayoutsService],
    }).compile();

    controller = module.get<LayoutsController>(LayoutsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

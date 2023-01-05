import { Test, TestingModule } from '@nestjs/testing';
import { PropiertiesController } from './propierties.controller';
import { PropiertiesService } from './propierties.service';

describe('PropiertiesController', () => {
  let controller: PropiertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropiertiesController],
      providers: [PropiertiesService],
    }).compile();

    controller = module.get<PropiertiesController>(PropiertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

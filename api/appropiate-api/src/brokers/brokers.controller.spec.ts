import { Test, TestingModule } from '@nestjs/testing';
import { BrokersController } from './brokers.controller';
import { BrokersService } from './brokers.service';

describe('BrokersController', () => {
  let controller: BrokersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrokersController],
      providers: [BrokersService],
    }).compile();

    controller = module.get<BrokersController>(BrokersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

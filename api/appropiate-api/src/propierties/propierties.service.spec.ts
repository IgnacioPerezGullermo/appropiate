import { Test, TestingModule } from '@nestjs/testing';
import { PropiertiesService } from './propierties.service';

describe('PropiertiesService', () => {
  let service: PropiertiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropiertiesService],
    }).compile();

    service = module.get<PropiertiesService>(PropiertiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MassagesController } from './massages.controller';

describe('MassagesController', () => {
  let controller: MassagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MassagesController],
    }).compile();

    controller = module.get<MassagesController>(MassagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

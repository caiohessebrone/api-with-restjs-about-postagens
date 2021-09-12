import { Test, TestingModule } from '@nestjs/testing';
import { PostagemService } from './postagem.service';

describe('PostagemService', () => {
  let provider: PostagemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostagemService],
    }).compile();

    provider = module.get<PostagemService>(PostagemService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

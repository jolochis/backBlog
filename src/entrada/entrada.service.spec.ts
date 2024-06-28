import { Test, TestingModule } from '@nestjs/testing';
import { EntradaService } from './entrada.service';
import { PrismaService } from '../prisma/prisma.service';
import { entrada } from '@prisma/client';

describe('EntradaService', () => {
  let service: EntradaService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntradaService,
        {
          provide: PrismaService,
          useValue: {
            entrada: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<EntradaService>(EntradaService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createPost', () => {
    it('should create a new post with current date', async () => {
      const newPostData: entrada = {
        id: 1,
        titulo: 'Nuevo Post',
        autor: 'Nuevo Autor',
        contenido: 'Nuevo Contenido',
        fecha: new Date(), // Usar new Date() para la fecha actual
      };
      const mockCreatedPost: entrada = { id: 1, ...newPostData };
      jest
        .spyOn(prismaService.entrada, 'create')
        .mockResolvedValue(mockCreatedPost);

      const result = await service.createPost(newPostData);
      expect(result).toEqual(mockCreatedPost);
      expect(prismaService.entrada.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          ...newPostData,
          fecha: expect.any(Date), // Verificar que la fecha sea de tipo Date
        }),
      });
    });
  });

  describe('updatePost', () => {
    it('should update an existing post with current date', async () => {
      const postId = 1;
      const updatedPostData: entrada = {
        id: postId,
        titulo: 'Post Actualizado',
        autor: 'Autor Actualizado',
        contenido: 'Contenido Actualizado',
        fecha: new Date(), // Usar new Date() para la fecha actual
      };
      const mockUpdatedPost: entrada = { ...updatedPostData };
      jest
        .spyOn(prismaService.entrada, 'update')
        .mockResolvedValue(mockUpdatedPost);

      const result = await service.updatePost(postId, updatedPostData);
      expect(result).toEqual(mockUpdatedPost);
      expect(prismaService.entrada.update).toHaveBeenCalledWith({
        where: { id: postId },
        data: expect.objectContaining({
          ...updatedPostData,
          fecha: expect.any(Date), // Verificar que la fecha sea de tipo Date
        }),
      });
    });
  });
});

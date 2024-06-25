import { Injectable } from '@nestjs/common';
import { entrada } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class EntradaService {
  constructor(private prisma: PrismaService) {}

  async getAllPost(): Promise<entrada[]> {
    return this.prisma.entrada.findMany();
  }
  async getSinglePost(id: number): Promise<entrada> {
    return this.prisma.entrada.findUnique({
      where: {
        id,
      },
    });
  }
  async createPost(data: entrada): Promise<entrada> {
    return this.prisma.entrada.create({ data });
  }
  async updatePost(id: number, data: entrada): Promise<entrada> {
    return this.prisma.entrada.update({ where: { id }, data });
  }
  async deletePost(id: number): Promise<entrada> {
    return this.prisma.entrada.delete({
      where: { id },
    });
  }
}

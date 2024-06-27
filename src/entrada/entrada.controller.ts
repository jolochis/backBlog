import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { entrada } from '@prisma/client';

@Controller('entrada')
export class EntradaController {
  constructor(private entradaService: EntradaService) {}

  @Get()
  async getAllPost() {
    try {
      const allPost = await this.entradaService.getAllPost();
      return allPost;
    } catch (error) {
      throw new Error(error);
    }
  }
  @Get(':id')
  async getSinglePost(@Param('id') id: string) {
    try {
      const post = await this.entradaService.getSinglePost(Number(id));
      if (!post) throw new NotFoundException('Entrada no encontrada');
      return post;
    } catch (error) {
      throw new Error(error);
    }
  }
  @Post()
  async createPost(@Body() data: entrada) {
    try {
      const createdPost = await this.entradaService.createPost(data);
      return createdPost;
    } catch (error) {
      throw new Error(error);
    }
  }
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    try {
      const deletedPost = await this.entradaService.deletePost(Number(id));
      if (!deletedPost) throw new NotFoundException('Entrada no encontrada');
      return deletedPost;
    } catch (error) {
      throw new Error(error);
    }
  }
  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() data: entrada) {
    try {
      const updatePost = this.entradaService.updatePost(Number(id), data);
      return updatePost;
    } catch (error) {
      throw new Error(error);
    }
  }
}
@Controller('busqueda')
export class busquedaController {
  constructor(private entradaService: EntradaService) {}
  @Get('')
  async search(@Query('q') searchTerm: string) {
    try {
      return this.entradaService.searchPost(searchTerm);
    } catch (error) {
      throw new Error(error);
    }
  }
}

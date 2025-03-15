import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    const { limit = 10, offset = 0 } = pagination;
    return `Retorna todos os recados. Limit: ${limit}, Offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Essa rota retorna o recado ID ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Recado ${id} deletado com sucesso`;
  }
}

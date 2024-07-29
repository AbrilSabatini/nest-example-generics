import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { BaseService } from './base.service';
import { Base } from './base.entity';
import { DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { PaginationDto } from '../dto/pagination-common.dto';

@Controller()
export abstract class BaseController<
  T extends Base,
  CreateDto extends DeepPartial<T>,
  UpdateDto extends QueryDeepPartialEntity<T>,
> {
  constructor(
    private readonly baseService: BaseService<T, CreateDto, UpdateDto>,
  ) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.baseService.create(createDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.baseService.findAll(paginationDto);
  }

  @Get('include-deletes')
  findAllIncludeDeletea(@Query() paginationDto: PaginationDto) {
    return this.baseService.findAllIncludeDeletes(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.baseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateDto) {
    return this.baseService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.baseService.remove(id);
  }
}

import { NotFoundException } from '@nestjs/common';
import { Base } from './base.entity';
import { DeepPartial, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { PaginationDto } from '../dto/pagination-common.dto';
import { getPagingData } from '../pagination/pagination-data';

export abstract class BaseService<
  T extends Base,
  CreateDto extends DeepPartial<T>,
  UpdateDto extends QueryDeepPartialEntity<T>,
> {
  constructor(protected readonly repository: Repository<T>) {}

  create(createDto: CreateDto): Promise<T> {
    return this.repository.save(createDto);
  }

  async findAll(
    paginatioDto: PaginationDto,
  ): Promise<{ data: T[]; meta: any }> {
    const { page, limit } = paginatioDto;

    const entities = await this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
      where: { deletedAt: null },
    });

    return {
      data: entities,
      meta: getPagingData(entities, page, limit),
    };
  }

  async findAllIncludeDeletes(
    paginatioDto: PaginationDto,
  ): Promise<{ data: T[]; meta: any }> {
    const { page, limit } = paginatioDto;

    const entities = await this.repository.find({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data: entities,
      meta: getPagingData(entities, page, limit),
    };
  }

  async findOne(id: number): Promise<T> {
    const entity = await this.repository.findOne({ where: { id } } as any); // Busca la entidad por el id
    if (!entity) {
      // Si 'entity' es null, devuelve una excepción
      throw new NotFoundException(`Entity with id ${id} not found`);
    }
    return entity;
  }

  async update(id: number, updateDto: UpdateDto): Promise<T> {
    await this.findOne(id); // Verifica que la entidad existe
    await this.repository.update(id, updateDto); // Si existe la actualiza, si no devuelve una excepción
    const updatedEntity = await this.findOne(id); // Busca la entidad actualizada
    return updatedEntity; // Retorna la entidad actualizada
  }

  async remove(id: number): Promise<string> {
    await this.findOne(id); // Verifica que la entidad existe
    await this.repository.delete(id); // Si existe la elimina, si no devuelve una excepción
    return `Entity with id ${id} deleted`;
  }
}

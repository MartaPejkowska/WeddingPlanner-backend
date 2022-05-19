import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import {DatabaseFile} from './entities/databaseFile.entity';
 
@Injectable()
class DatabaseFilesService {
  constructor(
    @InjectRepository(DatabaseFile)
    private databaseFilesRepository: Repository<DatabaseFile>,
  ) {}
 
  async uploadDatabaseFile(dataBuffer: Buffer, filename: string) {
    const newFile = await this.databaseFilesRepository.create({
      filename,
      data: dataBuffer
    })
    await this.databaseFilesRepository.save(newFile);
    return newFile;
  }
 
  async getFileById(fileId: number) {
    const file = await this.databaseFilesRepository.findOne(fileId);
    if (!file) {
      throw new NotFoundException();
    }
    return file;
  }

  async deleteFileWithQueryRunner(fileId: number, queryRunner: QueryRunner) {
    const deleteResponse = await queryRunner.manager.delete(DatabaseFile, fileId);
    if (!deleteResponse.affected) {
      throw new NotFoundException();
    }
  }
}
 
export default DatabaseFilesService;
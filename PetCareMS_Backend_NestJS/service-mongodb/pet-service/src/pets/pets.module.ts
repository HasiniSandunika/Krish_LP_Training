import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetRepository } from './repository/Pet.repository';
import { PetsController } from './controller/pets.controller';
import { PetsService } from './service/pets.service';
import { Pet, PetSchema } from './schemas/Pet.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Pet.name, schema: PetSchema }
  ])],
  controllers: [PetsController],
  providers: [PetsService, PetRepository]
})

export class PetsModule {}

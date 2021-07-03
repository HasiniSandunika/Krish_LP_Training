import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { OwnerModule } from './owner/owner.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';

@Module({
  imports: [PetsModule, OwnerModule, MongooseModule.forRoot(MONGO_CONNECTION, { useFindAndModify: false })],
})
export class AppModule {}

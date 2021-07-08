import { Module } from '@nestjs/common';
import { OwnerModule } from './owner/owner.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';

@Module({
  imports: [OwnerModule, MongooseModule.forRoot(MONGO_CONNECTION, { useFindAndModify: false })],
})
export class AppModule {}

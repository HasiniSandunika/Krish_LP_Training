import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerController } from './controller/owner.controller';
import { OwnerRepository } from './repository/Owner.repository';
import { Owner, OwnerSchema } from './schemas/Owner.schema';
import { OwnerService } from './service/owner.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Owner.name, schema: OwnerSchema }
  ])],
  controllers: [OwnerController],
  providers: [OwnerService, OwnerRepository]
})
export class OwnerModule {}

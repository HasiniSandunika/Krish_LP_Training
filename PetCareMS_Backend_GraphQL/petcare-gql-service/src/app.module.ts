import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PetModule } from './pet/pet.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [PetModule, GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
  }), TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root@123',
      database: 'details',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
  }), OwnerModule],
  controllers: [],
  providers: [],
})

export class AppModule {}

import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest',
      password: 'nest',
      database: 'nestdb',
      schema: 'nest', //Choose a specfic schema (default: user name, then public)
      entities: [Customer],
      synchronize: true,
    }),
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

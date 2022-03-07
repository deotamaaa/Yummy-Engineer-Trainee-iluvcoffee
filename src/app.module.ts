import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { toUnicode } from 'punycode';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoffeeRatingModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_PIPE,
      useValue: ValidationPipe
    }],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {KnexModule} from "nestjs-knex";
import {ormconfig} from "./config/orm.config";

@Module({
  imports: [ConfigModule.forRoot(), KnexModule.forRootAsync(ormconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

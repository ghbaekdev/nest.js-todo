import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const { port } = config.get('server');
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createDatabase } from 'typeorm-extension';

async function bootstrap() {
  (async () => {
    await createDatabase({
      ifNotExist: true,
      options: {
        charset: 'utf8mb4_bin',
        type: 'mysql',
        host: process.env.HOST,
        port: +process.env.DBPORT,
        username: process.env.USERDB,
        password: process.env.PASSWORDB,
        database: process.env.DATABASE,
      },
    });
  })();

  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: '*' });
  await app.listen(process.env.PORT);
}
bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 데코레이터가 없는 DTO는 거르기
      forbidNonWhitelisted: true, // 데코레이터가 없는 DTD는 요청을 막기
      transform: true, // 원하는 타입으로 변경해 주는 옵션
    }),
  );
  await app.listen(3000);
}
bootstrap();

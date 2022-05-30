import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const port: number = 3000;

  console.log(`\n \t Server listening on port ${port}...`);
}
bootstrap();

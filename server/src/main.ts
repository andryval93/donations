import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { renderFile } from 'ejs'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API Dashboard Connector')
    .setDescription('With this API created a submitter')
    .setVersion('1.0.0')
    .addTag('connector-dashboard')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.
    engine('html', renderFile).
    setBaseViewsDir(join(__dirname, '../')).
    useStaticAssets(join(__dirname, '../public'), {
      index: false,
      redirect: false
    })

  app.enableCors();
  await app.listen(process.env.PORT || 3000)
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { RenderModule } from 'nest-next';
import * as next from 'next';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
	const dev = process.env.NODE_ENV !== 'production';
	console.log(process.env.NODE_ENV);
	console.log(dev);
	const app = next({ dev });

	await app.prepare();

	const server = await NestFactory.create<NestExpressApplication>(AppModule);
	server.useStaticAssets(join(__dirname, '..', 'static'));

	const renderer = server.get(RenderModule);
	renderer.register(server, app);

	await server.listen(process.env.PORT || 3000);
}
bootstrap();

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello() {
		return [
			{ a: 'b', b: 'c' },
			{ a: 'b', b: 'c' },
			{ a: 'b', b: 'c' },
			{ a: 'b', b: 'c' },
			{ a: 'b', b: 'c' },
			{ a: 'b', b: 'c' },
		];
	}
}

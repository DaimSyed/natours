import type { RequestHandler } from 'express';

import { MetaDataKeys } from '../../enums';

export function createRouterMiddlewareBefore(middleware: RequestHandler) {
	return function (target: any) {
		const middlewares = Reflect.getMetadata(MetaDataKeys.middleware, target.prototype) || [];
		Reflect.defineMetadata(MetaDataKeys.middleware, [...middlewares, middleware], target.prototype);
	};
}

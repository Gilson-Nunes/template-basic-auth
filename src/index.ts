import Fastify, { type FastifyServerOptions } from 'fastify';
import { getDbPool } from './providers/databaseProvider';
import { apiRoutes } from './routes/apiRoutes';

export function serverBuild(opts: FastifyServerOptions = {}) {
	const app = Fastify(opts);

	const dbPool = getDbPool();
	app.decorateRequest('dbPool', {
		getter: () => dbPool,
	});

	app.register(apiRoutes);

	return app;
}

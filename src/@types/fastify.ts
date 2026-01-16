import 'fastify';
import type { Pool } from 'pg';

declare module 'fastify' {
	interface FastifyRequest {
		dbPool: Pool;
	}
}

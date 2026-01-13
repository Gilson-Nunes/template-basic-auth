import type { FastifyInstance } from 'fastify';
import { createTestServer } from '../helpers/server';

export let server: FastifyInstance;

beforeAll(async () => {
	server = await createTestServer();
}, 60000);

afterAll(async () => {
	await server.close();
});

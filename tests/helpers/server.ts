import { serverBuild } from '@/index';

export const createTestServer = async () => {
	const testServer = serverBuild();
	await testServer.ready();
	return testServer;
};

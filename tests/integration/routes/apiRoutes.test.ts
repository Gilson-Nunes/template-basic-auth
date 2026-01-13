import { server } from '../setup';

describe('Api Routes', () => {
	describe('GET "/" (integration)', () => {
		it('should return data object and status 200', async () => {
			const response = await server.inject({
				method: 'GET',
				url: '/',
			});

			expect(response.statusCode).toBe(200);
			expect(response.json()).toEqual({
				data: {
					success: true,
					message: 'Home',
				},
			});
		});
	});
});

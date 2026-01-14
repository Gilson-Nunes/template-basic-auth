import bcrypt from 'bcrypt';
import type { Mock } from 'vitest';
import { encryptPassword } from '@/providers/encryptionProvider';

vi.mock('bcrypt');

describe('Encryption Provider', () => {
	describe('Encrypt', () => {
		it('should encrypt the password', async () => {
			const password = 'password';
			const salt = 'salt';
			const hashedPassword = 'hashedPassword';
			(bcrypt.genSalt as Mock).mockResolvedValue(salt);
			(bcrypt.hash as Mock).mockResolvedValue(hashedPassword);

			const result = await encryptPassword(password);

			expect(bcrypt.genSalt).toHaveBeenCalledWith(10);
			expect(bcrypt.hash).toHaveBeenCalledWith(password, salt);
			expect(result).toBe(hashedPassword);
		});
	});
});

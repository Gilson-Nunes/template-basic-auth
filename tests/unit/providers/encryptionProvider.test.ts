import bcrypt from 'bcrypt';
import type { Mock } from 'vitest';
import {
	comparePassword,
	encryptPassword,
} from '@/providers/encryptionProvider';

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

	describe('Compare', () => {
		it('should compare the password', async () => {
			const password = 'password';
			const hashPassword = 'hashedPassword';
			(bcrypt.compare as Mock).mockResolvedValue(true);

			const result = await comparePassword(password, hashPassword);

			expect(bcrypt.compare).toHaveBeenCalledWith(password, hashPassword);
			expect(result).toBe(true);
		});
	});
});

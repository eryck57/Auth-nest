import crypto from 'crypto';

export default function GenerateCode(): string {
  let code = '';
  const numbers = '0123456789';
  for (let i = 0; i < 6; i++) {
    const randomindex = crypto.randomInt(10);
    code += numbers.charAt(randomindex);
  }
  return code;
}

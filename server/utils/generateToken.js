import jwt from 'jsonwebtoken';

const generateToken = (userId, expiresIn = '7d') => {
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined');
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

export default generateToken;
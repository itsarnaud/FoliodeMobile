import JWT from 'expo-jwt';
import { User } from '@/interface/user';

export function extractPayload(token: string): User {
  return JWT.decode(token, '') as User;
}
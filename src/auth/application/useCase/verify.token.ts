import jwt from 'jsonwebtoken';
import { SECRET_JWT } from '../../domain/constant/secret';
import { TokenRepository } from '../../domain/repository/verify.token';


export class JwtRepository implements TokenRepository {
    verifyToken(token: string): any {
        return jwt.verify(token, SECRET_JWT);
    }
}
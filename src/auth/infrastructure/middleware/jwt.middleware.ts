import { Request, Response, NextFunction } from 'express';
import { JwtRepository } from '../../application/useCase/verify.token';

const tokenRepository = new JwtRepository();

export async function verifyToKen(req: Request, res: Response, next: NextFunction) {
      const authorizationHeader = req.headers.authorization;
      

      if (!authorizationHeader) {
        res.status(401).send({
          status: 'error',
          message: 'Authentication token not provided'
        });
        return;
      }

      const token = authorizationHeader.split(' ')[1];

     try {

        const decode = tokenRepository.verifyToken(token);

        (req as any).user = decode;
        next();
     } catch (error) {
        console.log('There was an error validating the token: ' + error);
        res.status(500).send({
            status: 'error',
            message: 'Invalid authentication token',
            data: error
        })
     }
}
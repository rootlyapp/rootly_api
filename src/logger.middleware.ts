import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      'Request: %s - %s -%s [%s]',
      req.method,
      req.hostname,
      req.path,
      req.ip,
    );
    next();
  }
}

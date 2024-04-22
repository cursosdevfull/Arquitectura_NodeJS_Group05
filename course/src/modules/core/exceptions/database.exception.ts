import { BaseException } from './base.exception';

export class DatabaseException extends BaseException {
  constructor(message: string = '') {
    super();
    this.status = 500;
    this.message = message || 'Database error';
  }
}

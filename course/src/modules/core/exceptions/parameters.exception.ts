import { BaseException } from './base.exception';

export class ParametersException extends BaseException {
  constructor(message: string = '') {
    super();
    this.status = 411;
    this.message = message || 'Parameters are missing or invalid';
  }
}

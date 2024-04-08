import { MinValueVO, UrlVO } from '@value-objects';

export class Session {
  private date: Date;
  private url: string;
  private readonly sessionNumber: number;

  constructor(date: Date, url: string, sessionNumber: number) {
    MinValueVO.create(sessionNumber, 1, "Session number must be at least 1");
    UrlVO.create(url);

    this.date = date;
    this.url = url;
    this.sessionNumber = sessionNumber;
  }
}

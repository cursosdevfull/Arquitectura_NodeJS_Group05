import { MinValueVO } from '@value-objects';

export enum PaymentMethod {
  CreditCard = "Credit Card",
  DebitCard = "Debit Card",
  Cash = "Cash",
  Check = "Check",
  PayPal = "PayPal",
  Venmo = "Venmo",
  Zelle = "Zelle",
  ApplePay = "Apple Pay",
  GooglePay = "Google Pay",
  SamsungPay = "Samsung Pay",
  Other = "Other",
}

export class Payment {
  private amount: number;
  private date: Date;
  private readonly paymentNumber: number;
  private readonly paymentMethod: PaymentMethod;

  constructor(
    amount: number,
    date: Date,
    paymentNumber: number,
    paymentMethod: PaymentMethod
  ) {
    MinValueVO.create(amount, 0, "Amount must be positive");
    MinValueVO.create(paymentNumber, 1, "Payment number must be at least 1");

    this.amount = amount;
    this.date = date;
    this.paymentNumber = paymentNumber;
    this.paymentMethod = paymentMethod;
  }
}

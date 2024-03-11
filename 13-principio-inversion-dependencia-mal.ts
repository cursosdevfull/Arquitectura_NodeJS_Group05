class PayU {
  products: string[] = [];
  total: number = 0;

  generateTransaction(products: string[], total: number) {
    return "transaction completed";
  }
}

class TwoCheckOut {
  products: string[] = [];
  total: number = 0;

  makePayment(products: string[], total: number) {
    return "payment done";
  }
}

class Payment {
  provider: TwoCheckOut;

  constructor(provider: TwoCheckOut) {
    this.provider = provider;
  }

  checkout(products: string[], total: number) {
    return this.provider.makePayment(products, total);
  }
}

const payU = new PayU();
const twoCheckOut = new TwoCheckOut();
const payment = new Payment(twoCheckOut);

const products = ["product 1", "product 2"];
const total = 50;

console.log(payment.checkout(products, total));

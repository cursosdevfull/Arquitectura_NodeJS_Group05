interface IProvider {
  doTransaction(products: string[], total: number): string;
}

class PayU implements IProvider {
  products: string[] = [];
  total: number = 0;

  doTransaction(products: string[], total: number) {
    return this.generateTransaction(products, total);
  }

  generateTransaction(products: string[], total: number) {
    return "transaction completed";
  }
}

class TwoCheckOut implements IProvider {
  products: string[] = [];
  total: number = 0;

  doTransaction(products: string[], total: number) {
    return this.makePayment(products, total);
  }

  makePayment(products: string[], total: number) {
    return "payment done";
  }
}

class Payment {
  provider: IProvider;

  constructor(provider: IProvider) {
    this.provider = provider;
  }

  checkout(products: string[], total: number) {
    return this.provider.doTransaction(products, total);
  }
}

const payU = new PayU();
const twoCheckOut = new TwoCheckOut();
const payment = new Payment(payU);

const products = ["product 1", "product 2"];
const total = 50;

console.log(payment.checkout(products, total));

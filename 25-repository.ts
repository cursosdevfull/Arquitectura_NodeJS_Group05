// Domain
interface ProviderRepository {
  doTransaction(products: string[], total: number): string;
}

// Infrastructure
class PayU implements ProviderRepository {
  products: string[] = [];
  total: number = 0;

  doTransaction(products: string[], total: number) {
    return this.generateTransaction(products, total);
  }

  generateTransaction(products: string[], total: number) {
    return "transaction completed";
  }
}

class TwoCheckOut implements ProviderRepository {
  products: string[] = [];
  total: number = 0;

  doTransaction(products: string[], total: number) {
    return this.makePayment(products, total);
  }

  makePayment(products: string[], total: number) {
    return "payment done";
  }
}

// Application
class Payment {
  provider: ProviderRepository;

  constructor(provider: ProviderRepository) {
    this.provider = provider;
  }

  checkout(products: string[], total: number) {
    return this.provider.doTransaction(products, total);
  }
}

const payU: ProviderRepository = new PayU();
const twoCheckOut: ProviderRepository = new TwoCheckOut();
const payment = new Payment(payU);

const products = ["product 1", "product 2"];
const total = 50;

console.log(payment.checkout(products, total));

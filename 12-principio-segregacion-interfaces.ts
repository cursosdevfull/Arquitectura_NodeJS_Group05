interface IComputer {
  processor: string;
  memory: string;
  brand: string;
  getProcessor(): string;
  getMemory(): string;
  getBrand(): string;
}

interface IPortableComputer {
  processor: string;
  memory: string;
  brand: string;
  screenSize: string;
  getProcessor(): string;
  getMemory(): string;
  getBrand(): string;
  getScreenSize(): string;
}

class Desktop implements IComputer {
  processor: string;
  memory: string;
  brand: string;

  constructor(processor: string, memory: string, brand: string) {
    this.processor = processor;
    this.memory = memory;
    this.brand = brand;
  }

  getProcessor(): string {
    return this.processor;
  }

  getMemory(): string {
    return this.memory;
  }

  getBrand(): string {
    return this.brand;
  }
}

class Portable implements IPortableComputer {
  processor: string;
  memory: string;
  brand: string;
  screenSize: string;

  constructor(
    processor: string,
    memory: string,
    brand: string,
    screenSize: string
  ) {
    this.processor = processor;
    this.memory = memory;
    this.brand = brand;
    this.screenSize = screenSize;
  }

  getProcessor(): string {
    return this.processor;
  }

  getMemory(): string {
    return this.memory;
  }

  getBrand(): string {
    return this.brand;
  }

  getScreenSize() {
    return this.screenSize;
  }
}
class LenovoDesktop extends Desktop {
  price: number = 200;

  getPrice() {
    return this.price;
  }
}

class HPDesktop extends Desktop {
  price: number = 300;
  taxes: number = 40;

  getPrice() {
    return this.price + this.taxes;
  }
}

class ToshibaPortable extends Portable {
  price: number = 500;
  taxes: number = 60;
  discounts: number = 10;

  getPrice() {
    return this.price + this.taxes - this.discounts;
  }
}

const lenovoDesktop = new LenovoDesktop("amd7", "12GB", "Lenovo");
const hpDesktop = new HPDesktop("i9", "64GB", "HP");
const toshibaPortable = new ToshibaPortable("i5", "8GB", "Toshiba", "17'");

console.log("price lenovo desktop", lenovoDesktop.getPrice());
console.log("price hp desktop", hpDesktop.getPrice());
console.log("price toshiba portable", toshibaPortable.getPrice());

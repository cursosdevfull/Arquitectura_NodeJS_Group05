class Transportation {
  type: string;
  capacity: number;
  engine: string;

  constructor(type: string, capacity: number, engine: string) {
    this.type = type;
    this.capacity = capacity;
    this.engine = engine;
  }

  isSafe(): boolean {
    if (this.capacity > 10 && this.engine !== "diesel") return false;
    //if(this.capacity>3) return false

    return true;
  }
}

class Bus extends Transportation {
  isBusSafe() {
    return this.isSafe();
  }
}

class Bike extends Transportation {
  isSafe() {
    if (this.capacity > 3) return false;

    return true;
  }

  isBikeSafe() {
    return this.isSafe();
  }
}

const bus = new Bus("bus", 45, "diesel");
console.log("Is bus safe", bus.isBusSafe());

const bike = new Bike("bike", 2, "no apply");
console.log("Is bike safe", bike.isBikeSafe());

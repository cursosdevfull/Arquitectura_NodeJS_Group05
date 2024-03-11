class Animal {
  public raza: string | undefined | null;
  public color!: string;

  /*constructor() {
        this.raza = "Siberian Husky"
        this.color = "marrón"
    }*/

  public getDescription() {
    return `Raza ${this.raza}. Color ${this.color}`;
  }
}

const animal = new Animal();
animal.raza = "Samoyedo";
animal.color = "blanco";

console.log("raza", animal.raza);
console.log("color", animal.color);
console.log("description", animal.getDescription());

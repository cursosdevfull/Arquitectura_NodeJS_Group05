abstract class AbstractEntity<Entity, TypePrimaryKey> {
  insert(entity: Entity): Promise<Entity> {
    return Promise.resolve(entity);
  }

  update(id: TypePrimaryKey, entity: Entity): Promise<Entity> {
    return Promise.resolve(entity);
  }
}

class Medic {
  constructor(
    public readonly id: number,
    public name: string,
    public lastname: string
  ) {}
}

class MedicDataAccess extends AbstractEntity<Medic, number> {}

const medic = new Medic(1, "Javier", "Luque");
const medicDataAccess = new MedicDataAccess();
console.log(medicDataAccess.insert(medic));
console.log(medicDataAccess.update(5, medic));

class Paramedic {
  constructor(
    public readonly id: string,
    public name: string,
    public lastname: string
  ) {}
}

class ParamedicDataAccess extends AbstractEntity<Paramedic, string> {}

const paramedic = new Paramedic(
  "e6cd7fb3-912d-4ded-b459-95484f905990",
  "Cristina",
  "Valdez"
);
const paramedicDataAccess = new ParamedicDataAccess();
console.log(paramedicDataAccess.insert(paramedic));
console.log(
  paramedicDataAccess.update("e6cd7fb3-912d-4ded-b459-95484f905990", paramedic)
);

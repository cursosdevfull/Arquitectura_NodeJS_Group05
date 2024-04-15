export const MiControlador = (prefix: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata('prefijo', prefix, target);

    if (!Reflect.hasMetadata('rutas', target)) {
      Reflect.defineMetadata('rutas', [], target);
    }
  };
};

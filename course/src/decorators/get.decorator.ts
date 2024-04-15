export const MiGet = (path: string): MethodDecorator => {
  return (target, propertyKey) => {
    if (!Reflect.hasMetadata('rutas', target.constructor)) {
      Reflect.defineMetadata('rutas', [], target.constructor);
    }

    const rutas = Reflect.getMetadata('rutas', target.constructor);

    rutas.push({
      path,
      requestMethod: 'get',
      methodName: propertyKey,
    });

    Reflect.defineMetadata('rutas', rutas, target.constructor);
  };
};

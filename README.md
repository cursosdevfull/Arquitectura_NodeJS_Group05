# Docker

### Descargar mysql

```
docker pull mysql:8
```

### Crear un contenedor

```
docker create --name server-mysql mysql:8
```

### Listar imágenes

```
docker images
```

### Listar imágenes filtradas

```
docker images | grep mysql
```

### Listar contenedores que se están ejecutando

```
docker ps
```

### Listar todos los contenedores

```
docker ps -a
```

### Iniciar un contenedor

```
docker start server-mysql
```

### Ver logs

```
docker logs server-mysql
```

### Eliminar contenedor

```
docker rm -f server-mysql
```

### Agregar variable de entorno

```
docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=root mysql:8
```

### Ejecutar desattached

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=root mysql:8
```

### Crear un contenedor

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=root -p 7800:3306 mysql:8
```

### Crear con más variables de entorno

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db -e MYSQL_USER=test -e MYSQL_PASSWORD=test -p 7800:3306 mysql:8
```

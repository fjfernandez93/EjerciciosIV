#Ejercicios Tema 2
## Francisco José Fernández Muelas


#### 1: Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).

He instalado el entorno virutal "n", con el comando:

``` bash
sudo npm install -g n
```
Para instalar la última versión:

![img1](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img1.png)

Para ver un listado de todas las versiones de node uso

``` bash
n ls
```
Y puedo ver que la más actual de la 4.x es la 4.6.0:

![img2](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img2.png)


Y que de la 0.11.x es la 0.11.16:

![img3](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img3.png)


#### 2: Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían:

- [x] Crear empresa
- [x] Listar calificaciones para cada empresa
- [x] Crear calificación y añadirla, comprobando que la persona no la   haya añadido ya (esta comprobación no está aún.)
borrar calificación (si se arrepiente o te denuncia la empresa o algo)
- [x] Hacer un ránking de empresas por calificación, por ejemplo
- [x] Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades.

#### 3: Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

#### 4: Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.

Tras ejecutar "npm init" y dar la información que va pidiendo, queda un package.json así:

![img4](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img4.png)



#### 5: Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería.

Una vez instalados los módulos necesarios para la documentación (grunt-cli, grunt-docco y docco), hay que crear el archivo Gruntfile.js con el contenido que se indica en los apuntes de teoría (y en mi caso, añadiendo   'routes/\*.js' para que genere documentación para todos los archivos), el cual genera la tarea de documentación.

Para que se realiza la tarea, se ejecuta:

``` bash
grunt docco
```

![img5](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img5.png)

Que genera la documentación html y la guarda en la carpeta "docs".

![img6](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img6.png)


#### 6: Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).


Hago unos asserts para comprobar que los archivos de rutas se han cargado correctamente:

![img7](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img7.png)

Si se cargan bien, no hay ningún problema y se muestra el mensaje en la consola.

![img8](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img8.png)

En cambio, si por lo que sea no se carga uno de ellos correctamente (en este caso no lo cargo directamente), la función assert genera un error mostrando la etiqueta que se le pasa como segundo parámetro:

![img9](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img9.png)

![img10](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img10.png)

#### 7: Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vas a necesitar un poco más adelante.


El único assert que he sido capaz de comprobar con Mocha es que cargue correctamente el archivo app.js, ya que al hacer la aplicación como una API REST no se como acceder a las funciones de app.js (o de cualquier otro) para hacer test dede el archivo de Mocha.

![img11](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img11.png)

![img12](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema2/capturas/img12.png)

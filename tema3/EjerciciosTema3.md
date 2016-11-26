#Ejercicios Tema 3
## Francisco José Fernández Muelas


#### 1: Darse de alta en algún servicio PaaS tal como Heroku, Nodejitsu, BlueMix u OpenShift.

Una captura de las opciones de usuario en Heroku, logeado con mi cuenta:

![img1](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img1.png)

También pongo una captura de la consola de mi cuenta de OpenShift, donde también estoy dado de alta:

![img2](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img2.png)



#### 3: Realizar una app en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

La propia aplicación que estoy haciendo para la asignatura incluye una ruta con este tipo de parámetros.
En concreto, la ruta "GET /info/:p" (no aparece la parte de info ya que el siguiente código es un middleware que luego le incluyo a /info en app.js), siendo ":p" el parámetro que indica sobre que elementos se quiere obtener información: equipos, torneos o jugadores.

```js
/* GET info sobre equipos, usuarios o torneos, en función
del parámetro que se le pase. */

router.get('/:p', function(req, res, next) {
    var contenido=[];
    switch (req.params.p){
        case 'equipos':
            con.db.query("SELECT * FROM equipo")
                .then(function (data) {
                    for(var key in data){
                        contenido.push(data[key]);
                    }
                    contenido = JSON.stringify(contenido);
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(contenido);
                })
                .catch(function (error) {
                    console.log("ERROR:", error);
                });
            break;
        case 'usuarios':
            con.db.query("SELECT * FROM usuario")
                .then(function (data) {
                    for(var key in data){
                        contenido.push(data[key]);
                    }
                    contenido = JSON.stringify(contenido);
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(contenido);
                })
                .catch(function (error) {
                    console.log("ERROR:", error);
                });
            break;
        case 'torneos':
            con.db.query("SELECT * FROM torneo")
                .then(function (data) {
                    for(var key in data){
                        contenido.push(data[key]);
                    }
                    contenido = JSON.stringify(contenido);
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end(contenido);
                })
                .catch(function (error) {
                    console.log("ERROR:", error);
                });
            break;
    }
});

```

#### 4: Crear pruebas para las diferentes rutas de la aplicación.

De nuevo, en mi aplicación ya hice test con supertest y Mocha para el hito 2. Algunos de estos son:

```js
var request = require('supertest');
app = require(__dirname+"/../app.js");


/*Tests para comprobar que las rutas tipo "GET" responden
correctamente*/
describe('GET routes', function() {
  it('responde con html la route: /', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
  it('responde con un json la route: /info/torneos', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con un json la route: /info/equipos', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con un json la route: /info/usuarios', function(done) {
    request(app)
      .get('/info/torneos')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it('responde con html la route: /creatorneo', function(done) {
    request(app)
      .get('/creatorneo')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
/*Este test crea un torneo y comprueba que la respuesta es la correcta.
El parámetro 'testing' indica a la aplicación que ese torneo debe ser
borrado cuando se compruebe que todo esta en orden. */
describe('POST torneo',function(){
  it('Crea torneo correctamente', function(done){
    var torneo = {nombre : 'pedro',testing: 'a'};
    request(app)
      .post('/creatorneo')
      .send(torneo)
      .expect('Content-Type', /html/)
      .expect(200, done);

  });
});

```

Cuya ejecución produce la siguiente salida:

![img3](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img3.png)

#### 5:Instalar y echar a andar tu primera aplicación en Heroku.

Para hacer este primer despligue, clono el repositorio de mi proyecto en un directorio auxiliar y ejecuto la orden "heroku create":

![img4](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img4.png)

Una vez hecho esto solo queda hacer un push del proyecto al repositorio que se ha creado de heroku para que automaticamente se haga el despligue:

![img5](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img5.png)

Ahora puedo comprobar que la aplciación está correctamente desplegada accediendo a la url o con "heroku open":

![img6](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img6.png)

#### 6: Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

Voy a utilizar mi app de proyecto. Para poder usarla en local con Heroku, primero hago una copia de la variable de entorno al archivo .env (y lo añado al gitignore):

![img7](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img7.png)

Ahora realizo una modificación a mi proyecto. Esta consiste en añadir un nuevo parámetro (previamente añadido en el esquema de la BD) a un torneo para indicar su estado (no empezado, fase de grupos, cuartos de final, terminado, etc). En este caso, pongo una 'N', que indica que acaba de ser creado y aún no ha empezado:

![img8](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img8.png)

Una vez hecha la modificación, pruebo la máquina en local (la documentación de Heroku dice que hay que usar "heroku local" en lugar de "foreman") para ver si funciona y hago que pase los test de Mocha:

![img9](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img9.png)

![img10](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img10.png)

Después de esto lo queda desplegar en producción:

![img11](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img11.png)

#### 7: Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow

En los apuntes de teoría, justo antes del enunciado de este ejercicio, se habla de una funcionalidad 'beta' que integra en Heroku el despliegue automático. En 3 pasos se consigue hacer de manera rápida:

![img12](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img12.png)

![img13](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img13.png)

![img14](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema3/capturas/img14.png)

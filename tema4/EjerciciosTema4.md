#Ejercicios Tema 4
## Francisco José Fernández Muelas


#### 1: Instala LXC en tu versión de Linux favorita. Normalmente la versión en desarrollo, disponible tanto en GitHub como en el sitio web está bastante más avanzada; para evitar problemas sobre todo con las herramientas que vamos a ver más adelante, conviene que te instales la última versión y si es posible una igual o mayor a la 1.0

Instalo LXC en Fedora con el comando

```bash
sudo dnf install lxc

```
que como puede verse en la captura, instala la versión 2.0.5:

![img1](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img1.png)


#### 2: Comprobar qué interfaces puente se han creado y explicarlos.

Para poder crear la "caja" he tenido que instalar en Fedora las dependencias:

- perl
- libvirt
- debootstrap
- lxc-templates

Antes de instalarla, compruebo que interfaces tengo en el sistema anfitrión:

![img2](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img2.png)

Ahora creo un contendor lxc Fedora en el sistema anfitrión:

![img3](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img3.png)

![img4](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img4.png)


Al iniciarlo, me indicaba que "una-caja" no podia ser iniciada debido a un problema. Despues de buscar el error en el log del sistema,
encuentro que es debido a que no puede encontrar la interfaz "lxcbr0". En las que he listado anteriormente vemos la vibr0, creada por la herramienta
libvirt, pero parece que no sirve. Asi que creo una nueva interfaz llamada "lxcbr0" a la que le asigno la dirección de vibr0.

![img5](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img5.png)

![img6](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img6.png)

 Una vez hecho esto, ya si inicia correctamente "una-caja":


![img7](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img7.png)


 Con dos interfaces, la de loop y la interfaz eth0 para acceso a la red:
![img8](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img8.png)

Después de varias pruebas, he decidido hacer el siguiente ejercicio en Ubuntu, puesto que en Fedora, el contendor con Fedora y el contenedor con Ubuntu dan problemas de red.


#### 3: Crear y ejecutar un contenedor basado en Debian.

Creo un nuevo contenedor con

```bash

sudo jxc-create -t ubuntu -n ubu

```
![img9](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img9.png)

Para ponerla en marcha

```bash

sudo jxc-start -t ubuntu -n ubu

```


Y para conectarse a ella

```bash

sudo jxc-attach -t ubuntu -n ubu

```

![img10](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img10.png)

Por fin se ha creado con la interfaz puente correcta y tengo acceso sin problemas a la red.


#### 4: Instalar lxc-webpanel y usarlo para arrancar, parar y visualizar las máquinas virtuales que se tengan instaladas.

Descargo e instalo mediante un script que proporcionan en la página web:

```bash
wget https://lxc-webpanel.github.io/tools/install.sh -O - | bash
```

![img11](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img11.png)

Y ahora puedo acceder desde la direccion localhost, puerto 5000 (con usuario "admin" y pass "admin"). Desde este panel, entre otras cosas puedo iniciar, parar o pausar los contenedores:

![img12](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img12.png)

#### Desde el panel restringir los recursos que pueden usar: CPU shares, CPUs que se pueden usar (en sistemas multinúcleo) o cantidad de memoria.


Pulsando sobre el nombre del contenedor me aparece una ventana de configuracion donde dejo estos valores:

![img13](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img13.png)



#### 5: Comparar las prestaciones de un servidor web en una jaula y el mismo servidor en un contenedor. Usar nginx.


Primero instalo Nginx en el contenedor lxc con Ubuntu, y compruebo que está correctamente instalado:

![img13](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img13.png)

Ahora instalo una jaula.


#### 6: Instalar docker.

Siguiendo el [tutorial] oficial de Docker, antes de instalar necesito ejecutar los siguientes comandos para cumplir con los prerrequisitos:

```bash
sudo apt-get update

sudo apt-get install apt-transport-https ca-certificates

sudo apt-key adv \
               --keyserver hkp://ha.pool.sks-keyservers.net:80 \
               --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list

sudo apt-get update

sudo apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual

```
Para instalarl Docker:

```bash
sudo apt-get install docker-engine

sudo service docker start
```

Para comprobar que funciona correctamente:

![img13](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema4/capturas/img15.png)

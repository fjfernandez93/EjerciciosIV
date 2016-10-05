#Ejercicios Tema 1
## Francisco José Fernández Muelas


#### 1: Consultar en el catálogo de alguna tienda de informática el precio de un ordenador tipo servidor y calcular su coste de amortización a cuatro y siete años. Consultar este artículo en Infoautónomos sobre el tema.

Lo calculo con el Fujitsu PRIMERGY TX1310 M1, con precio de 498,74€ en [Amazon](https://www.amazon.es/Fujitsu-PRIMERGY-TX1310-M1-E3-1226V3/dp/B00KDXRPCU/)
Tiene como características principales:

- Intel Xeon E3-1226V3 3.3 GHz.
- 500 GB disco duro a 7200 rpm.
- 4 GB de RAM DDR3.

El precio viene dado con IVA, por lo que al hacer el cálculo, la base imponible queda en 412,18€.

El coste de amortización por año (a 4 años) es de 103,05€, ya que el límite máximo a amortizar en 1 año para este tipo de producto es de un 25%.

El coste de amortización por año (a 7 años, si se quiere hacer a partes iguales de un 14.3% por año) es de 58,89€.

Hay que tener en cuenta que el coste de amortización para un año se calcula de forma proporcional al mes del año en el que se realiza el gasto, por lo que suponemos que se compra el servidor a principio de año para hacerlo de forma "redonda",es decir, para que cada gasto de amorización sea correspondiente a un año real (por ejemplo, en el caso de 4 años, los 103,05€ corresponderian al año en el que se compró el servidor en Enero.)

#### 2: Usando las tablas de precios de servicios de alojamiento en Internet y de proveedores de servicios en la nube, Comparar el coste durante un año de un ordenador con un procesador estándar (escogerlo de forma que sea el mismo tipo de procesador en los dos vendedores) y con el resto de las características similares (tamaño de disco duro equivalente a transferencia de disco duro) en el caso de que la infraestructura comprada se usa sólo el 1% o el 10% del tiempo.



#### 3: ¿Qué tipo de virtualización usarías en cada caso? Comentar en el foro.

- **Virtualización plena:** si necesito trabajar con un sistema operativo concreto pero no quiero instalarlo directamente en un PC, por ejemplo utilizando VirtualBox o VMWare.
- **Virtualización parcial:** puede ser util si se quiere crear un sistema en los que se quiere utilizar un mismo recurso para muchos usuarios pero que lo perciban como si su "división" fuera un recurso completo. Por ejemplo, al montar un VPS se virtualizan recursos como la RAM o la CPU.
-  **Virtualización a nivel de sistema operativo:** también en el caso de un VPS, para aislar los distintos servidores virtuales de los clientes.
- **Virtualización de aplicaciones:** cuando por ejemplo tengamos que desplegar una infraestructura en un sistema operativo concreto sí o sí, pero necesitemos de un servicio o aplicación que no esté disponible para ese SO.
- **Virtualización de entornos de desarrollo:** util por ejemplo para evitar conflictos entre las versiones de paquetes, módulos, librerías, etc. que usamos en los diferentes proyectos que llevamos a cabo en una misma máquina.

  [Enlace al comentario en el foro.](https://github.com/JJ/IV16-17/issues/1#issuecomment-251446492)

####Crear un programa simple en cualquier lenguaje interpretado para Linux, empaquetarlo con CDE y probarlo en diferentes distribuciones.

Una vez clonado el repositorio donde se encuentra CDE, se instala y lo uso para empaquetar un pequeño script que he hecho para cambiar extensiones de archivos de un directorio:

![img1](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema1/capturas/img1.png)

Ahora, hago un zip de la carpeta cde-package que me ha generado para abrirlo en otro sistema, en este caso una distribución de Fedora. Una vez aquí, descomprimo el zip y busco el archivo en el directorio correspondiente dentro de cde-package (me genera una ruta igual a la ruta donde se ejecutó originalmente):

![img2](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema1/capturas/img2.png)

En caso de que se hubiera querido ejecutar el script directamente en Fedora no hubiera sido posible, puesto que la ruta donde busca archivos para renombrar es propia de la máquina 1, así que en Fedora fallaría.


#### 4: Comprobar si el procesador o procesadores instalados tienen estos flags. ¿Qué modelo de procesador es? ¿Qué aparece como salida de esa orden?


Es un Intel(R) Core(TM) i7-4770HQ CPU @ 2.20GHz, y la ejecución del comando no produce ninguna salida. En el archivo /proc/cpu veo que efectivamente no tiene ese flag:


[!img3](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema1/capturas/img3.png)

Pero en la [página de especificaciones del procesador](http://ark.intel.com/es-es/products/83505/Intel-Core-i7-4770HQ-Processor-6M-Cache-up-to-3_40-GHz) aparece que sí tiene tecnología de virtualización de Intel, así que supongo que esto será porque la comprobación la he hecho en una máquina virtual.

![img4](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema1/capturas/img4.png)

#### 5: Comprobar si el núcleo instalado en tu ordenador contiene este módulo del kernel usando la orden kvm-ok.

He probado en dos sistemas y en los dos me dice que no existe la orden, por lo que supongo que no contienen el módulo.

#### Instalar un hipervisor para gestionar máquinas virtuales, que más adelante se podrá usar en pruebas y ejercicios.

Instalación de Qemu desde el repositorio de Fedora:

![img5](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema1/capturas/img5.png)

![img6](https://github.com/fjfernandez93/EjerciciosIV/blob/master/tema1/capturas/img6.png)

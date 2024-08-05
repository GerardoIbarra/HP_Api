El examen debe cumplir con las siguientes características:
• Debe usarse React en su versión 18 mediante el framework de Next.js.
• Typescript para el desarrollo.
• CSS Modules para el manejo de estilos.
• La funcionalidad para agregar un nuevo personaje deberá de realizarse
implementando la librería JSON server.
La aplicación debe de seguir los requerimientos mostrados en
el look &feel (modo mobile, estados de botones, cambio de color de
acuerdo a la casa que pertenece el personaje etc.
• En la funcionalidad de agregar a favoritos se utilizará Redux saga, toolkit o
el que se considere.
• Preferentemente deberás incluir pruebas unitarias.

Las instrucciones para levantar el proyecto y correr
pruebas unitarias.

1.- Clonas el repositorio
2.- Desde la terminal accedes a la direccion en donde esta la carpeta y agregas este comando : code .
ese comando te va abrir en visual estudio la carpeta del codigo
3.- Una vez que ya accediste se puede agrehar en la terminal el comando de: npm i
ya que ermino agregaremos el siguiente comando en la terminal : npm run dev
ese comando nos levantara el proyecto
4.- para levantar los endpoint usaremos el comando: npm run json-server
5.- y para correr las pruebas unicarios usamos el comando de: npm test

o ¿Qué es lo que ms te gustó de tu desarrollo?

-Es la primera vez que hago un proyecto con algo relacionado con harry potter a si que me gusto mucho la mistica del proyecto ademas de poder trabajar con typescript.

o Si hubieras tenido más tiempo ¿qué hubieras mejorado o
qué más hubieras hecho?

-Animaciones

- Una pagina extra que cuando se le diera click al persona te saliera informacion detallada del personaje.
- Solicitar mas datos en el formulario para poder mostrar despues en el las tarjetas los valores correspondientes de casas, si esta vivo.
  -Una vez despues de agregar nuevos personajes me hubiera gustado tambien agregar un manejador de estado para que la data se recargara automaticamente en la lista con los nuevos personajes agregados.

o Descríbenos un pain point o bug con el que te hayas encontrado y
como lo solucionaste.

- tuve un problema con la creacion del boton collapse, no me salia en un inicio lo pude solucionar primero con taiwind y de ahi pase los estilos a css.
  -Tambien al inicio a la hora de guardar a favoritos solamente guardaba el nombre y cuando quise incluir la imagen ahi es donde me tranaba la lista en mi componenete ya que aunque ya habia hecho las configuraciones necesarias en toolkit no me habia percatado que segui usando Object.key jeje hasta que lo cambie es que pude seguir adelante.
  ![image](https://github.com/user-attachments/assets/29b0a261-fd5b-41f4-a028-260b594b18f9)

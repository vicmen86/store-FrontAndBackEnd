## Prop Drilling
El **Prop Drilling** es una paso del desarrollo que ocurre cuando necesitamos obtener datos que están en varias capas en el **árbol de componentes**
Solucionamos este inconveniete mediante un servicio
## Pratrón de inyección de dependencias (Servicio de manipulación de datos)
En Angular esto significa que podemos requerir servicios u objetos que alguna de nuestras clases necesita, ya sean componentes, directivas o servicios, sin la necesidad de instanciar dichas dependencias nosotros mismos.
## Pipes en angular (tuberia de transformación)
Son un artefacto en angular muy similar a los componentes y servicios. Tuberias de entrada y salida que transforma datos. Se representan con un | y luego el metodo.
- Pipe para titulos en mayuscula | uppercase 
- Pipe para precios con 0 precicion decimal  | currency:'$':'symbol':'1.0'
- Pipe para datos  cortos | date:'short'
## Directivas 
Se usa para manipulación del DOM en forma directa. Directive  es el medio por el cual podemos manipular el DOM de forma directa.
## RouterLinks
Nos permite redireccionar de modo simple y sin recargar la pagina
## Vistas anidadas (En anuglar se pueden compartir plantillas)
Las paginas que sigan una misma estructura pueden usar una plantilla (layout) y se puede compartir esa plantilla. puede implementarse desde el routing, una vez implmentado en los hijos solo nos preocuparmeos por el contenido, porque toda la configuracion de la plantilla ya estara por defecto



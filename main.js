import './style.css';

//1. Inventario de Frutas: Crea un array llamado frutas con al menos 5 frutas. Utiliza pop para eliminar la última fruta y mostrarla por consola. Luego, usa push para agregar "mango" al final del array.

console.warn('ejercicio 1');
let frutas = ['manzana', 'banana', 'pera', 'naranja', 'uva'];
let frutaEliminada = frutas.pop();
console.log(frutaEliminada);
frutas.push('mango');
console.log(frutas);

//2. Lista de Tareas: Declara un array tareas con 3 tareas pendientes. Usa shift para eliminar la primera tarea y mostrarla por consola como "Tarea completada".  Añade una nueva tarea al principio del array con unshift.

console.warn('ejercicio 2');
let tareas = ['limpiar', 'ordenar', 'lavar'];
console.log(tareas);
let tareaCompletada = tareas.shift();
console.log('Tarea completada: ' + tareaCompletada);
tareas.unshift('planchar');
console.log(tareas);

//3. Fila de Espera: Simula una fila de espera con un array clientes. Añade 2 nuevos clientes al final de la fila con push. Atiende al primer cliente usando shift y muestra su nombre por consola.

console.warn('ejercicio 3');
let clientes = ['Esteban', 'Luis', 'Armando'];
console.log(clientes);
clientes.push('Nicolas', 'Roberto');
console.log(clientes);
let clienteAtendido = clientes.shift();
console.log('Cliente atendido: ' + clienteAtendido);
console.log(clientes);

//4. Rotación de Elementos: Crea un array numeros con 5 números. Utiliza pop para sacar el último número y luego unshift para agregarlo al principio. Repite este proceso 3 veces y observa cómo cambian las posiciones.

console.warn('ejercicio 4');
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
for (let i = 0; i < 3; i++) {
  let numeroEliminado = numeros.pop();
  numeros.unshift(numeroEliminado);
  console.log(numeros);
}

//5. Carrito de Compras:  Declara un array carrito vacío. Permite al usuario agregar 3 productos al carrito con push. Luego, dale la opción de eliminar el último producto agregado usando pop.

console.warn('ejercicio 5');
let carrito = [];
carrito.push(prompt('Agrega un producto N° 1'));
carrito.push(prompt('Agrega un producto N° 2'));
carrito.push(prompt('Agrega un producto N° 3'));
console.log(carrito);
let productoEliminado = carrito.pop();
console.log('Producto eliminado: ' + productoEliminado);
console.log(carrito);

//6. (map) Doblar Valores:  Dado un array valores con números, crea un nuevo array dobles donde cada elemento sea el doble del valor original usando map.

console.warn('ejercicio 6');
let valores = [1, 2, 3, 4, 5];
console.log(valores);
let dobles = valores.map((valor) => valor * 2);
console.log(dobles);

//7. (map) Nombres en Mayúsculas: Convierte todos los nombres de un array nombres a mayúsculas utilizando map.

console.warn('ejercicio 7');
let nombres = ['juan', 'ana', 'luis'];
let nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

//8. (map) Precios con IVA:  Tienes un array precios con precios sin IVA. Calcula un nuevo array precios Con IVA donde cada precio incluya un IVA del 21%.

console.warn('ejercicio 8');
let precios = [100, 200, 300];
let preciosConIVA = precios.map((precio) => precio * 1.21);
console.log(preciosConIVA);

//9. (map) Cuadrados de Números:  Crea un array numeros del 1 al 10. Obtén un nuevo array cuadrados donde cada elemento sea el cuadrado del número original.

console.warn('ejercicio 9');
let numerosOriginales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cuadrados = numerosOriginales.map((numero) => numero * numero);
console.log(cuadrados);

//10. (filter) Números Pares:  Filtra un array numeros para obtener solo los números pares.

console.warn('ejercicio 10');
let numerosParaFiltrar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numerosParaFiltrar.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

//11. (filter) Palabras Largas:  Encuentra las palabras de más de 5 letras en un array palabras.

console.warn('ejercicio 11');
let palabras = ['manzana', 'sol', 'elefante', 'auto', 'computadora'];
let palabrasLargas = palabras.filter((palabra) => palabra.length > 5);
console.log(palabrasLargas);

//12. (filter) Productos en Oferta:  Tienes un array productos con objetos que tienen propiedades nombre y precio. Filtra los productos que estén en oferta (precio menor a $500).

console.warn('ejercicio 12');
let productos = [
  { nombre: 'producto1', precio: 600 },
  { nombre: 'producto2', precio: 400 },
  { nombre: 'producto3', precio: 300 },
];
let productosEnOferta = productos.filter((producto) => producto.precio < 500);
productosEnOferta.forEach((producto) =>
  console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`),
);

//13. (filter) Estudiantes Aprobados:  Filtra un array estudiantes (objetos con propiedades nombre y nota) para obtener solo a los estudiantes con notas mayores o iguales a 7.

console.warn('ejercicio 13');
let estudiantes = [
  { nombre: 'Juan', nota: 8 },
  { nombre: 'Ana', nota: 6 },
  { nombre: 'Luis', nota: 7 },
];

let estudiantesAprobados = estudiantes.filter(
  (estudiante) => estudiante.nota >= 7,
);
estudiantesAprobados.forEach((estudiantes) =>
  console.log(`Nombre: ${estudiantes.nombre}, Nota: ${estudiantes.nota}`),
);

//14. (filter) Tareas Completadas:  Dado un array tareas (objetos con propiedades descripcion y completada), filtra las tareas que estén marcadas como completadas.

console.warn('ejercicio 14');
let tareasLista = [
  { descripcion: 'lavar', completada: true },
  { descripcion: 'planchar', completada: false },
  { descripcion: 'cocinar', completada: true },
];

let tareasCompletadas = tareasLista.filter((tarea) => tarea.completada);
tareasCompletadas.forEach((tareasLista) =>
  console.log(`Descripcion: ${tareasLista.descripcion}, Completada`),
);

//15. (forEach) Mostrar Lista: Imprime por consola cada elemento de un array nombres utilizando forEach.

console.warn('ejercicio 15');
let nombresParaMostrar = ['Juan', 'Ana', 'Luis'];
nombresParaMostrar.forEach((nombre) => console.log(nombre));

//16. (forEach) Sumar Edades:  Calcula la suma de las edades de un array edades usando forEach.

console.warn('ejercicio 16');
let edades = [20, 25, 30, 35, 40];
let sumaEdades = 0;
edades.forEach((edad) => (sumaEdades += edad));
console.log(sumaEdades);

// 17. (forEach) Aplicar Descuento:  Tienes un array productos (objetos con nombre y precio). Aplica un descuento del 10% a cada producto usando forEach.

console.warn('ejercicio 17');
let productosParaDescuento = [
  { nombre: 'Televisor', precio: 100 },
  { nombre: 'Celular', precio: 200 },
  { nombre: 'Laptop', precio: 300 },
];
productosParaDescuento.forEach((productosParaDescuento) =>
  console.log(
    `Prodcuto: ${productosParaDescuento.nombre}, Precio ${productosParaDescuento.precio}`,
  ),
);
productosParaDescuento.forEach((producto) => (producto.precio *= 0.9));
productosParaDescuento.forEach((productosParaDescuento) =>
  console.log(
    `Prodcuto: ${productosParaDescuento.nombre}, Precio ${productosParaDescuento.precio}`,
  ),
);

// 18. (forEach) Enviar Invitaciones:  Simula el envío de invitaciones por correo electrónico a cada persona de un array invitados utilizando forEach (puedes imprimir un mensaje de "Invitación enviada a [nombre]" por consola).

console.warn('ejercicio 18');
let invitados = ['Juan', 'Ana', 'Luis'];
invitados.forEach((invitado) =>
  console.log('Invitación enviada a ' + invitado),
);

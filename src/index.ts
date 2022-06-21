// EJERCICIO "PROMEDIO ESCOLAR"

/* 
•Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
•Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
•Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información
*/

// SE DESARROLLA LA LOGICA DE LA CARGA DE ALUMNOS

let cantidadAlumnos: number = 0;
let nombreAlumno: string[] = new Array(cantidadAlumnos);

let notaTrimestre1: number[] = new Array(cantidadAlumnos);
let notaTrimestre2: number[] = new Array(cantidadAlumnos);
let notaTrimestre3: number[] = new Array(cantidadAlumnos);

function cargarNombresAlumnos(cantidadAlumnos: number, nombreAlumno: string[]) {
  cantidadAlumnos = Number(
    prompt("Por favor, ingrese la cantidad total de alumnos:")
  );
  nombreAlumno = new Array(cantidadAlumnos);
  for (let i: number = 0; i < cantidadAlumnos; i++) {
    nombreAlumno[i] = String(
      prompt(`Por favor, ingrese el nombre del alumno: ${i + 1}`)
    );
  }
  return nombreAlumno;
}

console.log(cargarNombresAlumnos(cantidadAlumnos, nombreAlumno));

function cargarNotasTrimestrales(
  notaTrimestre1: number[],
  notaTrimestre2: number[],
  notaTrimestre3: number[]
) {
  notaTrimestre1 = new Array(cantidadAlumnos);
  notaTrimestre2 = new Array(cantidadAlumnos);
  notaTrimestre3 = new Array(cantidadAlumnos);
  for (let i: number = 0; i < cantidadAlumnos; i++) {
    notaTrimestre1[i] = Number(
      prompt(
        `Por favor, ingrese la nota del "Primer Trimestre" del alumno: ${i + 1}`
      )
    );
    notaTrimestre2[i] = Number(
      prompt(
        `Por favor, ingrese la nota del "Segundo Trimestre" del alumno: ${
          i + 1
        }`
      )
    );
    notaTrimestre3[i] = Number(
      prompt(
        `Por favor, ingrese la nota del "Tercer Trimestre" del alumno: ${i + 1}`
      )
    );
  }
  return [notaTrimestre1, notaTrimestre2, notaTrimestre3];
}

console.log(
  cargarNotasTrimestrales(notaTrimestre1, notaTrimestre2, notaTrimestre3)
);

//COMMENTS!!!
//NO PODEMOS HACER QUE EL PROGRAMA TOME LAS NOTAS DE LOS ALUMNOS

/*
//SE DESARROLLA EL ARREGLO PARA LAS NOTAS
let notaAlumno : number[] = new Array (3);

//SE DEFINE EL BUSCADOR DE ALUMNP
let alumnoSeleccionado : string = String(prompt("Por favor, indique el nombre del alumno a consultar:"));
let founded : boolean = false;
let promedio : number = 0;

let indice : number = 0;
while (indice < cantidadAlumnos && !founded) {
  if (nombreAlumno)[i] === alumnoSeleccionado {
    founded = true;
    promedio = //definicr las variables de notas: (nota1[i] + nota2[i] + nota3[i]) / 3
    /// si la division en la linea anterior no funciona, hacer: promedio / 3;
  } 
  i++
}
console.log(promedio);
*/

// METODO PARA BUSCAR ALUMNOS

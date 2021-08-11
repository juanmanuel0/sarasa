/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. */
function mostrar() 
{
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;
  // punto A
  let flag = 1;
  let mejorPromFisica;
  let nombrePromFisica;
  // punto B
  let flagJ = 1;
  let nombreMasJoven;
  let edadMasJoven;
  // punto C
  let acumQuimica = 0;
  let acumFisica = 0;
  let acumSistemas = 0;
  let totalEstudiante = 0;
  let porcentajeQuimica = 0;
  let porcentajeFisica = 0;
  let porcentajeSistema = 0;
  // punto D
  let flagQ = 1;
  let edadMasMaterias;
  let nombreMasMaterias;
  let masMaterias;

  for (let i = 0; i < 4; i++) {
    nombre = prompt("Ingrese nombre");
		while(!(isNaN(nombre))){
			nombre = prompt("Error. Ingrese nombre");
    }
    carrera = prompt("Ingrese un carrera de mascota (quimica/sistemas/fisica)");
    while (carrera != "fisica" && carrera != "quimica" && carrera != "sistemas") {
      carrera = prompt("Ingrese un carrera de mascota (quimica/sistemas/fisica)");
    }
    sexo = prompt("Ingrese el sexo (masculino/femenino/nobinario)");
    while (sexo != "masculino" && sexo != "femenino" && sexo != "nobinario") {
      sexo = prompt("Error. Ingrese el sexo (masculino/femenino/nobinario)");
    }
    cantidadMaterias = parseInt(prompt("Ingrese su cantidadMaterias (1/5)"));
		while (!(cantidadMaterias >= 1 && cantidadMaterias <= 5)) {
			cantidadMaterias =  parseInt(prompt("Error. Ingrese su cantidadMaterias(1/5)"));
    }
    notaPromedio = parseFloat(prompt("Ingrese su notaPromedio"));
		while (!(notaPromedio >= 0 && notaPromedio <= 10)) {
			notaPromedio =  parseInt(prompt("Error. Ingrese su notaPromedio"));
    }
    edad = parseInt(prompt("Ingrese su edad"));
		while (isNaN(edad)) {
			edad =  parseInt(prompt("Error. Ingrese su edad"));
		}
    if (carrera == "fisica") {
      acumFisica++; if (flag || notaPromedio > mejorPromFisica ) {
        mejorPromFisica = notaPromedio;
        nombrePromFisica = nombre;
        flag = 0;
      }
    }
    if (flagJ || edad < edadMasJoven) {
      edadMasJoven = edad;
      nombreMasJoven = nombre;
      flagJ = 0;
    }
    if (carrera == "quimica") {
      acumQuimica++;
    }else if (carrera == "sistemas") {
      acumSistemas
    }
    if (carrera != "quimica") {
       if(flagQ || cantidadMaterias > masMaterias) {
      edadMasMaterias = edad;
      nombreMasMaterias = nombre;
      masMaterias = cantidadMaterias;
    }}
    totalEstudiante++;
  }
  porcentajeFisica = acumFisica / totalEstudiante;
  porcentajeQuimica = acumQuimica / totalEstudiante;
  porcentajeSistema = acumSistemas / totalEstudiante;

  document.write("a- el nombre del mejro promedio en fisica es " + nombrePromFisica + 
  " y su promedio es " + mejorPromFisica + "<br>");
  document.write("b- el alumno mas joven es " + edadMasJoven + " y su nombre es " + nombreMasJoven + "<br>");
  document.write("c- el porcenjta de sistemas es " + porcentajeSistema  + " el porcenjate de quimica es " +  
  porcentajeQuimica + " y el porcentaje de fisica es " + porcentajeFisica + "<br>");
  document.write("d- la edad del estudieante que curso mas materias que no es de quimica es " +
   edadMasMaterias + " su nombre es " + nombreMasMaterias + " y su cantidad fue " + masMaterias + "<br>");


}/*a- el nombre del mejro promedio en fisica es sol y su promedio es 10
b- el alumno mas joven es undefined y su nombre es undefined
c- el porcenjta de sistemas es 0 el porcenjate de quimica es 0.5 y el porcentaje de fisica es 0.25
d- la edad del estudieante que curso mas materias que no es de quimica es undefined su nombre es undefined y su cantidad fue undefined*/

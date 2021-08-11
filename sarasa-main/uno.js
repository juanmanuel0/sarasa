/*Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad */
function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  // punto A
  let acumReptiles = 0;
  let contadorEdadReptiles = 0;
  let promedioEdadReptiles = 0;
  // punto B
  let sexoMasJoven;
  let tipoMasJoven;
  let edadMasJoven;
  let flag = 1;
  // punto C
  let totalmascosta = 0;
  let acumAves = 0;
  let porcentajeAves = 0;
  // punto D
  let acumMamifero = 0;
  let maxCantidad;
  ////////////////
  let respuesta;

  do {
    nombre = prompt("Ingrese nombre");
		while(!(nombre.length >= 3 && nombre.length <= 10 )){
			nombre = prompt("Nombre fuera de rango. Ingrese nombre");
		}
    edad = parseInt(prompt("Ingrese su edad"));
		while (!(edad > 0)) {
			edad =  parseInt(prompt("Error. Ingrese su edad"));
		}
    tipo = prompt("Ingrese un tipo de mascota (ave/reptil/mamifero)");
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil") {
      tipo = prompt("Ingrese un tipo de mascota (ave/reptil/mamifero)");
    }
    if (tipo == "reptil") {
      sangre = "fria"
      acumReptiles++;
      contadorEdadReptiles += edad;
    }else{
    sangre = prompt("ingrse su sangre (fria/calida)");
    while (sangre != "fria" && sangre != "calida") {
      sangre = prompt("ingrse su sangre (fria/calida)");
    }}
    sexo = prompt("Ingrese el sexo (m/h)");
    while (sexo != "m" && sexo != "h") {
      sexo = prompt("Error. Ingrese el sexo (m/h)");
    }
    if (flag || edad < edadMasJoven) {
      edadMasJoven = edad;
      tipoMasJoven = tipo;
      sexoMasJoven = sexo;
      flag = 0;
    }
    if (tipo == "ave") {
      acumAves++;
    }else if (tipo == "mamifero") {
      acumMamifero++;
    }
    totalmascosta++;


    respuesta = prompt("quiere ingresar otra mascota (si/no)");
  } while (respuesta == "si");
  if (acumReptiles != 0) {
    promedioEdadReptiles = contadorEdadReptiles / acumReptiles;
  }
  porcentajeAves = acumAves / totalmascosta;
  if(acumAves > acumMamifero && acumAves > acumReptiles){
    maxCantidad = "aves";
  }else if (acumMamifero >= acumAves && acumMamifero > acumReptiles){
   maxCantidad = "mamifero";
  }else {
   maxCantidad = "reptil";
  }
  document.write("a- el promedio de edad de los reptiles es " + promedioEdadReptiles + "<br>");
  document.write("b- la mas cota mas joven es de tipo " + tipoMasJoven + " su sexo " + sexoMasJoven +
  " y su edad " + edadMasJoven + "<br>");
  document.write("c- el porcentaje de aves es " + porcentajeAves + "<br>");
  document.write("d- la mayor cantidad de mascota es " + maxCantidad + "<br>");



  
}/*a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad */

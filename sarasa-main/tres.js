/*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas) */
function mostrar() {
  let tipo;
  let origen;
  let precio;
  //punto A
  let tipoMasVendido;
  let contadorM = 0;
  let contadorR = 0;
  let contadorP = 0;
  // punto B
  let acumImportados = 0;
  let contadorPrecioIm = 0;
  let promImportados = 0;
  // punto C
  let recaudacionTotal = 0;
  // punto D
  let flag = 1;
  let rompecabezasBarato = 0;
  // punto E
  let iva;
  //////////// 
  let respuesta;
  do {
    tipo = prompt("Ingrese un jugete (muñeca/rompecabezas/pelota)");
    while (tipo != "rompecabezas" && tipo != "muñeca" && tipo != "pelota") {
      tipo = prompt("Error. Ingrese un jugete (muñeca/rompecabezas/pelota)");
    }
    origen = prompt("ingresen el producto (nacional/importado)");
		while (origen != "nacional" && origen != "importado") {
			origen = prompt("Error. ingresen el producto (nacional/importado)");
		}
    precio = parseInt(prompt("ingrese un precio entre (1mil y 5mil)"));
		while (!(precio >= 1000 && precio <= 5000)) {
			precio = parseInt(prompt("Error. ingrese un numero entre (1mil y 5mil))"));
		}
    if (tipo == "muñeca") {
      contadorM++;
    }else if (tipo == "rompecabezas") {
      contadorR++;
    }else{
      contadorP++;
    }
    if (origen == "importado") {
      acumImportados++;
      contadorPrecioIm += precio
    }
    if (origen == "nacional" && tipo == "rompecabezas") {
      if (flag || precio < rompecabezasBarato ) {
        rompecabezasBarato = precio;
      }
    }
    recaudacionTotal += precio;

    respuesta = prompt("quiere ingresar otra venta (si/no)")
  } while (respuesta == "si");
  if(contadorR > contadorM && contadorR > contadorP){
    tipoMasVendido = "rompecabezas";
  }else if (contadorM >= contadorR && contadorM > contadorP){
   tipoMasVendido = "muñeca";
  }else {
   tipoMasVendido = "pelota";}

   if (acumImportados != 0) {
     promImportados = contadorPrecioIm / acumImportados;
   }
   iva = recaudacionTotal * 21 / 100;

   document.write("a- el juge mas vendido es " + tipoMasVendido + "<br>");
   document.write("b- el promedio de los jugete importados es " + promImportados + "<br>");
   document.write("c- la recaudacion total fue " + recaudacionTotal + "<br>");
   document.write("d- el rompecabezas nacional mas barato es "+ rompecabezasBarato + "<br>");
   document.write("e- se percibio de iva " + iva + "<br>");

}/*a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas) */

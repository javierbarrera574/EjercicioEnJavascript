Hacer un script en javascript que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma:

let num = parseInt(prompt("Ingrese un número para generar la piramide inversa: ")); 

for(let i = num; i >= 1; i--)
{ 
  let linea = ""; // creamos una cadena vacía para ir agregando los números
  for(let j = 1; j <= i; j++){ al
    linea += j + " "; 
  }
  console.log(linea);
}

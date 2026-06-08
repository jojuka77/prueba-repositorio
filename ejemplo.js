let suma = 0;
let contador = 0;

console.log("Multiplos de 3 hasta 100:\n");

for (let i = 3; i <= 100; i += 3) {
    console.log(i);
    suma += i;
    contador ++;
}

console.log("\nLa suma total es: " + suma);

const numeros = [5, 8, 12, 15, 2, 4, 18, 21];  

const multiplicados = numeros.map(num => num * 2);  

const filtrados = multiplicados.filter(num => num > 10); 

const suma = filtrados.reduce((acum, num) => acum + num, 0);  

console.log("Multiplicados por 2:" +  multiplicados); 

console.log("mayores a 10:" + filtrados); 

console.log("Suma de los filtrados:" + suma);
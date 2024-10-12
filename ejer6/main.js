const estudiante = {
    nombre: 'Juan Pérez',
    edad: 20,
    direccion: {
        ciudad: 'Medellín',
        calle: 'Calle 10',
        numero: 101
    },
    notas: {
        matematicas: 4.5,
        ingles: 3.8,
        ciencias: 4.0
    }
};

const { 
    nombre, 
    direccion: { ciudad }, 
    notas: { matematicas } 
} = estudiante;

console.log(`Nombre: ${nombre}`);
console.log(`Ciudad: ${ciudad}`);
console.log(`Nota en matemáticas: ${matematicas}`);

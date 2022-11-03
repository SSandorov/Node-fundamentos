const deadpool = {
    nombre: 'Wade',
    apellidos: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${ this.nombre } ${ this.apellidos }`;
    }
}

/*
La desestructuración se puede hacer tanto de objetos como de arreglos. Nos facilita la
extracción de informamación de una API, por ejemplo. También la asignación de los valores
del objeto o el arreglo en una variable como en el siguiente ejemplo
*/
                          // valor predeterminado, en caso de que el argumento no estuviese
                          // declarado en el objeto  
const { nombre, apellidos, edad = 0 } = deadpool;
console.log(nombre, apellidos, edad);

// Otro uso es la desestructuración de los argumentos de una función
const imprimeHeroe = ({ nombre, apellidos, edad = 0 }) => {
    console.log(nombre, apellidos, edad);
};

imprimeHeroe(deadpool);

// desestructuración de arreglos
const heroes = ['Deadpool', 'Superman', 'Batman'];

// el espacio vacío es para saltarnos la segunda posición
const [h1, , h3] = heroes;

console.log(h1, h3);
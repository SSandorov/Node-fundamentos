// La palabra reservada var crea una variable en el scope global, no es buena práctica.
// tiene comportamientos extraños, por lo que puede llevar a errores
// también puede crear conflicto con varibales globales del navegador
var nombre1 = 'Wolverine';

// la palabra reservada let crea una variable en el scope en el que esté declarada
// es la manera correcta de declarar variables
let nombre2 = 'Pepe';
nombre2 = 'Juan'

// la palabra reservada const se emplea para designar variables constantes en el scope declarado.
// Se emplean en lugar del let porque son más ligeras y en la designación de las funciones 
// de flecha, ya que estas no varían una vez escritas
const nombre3 = 'Juanito';

const nombre4 = (nombre) => {
    return nombre;
}

console.log(nombre1, nombre2, nombre3, nombre4('Stefan'));
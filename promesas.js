// Las promesas nacieron en respuesta al callback hell
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

// Replicamos la función getEmpleado() pero empleando promesas 
const getEmpleado = ( id ) => {
    // las promesas ya vienen integradas como una clase en JS
    // solo tenemos que llamarlas
    // dentro de la promesa tenemos los callbacks resolve y reject
    return new Promise((res, rej) => {
        const empleado = empleados.find( (e) => e.id === id)?.nombre;

        // condicional moderno
        (empleado)
            ? res(empleado)
            : (`No existe un empleado con el id ${id}`);
    });
}

// Tarea: crear el getSalario() con promesas
const getSalario = (id) => {
    const salario = salarios.find( (s) => s.id === id)?.salario;

    return new Promise((res, rej) => {
        (salario)
        ? res(salario)
        : rej(`No existe el salario con el id ${id}`);
    })
}

const id = 3;

getEmpleado(id)
    // con el then ejecutamos el resolve
    // .then(empleado => console.log(empleado));
    // se puede simplificar de la siguiente manera
    .then(console.log)
    // con el catch ejecutamos el reject
    .catch(console.log);

getSalario(id)
    .then(console.log)
    .catch(console.log);

// Para evitar el callback hell, empleamos las promesas en cadena

// creamos una variable para almacenar el valor del empleado, pero más adelante
// emplearemos otra manera más elegante de resolverlo
let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        // una vez ejecutado el resolve de getEmpleado, devolvemos la función de getSalario
        return getSalario(id);
    })
    // Y ahora ejecutamos el resolve de getSalario()
    .then(salario => {
        console.log(`El empleado ${nombre} con id ${id} tiene un salario de ${salario}`);
    })
    // Por último manejamos los errores de ambas promesas. En caso de que una de las dos
    // nos devuelve un error, nos devolverá el rej de la misma
    .catch(err => {
        console.log(err);
    });
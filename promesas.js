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

const id = 1;

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
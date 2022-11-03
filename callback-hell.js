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

const salario = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        nombre: 1500
    }
];

// Así se gestionan los callback de manera común en la mayoría de las librerías de node
const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id === id);

    if ( empleado ) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

getEmpleado(3, (err, empleado) => {
    if(err) {
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('Empleado existe!');
    console.log('Empleado');
})
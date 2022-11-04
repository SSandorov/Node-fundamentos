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

// Así se gestionan los callback de manera común en la mayoría de las librerías de node
const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id === id);

    if ( empleado ) {
        // el null se emplea para gestionar el error en caso de que no se cumpla 
        // la condición 
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

// Tarea
const getSalario = (id, callback) => {
                                                // ? es el null check operator
                                                // en caso de que sea null no nos sale error
                                                // y en caso contrario nos devuelve el valor
                                                // del key salario
    const salario = salarios.find((s) => s.id === id)?.salario;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
}

const id = 1;

// Ejemplo de la tarea

// getSalario(id, (err, salario) => {
//     if(err) {
//         console.log('ERROR!');
//         return console.log(err);
//     }

//     console.log('Salario existe!');
//     console.log(salario);
// })

getEmpleado(id, (err, empleado) => {
    if(err) {
        // sin el null siempre recibiríamos el string 'ERROR!'
        console.log('ERROR!');
        return console.log(err);
    }

    // console.log('Empleado existe!');
    // console.log(empleado);

    // el callback hell nace cuando debemos hacer una concatenación de callbacks
    // en este ejemplo, queremos recibir el empleado y el salario de un id, para
    // ello debemos llamar la función getSalario dentro de getEmpleado
    // Ahora, si tuviésemos que hacerlo 5, 10 veces se acumularía mucho código que
    // es muy propenso a errores, por lo que hoy en día ya no se emplea más
    getSalario(id, (err, salario) => {
        if(err) {
            console.log('ERROR!');
            return console.log(err);
        }

        console.log(`El empleado ${empleado.nombre} tiene un salario de ${salario}`);
    })
})


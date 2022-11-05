//
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
    
    return new Promise((res, rej) => {
        const empleado = empleados.find( (e) => e.id === id)?.nombre;

        (empleado)
            ? res(empleado)
            : rej(`No existe un empleado con el id ${id}`);
    });
}

const getSalario = (id) => {
    
    return new Promise((res, rej) => {
        const salario = salarios.find( (s) => s.id === id)?.salario;

        (salario)
        ? res(salario)
        : rej(`No existe el salario con el id ${id}`);
    })
}

// El await espera hasta tener la respuesta de una promesa
// cuando tenga la respuesta, la asigna donde yo le diga
// El único inconveniente del await es que debe estar dentro de una función o un 
// método asíncrono
const getInfoUsuario = async(id) => {
    // vamos a esperar a que se ejecuten las promesas getEmpleado y getSalario
    // En lugar del resolve y reject, empleamos el try para el resolve y el catch 
    // para el reject
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado ${empleado} tiene un salario de ${salario}`;

    } catch (error) {
        return error;
        // con el return en el catch estamos diciendo que esta es la manera correcta
        // de gestionar la excepción, no saltaría ninguna alarma ni nigún error en el
        // programa
        // si fuese necesario que saltase un error, emplearíamos el throw
        // throw error;
    }

    
}

const id = 10;

// El async nos transforma una función en una promesa, lo podemos comprobar quitando el
// async y poniendo un punto después de la llamada de la función, ya que podremos ver
// todos los métodos que tiene una función, pero si le añadimos el async y ponemos el punto
// delante de la llamada de la función, veremos que los métodos son then, catch y finally,
// por lo que la función fue transformada a una promesa

// lo podemos comprobar en la siguiente llamada
getInfoUsuario(id).
    then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    });

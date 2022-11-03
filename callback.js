// Los callbacks son funciones que se mandan como argumento en otra función
// y ejecutan más adelante en el tiempo

                        // especificamos como argumento el callback
const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Stefan'
    }


    setTimeout( () => {
        callback( usuario );
    }, 1500 )
}

                // el callback lo escribimos como una función que se ejecutará
                // después del segundo y medio
                // y podemos desestructurar el argumento que recibe el callback
getUsuarioById(10, ({id, nombre}) => {
    console.log(id);
    // al emplear callbacks podemos extraer uno de los valores y aplicarle algún cambio
    console.log(nombre.toUpperCase());
});
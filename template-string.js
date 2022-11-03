const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ', ' + real;

// podemos hacer la asignación anterior de la siguiente manera
const template = `${ nombre }, ${ real }`;

// otro uso común es la escritura multilínea
const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(normal);
console.log(template);
console.log(html);

// se puede comparar un template literal con un string
console.log(normal === template);
setInterval(function () {
    AOS.init();

}, 1000)
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

const contenido_1 = document.getElementById('section_refrigeracion_descripcion')
contenido_1.addEventListener('click', agregarDescripcion)
const contenido_2 = document.getElementById('section_ObrasCivilesMenores')
contenido_2.addEventListener('click', agregarDescripcionSegunda)
const contenido_3 = document.getElementById('section_Electricidad')
contenido_3.addEventListener('click', agregarDescripcionTercera)
const contenido_4 = document.getElementById('section_Jardineria')
contenido_4.addEventListener('click', agregarDescripcionCuarta)
// const contenedorDescripcion = document.getElementById('contenedorDescripcion')
let mostarDescripcion = []

function agregarDescripcion(e) {
    if (e.target.classList.contains('descripcion')) {
        const textoSeleccionada = e.target;
        leerDatos(textoSeleccionada)
    }
}
function agregarDescripcionSegunda(e) {
    if (e.target.classList.contains('descripcion')) {
        const textoSeleccionada = e.target;
        leerDatos(textoSeleccionada)
    }
}
function agregarDescripcionTercera(e) {
    if (e.target.classList.contains('descripcion')) {
        const textoSeleccionada = e.target;
        leerDatos(textoSeleccionada)
    }
}
function agregarDescripcionCuarta(e) {
    if (e.target.classList.contains('descripcion')) {
        const textoSeleccionada = e.target;
        leerDatos(textoSeleccionada)
    }
}


function leerDatos(dato) {
    mostrarDescripcion()
    
    const imagen = dato.parentElement.querySelector('img').src
    const titulo = dato.parentElement.querySelector('h1').textContent
    const parrafo = dato.parentElement.querySelector('p').textContent
    
    const imagenElement = document.createElement('img');
    imagenElement.src = imagen;
    imagenElement.classList.add('w-[45%]', 'rounded-lg','lg:w-[39%]', '2xl:w-[40%]');

    const titulo_h1 = document.createElement('h1');
    titulo_h1.textContent = titulo;
    titulo_h1.classList.add('text-center', 'text-lg', 'font-bold', 'text-black');
    
    const parrafoElement = document.createElement('p');
    parrafoElement.textContent = parrafo;
    parrafoElement.classList.add('text-center', 'text-sm');
    parrafoElement.style.display = 'block';

    const btn = document.createElement('button');
    btn.textContent = 'Cerrar';
    btn.classList.add( 'text-black', 'w-[30%]', 'text-center', 'rounded-lg', 'shadow-lg', 'border-[1px]', 'border-black', 'font-sanz', 'hover:scale-[1.1]');
    btn.addEventListener('click', cerrarDescripcion)


    contenedorDescripcion.innerHTML = '';

    contenedorDescripcion.appendChild(imagenElement);
    contenedorDescripcion.appendChild(titulo_h1);
    contenedorDescripcion.appendChild(parrafoElement);
    contenedorDescripcion.appendChild(btn);
}

function mostrarDescripcion() {
    if (contenedorDescripcion.classList.contains('hidden')) {
        contenedorDescripcion.classList.remove('hidden');
        contenedorDescripcion.classList.add('block');

        main.classList.add('blur-md');
        nav.classList.add('blur-md');
        footer.classList.add('blur-md');
        contenido_1.classList.add('blur-md');
        contenido_2.classList.add('blur-md');
        contenido_3.classList.add('blur-md');
        contenido_4.classList.add('blur-md');
    }
}

function cerrarDescripcion() {
    contenedorDescripcion.classList.remove('block');
    contenedorDescripcion.classList.add('hidden');

        main.classList.remove('blur-md');
        nav.classList.remove('blur-md');
        footer.classList.remove('blur-md');
        contenido_1.classList.remove('blur-md');
        contenido_2.classList.remove('blur-md');
        contenido_3.classList.remove('blur-md');
        contenido_4.classList.remove('blur-md');
}

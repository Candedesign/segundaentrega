const pokemon = [
    {
        nombre: "Alakazam",
        tipo: "Psiquico",
        salud: "40 HP",
        ataque: "80 PP",
        habilidad: "Psyco-rayo",
        imagen: "img/alakazam.png", 
    },

    {
        nombre: "Charizard",
        tipo: "Fuego",
        salud: "50 HP",
        ataque: "70 PP",
        habilidad: "Lanzallama",
        imagen: "img/charizard.png", 
    },

    {
        nombre: "Eevee",
        tipo: "Normal",
        salud: "40 HP",
        ataque: "40 PP",
        habilidad: "Ataque rapido",
        imagen: "img/eevee.png", 
    },

    {
        nombre: "Garchomp",
        tipo: "Dragon",
        salud: "70 HP",
        ataque: "80 PP",
        habilidad: "Hyperrayo",
        imagen: "img/garchomp.png", 
    },

    {
        nombre: "Gengar",
        tipo: "Fantasma",
        salud: "40 HP",
        ataque: "80 PP",
        habilidad: "Hipnosis",
        imagen: "img/gengar.png", 
    },

    {
        nombre: "Lucario",
        tipo: "Lucha",
        salud: "50 HP",
        ataque: "70 PP",
        habilidad: "Esfera aurea",
        imagen: "img/lucario.png", 
    },

    {
        nombre: "Nidorino",
        tipo: "Veneno",
        salud: "40 HP",
        ataque: "50 PP",
        habilidad: "Cuerno taladro",
        imagen: "img/nidorino.png", 
    },

    {
        nombre: "Pikachu",
        tipo: "Electrico",
        salud: "30 HP",
        ataque: "40 PP",
        habilidad: "Rayo",
        imagen: "img/pikachu.png", 
    },
]

function crearCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('card');

    const textoContenedor = document.createElement('div');
    textoContenedor.classList.add('texto-contenedor');

    const nombre = document.createElement('h3');
    nombre.textContent = pokemon.nombre.toUpperCase();
    nombre.classList.add('nombre-pokemon');

    const tipo = document.createElement('h2');
    tipo.textContent = `Tipo ${pokemon.tipo.toUpperCase()}`; ;
    tipo.classList.add('tipo-pokemon');

    const statsContenedor = document.createElement('div');
    statsContenedor.classList.add('stats-contenedor'); 

    const salud = document.createElement('p');
    salud.textContent = `Salud ${pokemon.salud}`;
    salud.classList.add('info');

    const ataque = document.createElement('p');
    ataque.textContent = `Ataque ${pokemon.ataque}`;
    ataque.classList.add('info');

    const habilidad = document.createElement('p');
    habilidad.textContent = `Habilidad ${pokemon.habilidad}`;
    habilidad.classList.add('info');

    statsContenedor.appendChild(salud);
    statsContenedor.appendChild(ataque);
    statsContenedor.appendChild(habilidad);

    textoContenedor.appendChild(nombre);
    textoContenedor.appendChild(tipo);
    textoContenedor.appendChild(statsContenedor);

    const imagen = document.createElement('img');
    imagen.src = pokemon.imagen;

    const boton = document.createElement('button');
    boton.textContent = "Agregar al equipo".toUpperCase();
    boton.classList.add('agregar-boton');
    
    boton.addEventListener ('click', () => {
        agregaralequipo(pokemon);
        
    });

    card.appendChild(textoContenedor);
    card.appendChild(imagen);
    card.appendChild(boton);

    return card;
}


function agregaralequipo(pokemon) {
    let equipo = JSON.parse(localStorage.getItem('equipo')) || [];
    const EnElEquipo = equipo.some(p => p.nombre === pokemon.nombre);
    if (!EnElEquipo) {
        equipo.push(pokemon);
        localStorage.setItem('equipo', JSON.stringify(equipo));
        alert(`Agregaste a ${pokemon.nombre} a tu equipo!`);
        cargarEquipo();
    } else {
    alert(`${pokemon.nombre} ya está en tu equipo.`);
    }


}

function cargarEquipo() {
    let equipo = JSON.parse(localStorage.getItem('equipo')) || [];
    const equipoContenedor = document.getElementById('equipoelegido');
    
    equipo.forEach(pokemon => {
        const card = crearCard(pokemon);
        equipoContenedor.appendChild(card);
    });
}

const contenedor = document.getElementById('cardpokemon');
 
cargarEquipo();

pokemon.forEach(pokemon => {
    const card = crearCard(pokemon);
    contenedor.appendChild(card);
});

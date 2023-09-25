let orden = []
let offset = 1
let limit = 8
let detalleHabilidad = []
let divGrilla = document.querySelector("#grillaPK")
function busqueda(busquedas = "https://pokeapi.co/api/v2/pokemon/") {
    let busquedaUsuario = document.querySelector('#busquedaInput').value
    busquedas = `${busquedas}${busquedaUsuario}`
    fetch(busquedas)
        .then((res) => res.json())
        .then((resultadoBusqueda) => {
            console.log(resultadoBusqueda)
            divGrilla.innerHTML = ""
            botonespagina.innerHTML = ""
            let Nombreperfil = resultadoBusqueda.name
            let fotoperfil = resultadoBusqueda.sprites.front_default
            let Identificacionnn = resultadoBusqueda.id
            resultadoBusqueda.abilities.forEach(core => {
                //         const traduccionEspanol = dataHabilidad.names.find(nameInfo => nameInfo.language.name === 'es');
                //         const nombreEnEspanol = traduccionEspanol ? traduccionEspanol.name : abilityName;
                //         console.log(nombreEnEspanol)
                HabilidadBusqueda1 = core.ability.name
                if (core.is_hidden == false) {
                    HabilidadBusqueda2 = core.ability.name
                }
            })

            divGrilla.innerHTML += `
        <div class="col pt-3 pb-2 negro"> 
        <div class="card" style="width: 12rem;">
        <img src="${fotoperfil}" class="card-img-top" alt="...">
        <div class="card-body justify-content-center align-content-center" id="CoreHabilidades">
        <h5 class="card-title">${Nombreperfil}</h5>
        <div class="card-text">${Identificacionnn}</div>
                <ul class="list-group">
                <li class="list-group-item">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${HabilidadBusqueda1}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">${detalleHabilidad}</a></li>
                    </ul>
                </div>
                </li>
                <li class="list-group-item">
                <ul class="list-group">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${HabilidadBusqueda2}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">${detalleHabilidad}</a></li>
                    </ul>
        </div>
        </div>
        `
            botonespagina.innerHTML = `
        <div class="d-flex justify-content-center align-content-center">
        <a href=""><img class="poke" src="/assets/img/Pokebola.png" alt=""></a>
        </div>
        `
        }).catch(error => {
            // Maneja el error en caso de una respuesta 404 u otro error de red
            alert('El pokemon no existe');
        });
}
function Pokemon(id, apipk = `https://pokeapi.co/api/v2/pokemon/${id}/`) {
    fetch(apipk)
        .then((res) => res.json())
        .then((data) => {
            CrearPokemon(data)
        })
}
function Pokemons(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        Pokemon(i);
    }
}
function CrearPokemon(Pokemon) {
    Pokemon.abilities.forEach(core => {
        Habilidad1 = core.ability.name
        if (core.is_hidden == false) {
            Habilidad2 = core.ability.name
        }
        fetch(core.ability.url)
            .then((res) => res.json())
            .then((dataHabilidad) => {
                let dataaHabilidad = dataHabilidad.effect_entries.filter(dataaHabilidad => dataaHabilidad.effect)
                //         const traduccionEspanol = dataHabilidad.names.find(nameInfo => nameInfo.language.name === 'es');
                //         const nombreEnEspanol = traduccionEspanol ? traduccionEspanol.name : abilityName;
                //         console.log(nombreEnEspanol)

                //         const traduccionDescripcionEspanol = dataHabilidad.effect_entries.find(entry => entry.language.name === 'es');
                //         const descripcionEnEspanol = traduccionDescripcionEspanol
                // console.log(traduccionDescripcionEspanol)            
                // let dataHabilidadespañol = dataHabilidad.effect_entries.find((entry) => entry.language.name === 'es')
                // console.log(dataaHabilidad)
                // if (dataHabilidadespañol) {
                //     detalleHabilidad = dataHabilidadespañol.effect;
                // }          
                dataaHabilidad.forEach(Descripcion => {
                    let descripcionHabilidad = Descripcion.effect
                    detalleHabilidad.push(descripcionHabilidad)
                    console.log(detalleHabilidad)
                    // Con la variable detalleHabilidad ubique la url que hay en el array, y acceda a su idioma
                    fetch(`https://pokeapi.co/api/v2/language/7/`)
                        .then((res) => res.json())
                        .then((Traduccion) => {
                        })
                    let detallesHabilidades = document.querySelector(".Habil")
                    detallesHabilidades.innerHTML += `
                    <li><a class="dropdown-item" href="#">${detalleHabilidad}</a></li>

                    `

                    })
            });
    })
    divGrilla = document.querySelector("#grillaPK")
    let pre = Pokemon.name
    let img = Pokemon.sprites.front_default
    let Identificacion = Pokemon.id

    divGrilla.innerHTML += `
    <div class="col pt-3 pb-2 negro"> 
    <div class="card" style="width: 12rem;">
            <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body justify-content-center align-content-center" id="CoreHabilidades">

                <h5 class="card-title">${pre}</h5>
                <ul class="list-group">
                <div class="card-text">${Identificacion}</div>
                    <li class="list-group-item">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${Habilidad1}
                    </button>
                    <ul class="dropdown-menu Habil">
                       
                    </ul>
                </div>
                </li>
                <li class="list-group-item">
                <ul class="list-group">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${Habilidad2}
                    </button>
                    <ul class="dropdown-menu Habil">

                    </ul>
                    </div>
                    </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                    `
}
let botonespagina = document.querySelector(".botonespaginacion")
botonespagina.innerHTML += `
                <div class="pokeball-button">
                    <div class="button-label" id="prevv">Anterior</div>
                </div>
                <div class="pokeball-button">
                    <div class="button-label" id="nextt">Siguiente</div>
                </div>
`
let prev = document.querySelector("#prevv")
let next = document.querySelector("#nextt")

prev.addEventListener('click', () => {
    if (offset != 1) {
        offset -= 9
        Pokemons(offset, limit)
        divGrilla.innerHTML = ""
    }
})
next.addEventListener('click', () => {
    offset += 9
    Pokemons(offset, limit)
    divGrilla.innerHTML = ""
})
Pokemons(offset, limit)


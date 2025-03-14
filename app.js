
let arregloAmigos = [];

//Función que captura el valor de la entrada de texto y lo adiciona a un array.
function agregarAmigo(){
    let entradaTexto = document.getElementById('amigo').value;

    if(entradaTexto == ''){
        window.alert('Texto en blanco, por favor digite el nombre de un amigo');
    }else{
        arregloAmigos.push(entradaTexto);
        imprimirTextos('listaAmigos', arregloAmigos);
    }
    limpiarInputs('amigo');
}

//Función que escoge un amigo en una posición aleatoria dentro del array.
function sortearAmigo(){
    let posicionRandom = Math.floor(Math.random()*arregloAmigos.length);
    let amigoSecreto = arregloAmigos[posicionRandom];

    if(arregloAmigos == ''){
        window.alert('No se puede sortear ya que no has agregado ningún amigo');
    }else{
        imprimirTextos('resultado', 'El amigo secreto seleccionado para tí es: '+ amigoSecreto);
        limpiarInputs('listaAmigos');
    }
}

//Función que limpia los elementos del HTML
function limpiarInputs(idElemento){
    if(idElemento == 'listaAmigos'){
        document.getElementById('listaAmigos').innerHTML = '';
    }else{
        document.getElementById(idElemento).value = '';
    }
}

//Función que imprime textos en cualquier eiqueta HTMl, según su id.
function imprimirTextos(id, texto){
    let idElemento = document.getElementById(id);
    let lista = '';

    if(id == 'listaAmigos'){
        for(let i=0; i<arregloAmigos.length; i++){
            lista += '<li>'+arregloAmigos[i]+'</li>';
        }
        idElemento.innerHTML = lista;
    }else{
        idElemento.innerHTML = texto;
    }
}
const regalos =  ['teclado Mecanico', 'Mouse Logitech', 'Microfono HyperX', 'Audifonos HyperX', 'Camara Web Logitech',  'Pantalla 144hz', 'Mouse Pad'];

const sortear = (regalos) => {
    return regalos[Math.floor(Math.random() * regalos.length)];
}


const regalo = sortear(regalos);

console.log('El premio es', regalo);

const perdedor = () => {
    alert('Que lastima :(')
}

const ganador = (premio) => {
    alert('Ganaste un ' + premio);
}


for (let contador = 0; contador < 3; contador++) {
    console.log(contador);
    let juega = confirm('Desea Participar');
    if(juega) {
        let comprobarRegalo = sortear(regalos);
        if(regalo === comprobarRegalo) {
            ganador(regalo);
            break;
        } else if (contador == 2) {
            perdedor();
        }
    } else {
        perdedor();
        break;
    }
    
}




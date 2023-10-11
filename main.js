
function inicioPromedio() {
    alert("Verifique su nota final de cursada.");
    const cantidadParciales = Number(prompt("Indique la cantidad de parciales realizados en el año"));

    if (cantidadParciales < 1 || cantidadParciales === " ") {
        alert("Dato no valido");
        location.reload();
    } else if (cantidadParciales >= 1 || cantidadParciales <= 10) {
        const promedioFinal = promedio(Number(cantidadParciales));
        respuestaFinal(promedioFinal);
    } else {
        alert("Dato no valido");
        location.reload();
    }
}

function promedio(numParcial) {
    let totalParciales = 0;
    for (let i = 0; i < numParcial; i++) {
        let notaParcial = Number(prompt(`Nota del parcial N° ${i + 1}`));
        while (notaParcial > 10 || notaParcial < 1 || notaParcial != parseInt(notaParcial) ) {
        alert("Nota no válida, el valor tiene que estar entre 1 y 10");
        notaParcial = Number(prompt(`Ingrese nuevamente la nota del parcial N° ${i + 1}`));
        }

        totalParciales = totalParciales + notaParcial;
    }

    return Math.round(totalParciales / numParcial);
}

function respuestaFinal(resultado) {
    switch (resultado) {
        case 10:
            alert(`Nota final ${resultado}. Aprobado`);
            break;
        case 9:
            alert(`Nota final ${resultado}. Aprobado`);
            break;
        case 8:
            alert(`Nota final ${resultado}. Aprobado`);
            break;
        case 7:
            alert(`Nota final ${resultado}. Aprobado.`);
            break;
        case 6:
            alert(`Nota final ${resultado}. Desaprobado.`);
            break;
        case 5:
            alert(`Nota final ${resultado}. Desaprobado.`);
            break;
        case 4:
            alert(`Nota final ${resultado}. Desaprobado.`);
            break;
        case 3:
            alert(`Nota final ${resultado}. Desaprobado.`);
            break;
        default:
            alert(`Nota final ${resultado}. Desaprobado`);
            break;
    }
}

inicioPromedio();
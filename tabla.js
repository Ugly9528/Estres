function generarTabla() {
    // Obtenemos el valor del input por su ID
    let num = document.getElementById("numeroInput").value;
    let contenedor = document.getElementById("contenedorTabla");
    
    // Validación simple para asegurar que haya un número
    if (num === "") {
        alert("Por favor ingresa un número");
        return;
    }

    // Iniciamos la construcción de la tabla
    let tablaHTML = "<table>";
    
    // Ciclo para generar las 10 filas (1 al 10)
    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        
        // Formato solicitado: NumeroIngresado | x | n | = | Resultado
        tablaHTML += `
            <tr>
                <td>${num}</td>
                <td>x</td>
                <td>${i}</td>
                <td>=</td>
                <td>${resultado}</td>
            </tr>`;
    }
    
    tablaHTML += "</table>";
    
    // Insertamos el contenido generado en el div del HTML
    contenedor.innerHTML = tablaHTML;
}
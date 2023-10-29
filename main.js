
const menuHamburguesas = [
    { id: 1, nombre: "Clasica", precio: 1500, stock: 5 },
    { id: 2, nombre: "Doble Cheddar", precio: 2200, stock: 5 },
    { id: 3, nombre: "Barbacoa", precio: 2000, stock: 5 },
    { id: 4, nombre: "Veggie", precio: 1800, stock: 5 },
];

const menuPizzas = [
    { id: 5, nombre: "Comun", precio: 1500, stock: 5 },
    { id: 6, nombre: "Cuatro Quesos", precio: 2500, stock: 5 },
    { id: 7, nombre: "Fugazzetta Rellena", precio: 3000, stock: 5 },
    { id: 8, nombre: "Especial", precio: 2000, stock: 5 },
];

const recargo = (total, recargo) => total * recargo;
const descuento = (total, desc) => total - (total * desc);

const carrito = [];

let dobleMenu = prompt("Por favor escriba el menu: HAMBURGUESA / PIZZA").toLowerCase();

if (dobleMenu === "hamburguesa") {
    alert("Menú de Hamburguesas");

    let filtrarPrecio = Number(prompt("Precio maximo dispuesto a pagar? (min 1500 - max 2200)"));
    while (filtrarPrecio < 1500) {
        filtrarPrecio = Number(prompt("Precio minimo 1500$, porfavor ingrese un valor mayor o igual. Muchas gracias"));
    }

    const filtrarHamburguesas = menuHamburguesas.filter(producto => producto.precio <= filtrarPrecio);

    while (true) {
        const ingresarCarrito = prompt("Ingrese el ID de la Hamburguesa para añadir al Carrito" + "\n" + filtrarHamburguesas.map(producto => `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" + "Si desea finalizar la compra escriba: CERRAR").toLowerCase();
            
        if (ingresarCarrito === "cerrar") {
            break;
        }
            
        const idSeleccionado = parseInt(ingresarCarrito);

        const productoSeleccionado = filtrarHamburguesas.find(producto => producto.id === idSeleccionado);

        if (productoSeleccionado) {
            if (productoSeleccionado.stock > 0) {
                carrito.push(productoSeleccionado);
                productoSeleccionado.stock--;
                alert(`${productoSeleccionado.nombre} ha sido añadido al carrito.`);
            } else {
                alert("El producto está agotado.");
            }
        } else {
            alert("Producto no encontrado. Por favor, ingrese un ID válido.");
        }
    }
        
    const total = carrito.reduce ((acum, producto) => acum + producto.precio, 0);

    if (carrito.length > 0) {
        alert ("Carrito de compras:\n" + carrito.map(producto => `Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" + `Total: $${total}`);
    }else{
        alert ("Carrito vacio");
    }
    while (true) {
        let formaDePago = Number(prompt("Seleccione la forma de pago:\n 1 - Tarjeta de Crédito (+10%) \n 2 - Debito/Transferencia(-10%)"));

        if (formaDePago === 1) {
            alert(`Total con recargo: $${recargo(total, 1.10)}`);
            break;
        } else if (formaDePago === 2) {
            alert(`Total con descuento: $${descuento(total, 0.10)}`);
            break;
        } else {
            alert("Por favor seleccione una forma de pago valida, ingrese 1 o 2.");
        }
    }

} else if (dobleMenu === "pizza") {
    alert("Menú de Pizzas");

    let filtrarPrecio = Number(prompt("Precio maximo dispuesto a pagar? (min 1500 - max 3000)"));
    while (filtrarPrecio < 1500) {
        filtrarPrecio = Number(prompt("Precio minimo 1500$, porfavor ingrese un valor mayor o igual. Muchas gracias"));
    }

    const filtrarPizza = menuPizzas.filter(producto => producto.precio <= filtrarPrecio);

    while (true) {
        const añadirPizza = prompt("Ingrese el ID de la Pizza para añadir al Carrito" + "\n" + filtrarPizza.map(producto => `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" + "Si desea finalizar la compra escriba: CERRAR").toLowerCase();

        if (añadirPizza === "cerrar") {
            break;
        }

        const idPizza = parseInt(añadirPizza);

        const pizzaSeleccionado = menuPizzas.find(producto => producto.id === idPizza);

        if (pizzaSeleccionado) {
            if (pizzaSeleccionado.stock > 0) {
                carrito.push(pizzaSeleccionado);
                pizzaSeleccionado.stock--;
                alert(`${pizzaSeleccionado.nombre} ha sido añadido al carrito.`);
            } else {
                alert("El producto está agotado. Por favor, seleccione otro.");
            }
        } else {
            alert("Producto no encontrado. Por favor, ingrese un ID válido.");
        }
    }
    const total = carrito.reduce ((acum, producto) => acum + producto.precio, 0);

    if (carrito.length > 0) {
        alert ("Carrito de compras:\n" + carrito.map(producto => `Nombre: ${producto.nombre}, Precio: $${producto.precio}`).join("\n") + "\n" + `Total: $${total}`);
    }else{
        alert ("Carrito vacio");
    }
    while (true) {
        let formaDePago = Number(prompt("Seleccione la forma de pago:\n 1 - Tarjeta de Crédito (+10%) \n 2 - Debito/Transferencia (-10%)"));

        if (formaDePago === 1) {
            alert(`Total con recargo: $${recargo(total, 1.10)}`);
            break;
        } else if (formaDePago === 2) {
            alert(`Total con descuento: $${descuento(total, 0.10)}`);
            break;
        } else {
            alert("Por favor seleccione una forma de pago valida, ingrese 1 o 2.");
        }
    }
}

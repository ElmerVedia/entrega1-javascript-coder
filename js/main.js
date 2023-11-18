const productos = [
    {
        id: "h-01",
        nombre: "Hamburguesa Cesar",
        precio: 2000,
        imagen:"./img/img-hamburguesa/h-cesar.jpg",
        categoria: {
            nombre: "HAMBURGUESAS",
            id: "hamburguesas"
        }
    },
    {
        id: "h-02",
        nombre: "Hamburguesa Cheese",
        precio: 2200,
        imagen:"./img/img-hamburguesa/h-cheese.jpg",
        categoria: {
            nombre: "Hamburguesa Chesse",
            id: "hamburguesas"
        }
    },
    {
        id: "h-03",
        nombre: "Hamburguesa Clasica",
        precio: 2000,
        imagen:"./img/img-hamburguesa/h-clasica.jpg",
        categoria: {
            nombre: "Hamburguesa Clasica",
            id: "hamburguesas"
        }
    },
    {
        id: "h-04",
        nombre: "Hamburguesa De La Casa",
        precio: 2500,
        imagen:"./img/img-hamburguesa/h-delacasa.jpg",
        categoria: {
            nombre: "Hamburguesa De La casa",
            id: "hamburguesas"
        }
    },
    {
        id: "h-05",
        nombre: "Hamburguesa Devil",
        precio: 2300,
        imagen:"./img/img-hamburguesa/h-devil.jpg",
        categoria: {
            nombre: "Hamburguesa Devil",
            id: "hamburguesas"
        }
    },
    {
        id: "p-01",
        nombre: "Pizza Caprichosa",
        precio: 3000,
        imagen:"./img/img-pizzas/p-caprichosa.jpg",
        categoria: {
            nombre: "PIZZAS",
            id: "pizzas"
        }
    },
    {
        id: "p-02",
        nombre: "Pizza Cuatro Estaciones",
        precio: 3500,
        imagen:"./img/img-pizzas/p-cuatro-estaciones.jpg",
        categoria: {
            nombre: "Pizza Cuatro Estaciones",
            id: "pizzas"
        }
    },
    {
        id: "p-03",
        nombre: "Pizza Jamon y Rucula",
        precio: 4000,
        imagen:"./img/img-pizzas/p-jamon-y-rucula.jpg",
        categoria: {
            nombre: "Pizza Jamon y Rucula",
            id: "pizzas"
        }
    },
    {
        id: "p-04",
        nombre: "Pizza Romana",
        precio: 4000,
        imagen:"./img/img-pizzas/p-romana.jpg",
        categoria: {
            nombre: "Pizza Romana",
            id: "pizzas"
        }
    },
    {
        id: "p-05",
        nombre: "Pizza Veggie",
        precio: 4500,
        imagen:"./img/img-pizzas/p-veggie.jpg",
        categoria: {
            nombre: "Pizza Veggie",
            id: "pizzas"
        }
    },
    {
        id: "pp-01",
        nombre: "Aros de cebolla",
        precio: 2000,
        imagen:"./img/img-papas/cebolla-aros.jpg",
        categoria: {
            nombre: "PAPAS",
            id: "papas"
        }
    },
    {
        id: "pp-02",
        nombre: "Papas con Cheddar",
        precio: 2000,
        imagen:"./img/img-papas/p-cheddar-panceta.png",
        categoria: {
            nombre: "Papas con Cheddar",
            id: "papas"
        }
    },
    {
        id: "pp-03",
        nombre: "Papas Clasicas",
        precio: 1800,
        imagen:"./img/img-papas/p-clasicas.jpeg",
        categoria: {
            nombre: "Papas Clasica",
            id: "papas"
        }
    },
    {
        id: "pp-04",
        nombre: "Papas Rellena de Carne",
        precio: 2300,
        imagen:"./img/img-papas/p-rellena-carne.jpg",
        categoria: {
            nombre: "Papas Rellena de Carne",
            id: "papas"
        }
    },
    {
        id: "pp-05",
        nombre: "Papas Rellena de Queso",
        precio: 2300,
        imagen:"./img/img-papas/p-rellena-queso.jpg",
        categoria: {
            nombre: "Papas Rellena de Queso",
            id: "papas"
        }
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const cantidadCarrito = document.querySelector("#cantidad-carrito");

//Agregar Productos a HTML
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);

//Menu CATEGORIAS
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "inicio") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "PRODUCTOS COSMO FOOD";
            cargarProductos(productos);
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

//Agregar Productos a CARRITO
const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarCantidadCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

//Actualizar cantidad de CARRITO
function actualizarCantidadCarrito() {
    let nuevaCantidadCarrito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidadCarrito.innerHTML = nuevaCantidadCarrito;
}
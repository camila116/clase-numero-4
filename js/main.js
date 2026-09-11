const productos = ["Manzana", "Pan", "Leche", "Arroz", "Cafe"];

productos.push("Huevos");
productos.unshift("Aceite");

const productoEliminado = productos.pop();
document.querySelector("#operation-message").textContent =
	`Se ha eliminado el elemento: ${productoEliminado}`;

productos[1] = "Pan casero";

const indiceArroz = productos.indexOf("Arroz");
productos.splice(indiceArroz, 1, "Arroz integral");

const productoBuscado = "Leche";
const productoExiste = productos.includes(productoBuscado);
const resultadoBusqueda = document.querySelector("#search-result");

if (productoExiste) {
	const indiceProducto = productos.indexOf(productoBuscado);
	resultadoBusqueda.textContent =
		`${productoBuscado} existe y esta en el indice ${indiceProducto}.`;
} else {
	resultadoBusqueda.textContent = `${productoBuscado} no esta en la lista.`;
}

function mostrarProductos() {
	const lista = document.querySelector("#inventory-report");

	for (const producto of productos) {
		const elemento = document.createElement("li");
		elemento.textContent = `Producto: ${producto}`;
		lista.append(elemento);
	}
}

mostrarProductos();
console.log("Lista final:", productos);

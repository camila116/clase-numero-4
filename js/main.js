const inventory = ["Manzana", "Pan", "Leche", "Arroz", "Cafe"];
const report = document.querySelector("#inventory-report");
const operationMessage = document.querySelector("#operation-message");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#product-search");
const searchResult = document.querySelector("#search-result");

inventory.push("Huevos");
inventory.unshift("Aceite");

const removedProduct = inventory.pop();
operationMessage.textContent = `Se ha eliminado el elemento: ${removedProduct}`;

const productIndexToUpdate = inventory.indexOf("Arroz");
if (productIndexToUpdate !== -1) {
	inventory.splice(productIndexToUpdate, 1, "Arroz integral");
}

function showInventory() {
	report.innerHTML = "";

	for (const product of inventory) {
		const listItem = document.createElement("li");
		listItem.textContent = `Producto: ${product}`;
		report.append(listItem);
	}
}

function searchProduct(productName) {
	const normalizedName = productName.trim();
	const productExists = inventory.includes(normalizedName);

	if (productExists) {
		const productIndex = inventory.indexOf(normalizedName);
		searchResult.textContent = `${normalizedName} existe y se encuentra en el indice ${productIndex}.`;
	} else {
		searchResult.textContent = `${normalizedName} no se encuentra en el inventario.`;
	}
}

searchForm.addEventListener("submit", (event) => {
	event.preventDefault();
	searchProduct(searchInput.value);
});

showInventory();
console.log("Inventario inicializado:", inventory);
console.log(operationMessage.textContent);

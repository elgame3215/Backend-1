export class ProductValidator {
	static #requiredKeys = [
		'title',
		'description',
		'code',
		'price',
		'status',
		'stock',
		'category'
	]
	static validateKeys(product) {
		const keys = Object.keys(product);
		if (!this.#requiredKeys.every(requiredKey => keys.includes(requiredKey))) {
			throw new Error("Campos faltantes");
		}
	}

	static validateValues(product) {
		for (const key in product) {
			const value = product[key];
			if (new String(value) == '' && this.#requiredKeys.includes(key)) {
				throw new Error("Todos los campos obligatorios deben estar completos");
			}
		}
	}

	static validateCode(product, products) {
		const { code } = product;
		if (products.some(p => p.code == code)) {
			throw new Error("Código ya existente");
		};
	}
}
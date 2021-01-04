const normalizedCategories = [
	{
		id: 'ed24fdeb-84c4-4cc5-9518-e768e1e35cb6',
		name: 'Венецианские зеркала',
		products: [
			'87ef588c-c539-45f8-b3bd-bc3b6f63cd20',
			'ba64fb8a-d5e3-4cca-8c19-c1424e8c9a47',
		]
	},
	{
		id: 'cde28e4f-9a85-45a4-8509-cc2b60843775',
		name: 'Напольные зеркала',
		products: [
			'2149ef1c-990f-4940-91d6-aa26a0c0277e',
			'9918a242-1bf5-4a4c-b167-9dfb6c5910f8',
		]
	},
];

const normalizedProducts = [
	{
		id: '87ef588c-c539-45f8-b3bd-bc3b6f63cd20',
		name: 'Зеркало в металлической раме Kitech (Китех)',
		price: 25000,
		images: "../../src/assets/images/content/product-1.jpg",
	},
	{
		id: 'ba64fb8a-d5e3-4cca-8c19-c1424e8c9a47',
		name: 'Зеркало в металлической раме Hi-Tech (Хайтэк)',
		price: 27500,
		images: "../../src/assets/images/content/product-3.jpg",
	},
	{
		id: '2149ef1c-990f-4940-91d6-aa26a0c0277e',
		name: 'Зеркало в полный рост Line (Лайн)',
		price: 25000,
		images: "../../src/assets/images/content/productFloor-1.jpg",
	},
	{
		id: '9918a242-1bf5-4a4c-b167-9dfb6c5910f8',
		name: 'Зеркало в полный рост Franco Mid (Франко)',
		price: 35000,
		images: "../../src/assets/images/content/productFloor-2.jpg",
	},
];


module.exports = {
	products: normalizedProducts,
	categories: normalizedCategories,
};

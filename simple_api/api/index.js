const router = require('express').Router();
const {categories, products} = require('./mock');
const { reply, getById } = require('./utils');

router.get('/categories', (req, res, next) => {
	reply(res, categories);
});

router.get('/products', (req, res, next) => {
	const { id } = req.query;
	let result = products;
	if (id) {
		const category = getById(categories)(id);
		if (category) {
			result = category.products.map(getById(result));
		}
	}
	reply(res, result);
});


module.exports = router;
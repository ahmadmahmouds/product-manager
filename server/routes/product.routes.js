const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);



}
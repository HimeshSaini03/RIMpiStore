const Product = require("../models/product"); 

exports.getLandingProducts = async (req, res) => {
    try {
        const products = await Product.findAll({ limit: 5 });
        res.json(products);
    } catch (error) {
        console.error("Error fetching landing products:", error);
        res.status(500).json({ message: "Server Error", error });
    }
};




exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, stock, image } = req.body; 
        const product = await Product.create({ name,description, price, stock, image });
        res.status(201).json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error", error });
    }
};


exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const { name, price, stock, image } = req.body;
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.stock = stock || product.stock;
        product.image = image || product.image;

        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        await product.destroy();
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

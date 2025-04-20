const Store = require("../models/Store");
const Product = require("../models/Product");
const Order = require("../models/Order");


//Get all store
exports.getStore = async (req, res) => {
    try {
        const store = await Store.find();
        if (!store || store.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No stores found",
            });
        }

        res.status(200).json({
            success: true,
            store,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

//add store
exports.addStore = async (req, res) => {
    try {
        const { name, location } = req.body;

        if (!name || !location) {
            return res.status(400).json({
                success: false,
                message: "Name and location are required",
            });
        }

        const newStore = new Store({ name, location });
        await newStore.save();

        res.status(201).json({
            success: true,
            message: "Store added successfully",
            store: newStore,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// Get store by ID
exports.getStoreById = async (req, res) => {
    try {
        const { id } = req.params;

        const store = await Store.findById(id);

        if (!store) {
            return res.status(404).json({
                success: false,
                message: "Store not found",
            });
        }

        res.status(200).json({
            success: true,
            store,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};



// Get all products
exports.getProduct = async (req, res) => {
    try {
        const products = await Product.find().populate("storeName");

        if (!products || products.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found",
            });
        }

        res.status(200).json({
            success: true,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// add product
exports.addProduct = async (req, res) => {
    try {
        const { name, price, quantity, storeName,image } = req.body;

        if (!name || price == null || quantity == null || !storeName) {
            return res.status(400).json({
                success: false,
                message: "All fields (name, price, quantity, storeName) are required",
            });
        }

        const product = new Product({ name, price, quantity, storeName,image });
        await product.save();

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id).populate("storeName");

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// Get products by store ID
exports.getProductsByStoreId = async (req, res) => {
    try {
      const { storeId } = req.params;
  
      const products = await Product.find({ storeName: storeId })
        .populate("storeName", "name location") 
        .lean();
  
      if (!products || products.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No products found for this store",
          data: [],
        });
      }
  
      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
  
  


// Get all orders
exports.getOrder = async (req, res) => {
    try {
        const orders = await Order.find();

        if (!orders || orders.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No orders found",
            });
        }

        res.status(200).json({
            success: true,
            orders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};

// Add a new order
exports.addOrder = async (req, res) => {
    try {
        const { product, username } = req.body;

        if (!product || !username) {
            return res.status(400).json({
                success: false,
                message: "Fields product and userName are required",
            });
        }

        const order = new Order({
            product,
            username: username || "Guest"
        });

        await order.save();

        res.status(201).json({
            success: true,
            message: "Order added successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
};


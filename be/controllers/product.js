const {Product} = require("../model/product");


const test = async (req, res) => {
  try {
    res.status(200).json("helo world");
  } catch (error) {
    res.status(404).json(error);
  }
};

const postProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      res.status(404).json({ message: "all field required !!!" });
    } else {
      const product = new Product(req.body);
     const data = await product.save();
     res.status(201).json(data);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "no product found !!!" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res
        .status(404)
        .json({ message: "no product found with id : " + id + " !!!" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      const up = await Product.findByIdAndUpdate(id, req.body, { new: true });
      res.status(201).json(up);
    } else {
      res
        .status(404)
        .json({ message: "no product found with id : " + id + " !!!" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product) {
      const up = await Product.deleteOne({ _id: id });
      res.status(200).json(up);
    } else {
      res
        .status(404)
        .json({ message: "no product found with id : " + id + " !!!" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  postProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  test,
};

const { Product } = require("../models");
const product = require("../models/product");

class Controller {
  static async showProducts(req, res, next) {
    try {
      const data = await Product.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async createProduct(req, res, next) {
    try {
      const data = await Product.create({
        ...req.body,
      });

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async editProduct(req, res, next) {
    try {
      const data = await Product.update(
        { ...req.body },
        {
          where: { id: req.params.id },
          returning: true,
        }
      );

      if (!data) throw { name: "NotFound" };
      console.log(data, "<<<<<<<");
      res.status(200).json({ message: "edit product successfully" });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const data = await Product.findOne({
        where: { id: req.params.id },
      });
      if (!data) throw { name: "NotFound" };
      await Product.destroy({ where: { id: req.params.id } });
      res
        .status(200)
        .json({ message: `data with id ${data.id} success to delete` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;

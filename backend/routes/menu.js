const express = require('express');
const { FoodItem, Category, Restaurant } = require('../models/Category');
const router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

router.get('/category/:restaurant_id', async (req, res, next) => {
  console.log('====GET REQUEST CATEGORY====');
  try {
    const categories = await Category.find({
      restaurant: new ObjectId(req.params.restaurant_id),
    });
    res.send(categories);
  } catch (err) {
    next(err);
  }
});

router.get('/restaurant/:restaurant_id', async (req, res, next) => {
  console.log('====GET REQUEST RESTAURANT====', req.params);
  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    const r = restaurant.toObject();
    r.categories = await Category.find({
      restaurant: new ObjectId(req.params.restaurant_id),
    });
    console.log(r);

    res.send(r);
  } catch (err) {
    next(err);
  }
});

router.get('/restaurants', async (req, res, next) => {
  console.log('====GET REQUEST RESTAURANT====', req.params);
  try {
    const restaurant = await Restaurant.find();

    res.send(restaurant);
  } catch (err) {
    next(err);
  }
});

router.post('/category', async (req, res, next) => {
  console.log(req);
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    next(err);
  }
  try {
    console.log();
    const category = new Category({
      name: req.query.name,
      items: [],
    });
    await category.save();
    res.send(category);
  } catch (err) {
    next(err);
  }
});


router.post('/restaurant', async (req, res, next) => {
  try {
    const restaurant = new Restaurant({
      name: req.query.name,
      image: req.query.image,
    });
    await restaurant.save();
    res.send(restaurant);
  } catch (err) {
    next(err);
  }
});

router.get('/fooditem', async (req, res, next) => {
  try {
    const categories = await Category.find({ _id: req.query.id });

    const item = new FoodItem({
      name: req.query.name,
      description: req.query.description,
    });

    res.send(categories);
  } catch (err) {
    next(err);
  }
});

router.post('/fooditem', async (req, res, next) => {
  try {
    const category = await Category.findOne({ _id: req.query.category_id });
    const item = new FoodItem({
      name: req.query.name,
      description: req.query.description,
      price: req.query.price,
      img: req.query.image,
    });

    category.items.push(item);
    await category.save();

    res.send(item);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

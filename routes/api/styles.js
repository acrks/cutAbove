const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const Style = require("../../models/Style");
const validateStyle = require("../../validation/style");

router.get("/test", (req, res) => res.json({ msg: "This is the cuts route 1" }));

// fetches all style
router.get(
  "/",
  (req, res) => {
    Style.find()
      .then(styles => res.json(styles))
      .catch(err => res.status(404).json({ nostylesfound: "No styles found" }));
  }
)

// fetch one style
router.get(
  "/:id",
  (req, res) => {
    Style.findById(req.params.id)
      .then(style => res.json(style))
      .catch(err => res.status(404).json({ nostylesfound: "No styles found by that Id" }))
  }
)

// fetch all styles stylist created
router.get(
  "/stylist/:stylistId",
  (req, res) => {
    Style.find({stylistId: req.params.stylistId})
      .then(styles => res.json(styles))
      .catch(err => res.status(404).json({ nostylesfound: "No styles found by that Id"}))
  }
)

router.post(
  "/",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid } = validateStyle(req.body);
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newStyle = new Style({
      styleType: req.body.styleType,
      description: req.body.description,
      price: req.body.price,
      stylistId: req.body.stylistId,
      imageUrl: req.body.imageUrl
    });
    newStyle.save()
      .then(style => res.json(style));
  }
)

router.patch(
  "/:id",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // const { errors, isValid } = validateStyle(req.body);
    // if (!isValid) {
    //   return res.status(400).json(errors)
    // }

    Style.findByIdAndUpdate((req.params.id === req.body.id), req.body, { new: true })
      .then(style => res.json(style))
      .catch(err => res.status(404).json({ nostylefound: "No style found by that Id" }))
  }
)

router.delete(
  "/:styleId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Style.deleteOne({_id: req.params.styleId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ nostylefound: "No style found by that Id" }))
  }
)

// app.delete('/api/stuff/:id', (req, res, next) => {
  // Thing.deleteOne({_id: req.params.id}).then(
  //   () => {
  //     res.status(200).json({
  //       message: 'Deleted!'
  //     });
  //   }
  // ).catch(
  //   (error) => {
  //     res.status(400).json({
  //       error: error
  //     });
  //   }
  // );

module.exports = router;
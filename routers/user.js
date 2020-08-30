const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Pet = require("../models/").pet;
const Order = require("../models/").order;
const TypeOrder = require("../models").typeOrder;

const Type = require("../models").type;
const router = new Router();

router.get("/dashboard", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, { include: [Pet] });
    if (user === null) {
      return res.status(404).send({ message: "This user does not exist" });
    }
    if (!user.id === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this homepage" });
    }

    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});
router.post("/newpet", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (user === null) {
      return res.status(404).send({ message: "This user does not exist" });
    }

    if (!user.id === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this user" });
    }
    const {
      type,
      name,
      birthday,
      sex,
      imageOfPet,
      breed,
      descriptionOfPet,
    } = req.body;
    if (
      !type ||
      !name ||
      !birthday ||
      !sex ||
      !imageOfPet ||
      !breed ||
      !descriptionOfPet
    ) {
      return res.status(400).send({ message: "Please provide all fileds" });
    }

    const newPet = await Pet.create({
      type,
      name,
      birthday,
      sex,
      imageOfPet,
      breed,
      descriptionOfPet,
      userId: req.user.id,
    });
    return res.status(201).send({ message: "your New pet added", newPet });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/dashboard/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("id is ", id);
    const order = await Pet.findByPk(id, { include: Order });
    console.log("id is ", order.dataValues);
    return res.status(201).send({ message: "success", order });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/neworder/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      start,
      end,
      latitude,
      longitude,
      descriptionOfOrder,
      total,
    } = req.body;
    const service = await Order.create({
      start,
      end,
      latitude,
      longitude,
      descriptionOfOrder,
      total,
      petId: id,
    });
    return res.status(201).send({ message: "success", service });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/newtypeorder/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;

    const { price, typeId } = req.body;
    const newTypeorder = await TypeOrder.create({
      price,
      orderId: id,
      typeId,
    });
    return res.status(201).send({ message: "success", newTypeorder });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;

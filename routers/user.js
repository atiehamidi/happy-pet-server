const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Pet = require("../models/").pet;

const Type = require("../models").type;
const router = new Router();

router.get("/type", async (req, res, next) => {
  try {
    const type = await Type.findAll();

    if (!type) {
      return res.status(400).send({
        message: "type not exiect",
      });
    }
    return res.status(200).send(type);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/clients", async (req, res, next) => {
  try {
    const clients = await Pet.findAll();

    if (!clients) {
      return res.status(400).send({
        message: "client not exiect",
      });
    }
    return res.status(200).send(clients);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

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

module.exports = router;

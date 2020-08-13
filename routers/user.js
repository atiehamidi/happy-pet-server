const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Client = require("../models/").pet;

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
    const clients = await Client.findAll();

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

module.exports = router;

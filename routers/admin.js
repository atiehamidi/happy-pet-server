const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Pet = require("../models/").pet;
const Order = require("../models/").order;
const TypeOrder = require("../models").typeOrder;

const Type = require("../models").type;
const router = new Router();

router.get("/admin", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const orders = await Order.findAll();
    if (!user || !user.admin) {
      return res.status(400).send({ message: "this user doesn't Admin" });
    } else {
      return res.status(201).send({ message: "success", orders });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/admin/:id", authMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const orders = await Order.findAll();
    const order = await Order.findByPk(req.params.id);
    if (false) {
      return res.status(400).send({ message: "this user doesn't Admin" });
    } else {
      order.done
        ? await order.update({ done: "false" })
        : await order.update({ done: "true" });

      return res
        .status(201)
        .send({ message: "statuses updated successfully", orders });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;

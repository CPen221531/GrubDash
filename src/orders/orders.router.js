const router = require("express").Router();
const controller = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:orderId")
  .get(controller.read)      // Get specific order
  .put(controller.update)    // Update specific order
  .delete(controller.delete) // Delete specific order
  .all(methodNotAllowed);    // Handle unsupported methods

router.route("/")
  .get(controller.list)      // List all orders
  .post(controller.create)   // Create a new order
  .all(methodNotAllowed);    // Handle unsupported methods

module.exports = router;
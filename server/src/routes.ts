import express from "express";

import ClassesController from "./controllers/classesController";
import ConnectionsController from "./controllers/ConnectionsControllers";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello Wolrd!!" });
});

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;

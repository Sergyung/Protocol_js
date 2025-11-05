import { Router, urlencoded, static as staticMiddleware } from "express";
import methodOverride from 'method-override';

import { mainPage, addShipNew, addShip, addMotorNew, addMotor, addProtocol } from "./controllers/todos.js";

const router = Router();

router.use(staticMiddleware('public'));
router.use(urlencoded({ extended: true }))
router.use(methodOverride('_method'))

router.get('/addShip', addShipNew);
router.post('/addShip', addShip);
router.get('/addMotor', addMotorNew);
router.post('/addMotor', addMotor);
router.get('/addProtocol', addProtocol)
router.get('/', mainPage);

export default router;
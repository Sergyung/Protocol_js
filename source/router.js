import { Router, urlencoded, static as staticMiddleware } from "express";
import methodOverride from 'method-override';

import { mainPage, addShipNew, addShip } from "./controllers/todos.js";

const router = Router();

router.use(staticMiddleware('public'));
router.use(urlencoded({ extended: true }))
router.use(methodOverride('_method'))

router.get('/add', addShipNew);
router.post('/add', addShip);
router.get('/', mainPage);

export default router;
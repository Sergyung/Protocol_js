import { getList } from "../models/todos.js";
import { addItemShip, getListShip } from "../models/ships.js";
import { addItemMotor } from "../models/motors.js";

export function mainPage(req, res) {
  res.render('main', {
    title:'Главная'
  });
}

export function addShipNew(req, res) {
  res.render('addShip', {
    todos: getList(),
    title:'Добавление теплохода'
  });
}

export function addShip(req, res) {
  const ship = {
    owner: req.body.owner,
    nameShip: req.body.nameShip,
    numberShip: req.body.numberShip,
    projectShip: req.body.projectShip,
    gdShip: req.body.gd,
    dgShip: req.body.dg
  }
  addItemShip(ship);
  res.redirect('/')
}

export function addMotorNew(req, res) {
  res.render('addMotor', {
    todos: getList(),
    ships: getListShip(),
    title:'Добавление двигателя'
  });
}

export function addMotor(req, res) {
  const motor = {}
  addItemShip(motor);
  res.redirect('/')
}
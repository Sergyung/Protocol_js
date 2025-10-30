import { getList } from "../models/todos.js";
import { addItemShip } from "../models/ships.js";

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
  const todo = {
    owner: req.body.owner,
    nameShip: req.body.nameShip,
    numberShip: req.body.numberShip,
    projectShip: req.body.projectShip,
    gdShip: req.body.gd,
    dgShip: req.body.dg
  }
  addItemShip(todo);
  res.redirect('/')
}

export function addMotorNew(req, res) {
  res.render('addMotor', {
    todos: getList(),
    title:'Добавление двигателя'
  });
}

export function addMotor(req, res) {
  console.log(2)
}
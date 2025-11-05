import { getList } from "../models/todos.js";
import { addItemShip, getListShip } from "../models/ships.js";
import { addItemMotor, getListMotor } from "../models/motors.js";

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
  const motor = {
    shipId: req.body.shipId,
    modelMotor: req.body.modelMotor,
    numberMotor: req.body.numberMotor,
    yearMotor: req.body.yearMotor,
    yearRepair: req.body.yearRepair || "",
    factoryMotor: req.body.factoryMotor,
    purposeMotor: req.body.purposeMotor,
    locationMotor: req.body.locationMotor,
    timeMotor: req.body.timeMotor,
    powerMotor: req.body.powerMotor,
    speedMotor: req.body.speedMotor,
    fuelFlow: req.body.fuelFlow,
    numberCylinders: req.body.numberCylinders,
    cylinderPosition: req.body.cylinderPosition,
    diametrCylinder: req.body.diametrCylinder,
    pistonStroke: req.body.pistonStroke,
    ratioCompress: req.body.ratioCompress,
    injectionAngle: req.body.injectionAngle,
    boost: req.body.boost,
    pressure: req.body.pressure
  }
  addItemMotor(motor);
  res.redirect('/')
}

export function addProtocol(req, res) {
  res.render('addProtocol', {
    todos: getList(),
    ships: getListShip(),
    motors: getListMotor(),
    title:'Новый протокол'
  });
  // console.log(motors.purposeMotor || "пусто")
}
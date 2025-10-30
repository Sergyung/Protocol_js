import { database, saveDatabase, getObjectId } from "./__loaddatabase.js";

const ships = database.ships;

export function getListShip() {
  return ships
}

export function addItemShip(todo) {
  todo._id = getObjectId();
  ships.push(todo);
  saveDatabase();
}
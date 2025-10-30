import { database, saveDatabase, getObjectId } from "./__loaddatabase.js";

const motors = database.motors;

export function getListMotor() {
  return ships
}

export function addItemMotor(todo) {
  motor._id = getObjectId();
  motors.push(motor);
  saveDatabase();
}
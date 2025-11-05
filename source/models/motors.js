import { database, saveDatabase, getObjectId } from "./__loaddatabase.js";

const motors = database.motors;

export function getListMotor() {
  
  return motors
}

export function addItemMotor(motor) {
  motor._id = getObjectId();
  motors.push(motor);
  saveDatabase();
}
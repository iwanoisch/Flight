import {InitManagers} from "../Core/Logic/Init/InitManagers";
import {FlightManagers} from "../Core/Logic/FlightManagers";



const managers = [
  /* Init */
  ...InitManagers,
  ...FlightManagers,
  /*Insert Managers*/
];

export default managers;

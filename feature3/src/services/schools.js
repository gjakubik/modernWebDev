import axios from "axios";
import { SCHOOLS } from "../constants.js"

export const getSchools = () => {
    //Grabbing json data from constants.js file
    return SCHOOLS.results;
};

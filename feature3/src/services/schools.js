import axios from "axios";
import { SCHOOLS } from "../constants.js"

export const getSchools = () => {
    return SCHOOLS.results;
};

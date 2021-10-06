import axios from "axios";
import { BASE_URL, REST_API_KEY } from "../constants.js"

export const getStandings = () => {
  return axios
    .get(`${BASE_URL}/users`)
    .then((response) => {
      console.log(response.data);
      return response.data.data;
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
};

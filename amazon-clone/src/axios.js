import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/app-4f58f/us-central1/api", // the API (cloud function) url
});

export default instance;
// for local server
//http://localhost:5001/app-4f58f/us-central1/api

//https://us-central1-app-4f58f.cloudfunctions.net/api
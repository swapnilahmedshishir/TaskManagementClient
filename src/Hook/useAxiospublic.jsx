import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:5001",
  baseURL: "https://taskmanagementserver-9ktm.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
});

export const useAxiospublic = () => {
  return axiosPublic;
};

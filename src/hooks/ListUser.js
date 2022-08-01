import axios from "axios";

const getUsers = (page) => {
  const response = axios
    .get(`https://reqres.in/api/users?page=${page || 1}`)
    .catch((err) => console.log(err));

  return response;
};

export { getUsers };

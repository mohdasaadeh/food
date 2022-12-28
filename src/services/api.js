import axios from "axios";

const api = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 9IvYPyiyYFG8el5dpOkHauu6PYGJvCq8kT-PAn0RLxgk9ErzZ_FJyNKs3GQCLG82t6ou15_FqtlLyBDYOFsY4OHqtfjAcokN2ATE3UrFar2OsNcm7lxLnxxpj9uqY3Yx",
  },
});

export default api;

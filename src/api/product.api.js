import http from "../utils/http";

const URL = "products";

export const productApi = {
  getProducts(config) {
    return http.get(URL, config);
  },
};

export default productApi;

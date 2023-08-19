import { getProducts } from "../services/public.service.js";

export const getLatestIncomes = async () => {
  try {
    const products = await getProducts();
    return products.filter((product) => product.category === "men's clothing");
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
};

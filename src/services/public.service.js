export const getProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

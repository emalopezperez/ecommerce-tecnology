export const getProducts = () => {
  return fetch('https://fakestoreapi.com/products?limit=8')
    .then(res => res.json())
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};





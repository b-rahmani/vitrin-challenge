export const getProduct = async (id) => {
  let data;
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};

export const getAllProduct = async ({ limit }) => {
  let data;
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};

export const getAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};

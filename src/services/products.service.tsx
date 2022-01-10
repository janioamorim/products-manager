import Api from './api';

export const getAllProducts = async () => {
  try {
    const products = await Api.get(`/products/`);
    return products;
  } catch (err) {
    throw err;
  }
};

export const findProduct = async (id: string) => {
  try {
    const result = await Api.get(`/products/${id}`,);       
    return result;
  } catch (err) {
    throw err;
  }
};

export const postProduct = async (bodyProduct: any) => {
  try {
    const result = await Api.post(`/products`, bodyProduct);       
    return result;
  } catch (err) {
    throw err;
  }
};

export const editProduct = async (id: string, bodyProduct: any) => {
  try {
    const result = await Api.put(`/products/${id}`, bodyProduct);       
    return result;
  } catch (err) {
    throw err;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const result = await Api.delete(`/products/${id}`);       
    return result;
  } catch (err) {
    throw err;
  }
};


export const productService = {
  getAllProducts,
  postProduct,  
  findProduct,  
  editProduct,  
  deleteProduct
};

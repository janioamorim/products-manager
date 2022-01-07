import Api from './api';

export const getAllProducts = async () => {
  try {
    const products = await Api.get(`/products/`);
    return products;
  } catch (err) {
    throw err;
  }
};

export const getAllUsers = async () => {
  try {
    const users = await Api.get(`/users`);
    return users;
  } catch (err) {
    throw err;
  }
};



export default {
  getAllProducts: getAllProducts,  
  getAllUsers: getAllUsers,  
};

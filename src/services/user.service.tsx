import Api from './api';

export const getUser = async (user:string, pass:string) => {
  try {
    const users = await Api.get(`/users/?user=${user}&&pass=${pass}`);
    return users;
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

export const deleteUser = async (id: number) => {
  try {
    const result = await Api.delete(`/users/${id}`);       
    return result;
  } catch (err) {
    throw err;
  }
};



export const usersService = { 
  getAllUsers,
  getUser,
  deleteUser
};

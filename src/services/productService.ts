import axios from "axios";

const api = axios.create({ baseURL: 'https://localhost:44331' });

export const getProducts: any = async () => {
  try {
    const response = await api.get('/api/product');
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getProductById: any = async (id: Number) => {
  try {
    const response = await api.get(`/api/product/${id}`);
    console.log(response);
    return response;
  } catch(e) {
    console.log(e);
  }
};

export const getProductByName: any = async (name: string) => {
  try {
    const response = await api.get(`/api/product/${name}`);
    console.log(response);
    return response;
  } catch(e) {
    console.log(e);
  }
};

export const addProduct: any = async (name: string, price: Number, stock: Number, supplierId: Number) => {
  try {
    const response = await api.post(`/api/product`, {name, price, stock, supplierId});
    console.log(response);
  } catch(e) {
    console.log(e);
  }
};

export const updateProduct: any = async (id: Number, name: string, price: Number, stock: Number) => {
  try {
    const response = await api.put(`/api/product/${id}`, {name, price, stock });
    console.log(response);
  } catch(e) {
    console.log(e);
  }
};

export const deleteProduct: any = async (id: Number) => {
  try {
    const response = await api.delete(`/api/product/${id}`);
    console.log(response);
    return response;
  } catch(e) {
    console.log(e);
  }
};
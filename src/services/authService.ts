import axios from "axios";

const api = axios.create({ baseURL: 'https://localhost:44331' });

export const login: any = async (email: string, password: string) => {
  try {
    const response = await api.post('/api/auth', { email: email, password: password });
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (err) {
    console.log(err);
  }
};


export const verifyAuth: any = async () => {
  try {
    const response = await api.get('/auth', { headers: { "x-access-token": (localStorage.getItem("token") ?? "no-token") }, });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const signOut: any = async () => {
  try {
    const response = await api.get('/out', {headers: {"x-access-token": (localStorage.getItem("token") ?? "no-token")},});
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const test: any = async () => {
  try {
    const response = await api.get('/api/customer');
    //console.log(response.data.token);
    //localStorage.setItem("token", response.data.token);
    return response;
  } catch (err) {
    console.log(err);
  }
};
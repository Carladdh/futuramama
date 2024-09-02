import { AxiosConfig } from "./axios.config";

export const AxiosGet = async (url: string) => {
  return await AxiosConfig.get(url);
};

export const AxiosPost = async (url: string, data: any) => {
  return await AxiosConfig.post(url, data);
};

export const AxiosPut = async (url: string, data: any) => {
  return await AxiosConfig.put(url, data);
};

export const AxiosDelete = async (url: string) => {
  return await AxiosConfig.delete(url);
};

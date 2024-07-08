import axios from "axios";
import { useEffect } from "react";

const useApiInterceptor = () => {
  const baseUrl = import.meta.env.VITE_URL_BASE;
  const api = axios.create({ baseURL: baseUrl });

  api.interceptors.request.use(
    function (data) {
      return data;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject();
      api.interceptors.response.eject();
    };
  }, []);

  return api;
};

export default useApiInterceptor;

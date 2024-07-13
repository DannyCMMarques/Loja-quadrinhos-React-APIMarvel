import useApiInterceptor from "./interceptor";

function useProductListService() {
  const api = useApiInterceptor();
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_MD5_HASH;

  async function getCategoriesID(
    menuSelect: string,
    id?: any,
    limite?: number,
    offset?: number
  ) {
    return await api.get(
      `/${menuSelect}/${id}/comics?ts=1&apikey=${publicKey}&hash=${md5}&limit=${limite}&offset=${offset}`
    );
  }

  async function getCategoriesIDInfo(
    menuSelect: string,
    id?: any,
  ) {
    return await api.get(
      `/${menuSelect}/${id}?ts=1&apikey=${publicKey}&hash=${md5}`
    );
  }

  async function getACategoriesTodas(
    menuSelect: string,
    limite?: number,
    offset?: number
  ) {
    return await api.get(
      `/${menuSelect}?ts=1&apikey=${publicKey}&hash=${md5}&limit=${limite}&offset=${offset}`
    );
  }

  return { getCategoriesID, getACategoriesTodas, getCategoriesIDInfo };
}

export default useProductListService;

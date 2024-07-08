import useApiInterceptor from "./interceptor";

 function useCreatorsService() {
  const api = useApiInterceptor();
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const md5 = import.meta.env.VITE_MD5_HASH;

  async function getBestCreators(limite?: number=20, offset?: number=0) {
    return await api.get(
      `/creators/1168/comics?ts=1&apikey=${publicKey}&hash=${md5}&limit=${limite}&offset=${offset}`
    );
  }

  return { getBestCreators };
}

export default useCreatorsService;

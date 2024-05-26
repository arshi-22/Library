import { get } from "../core/api/coreapi";

export const getBooks = (baseUrl, url) => {
  const respone = get(baseUrl, url);
  return respone;
};

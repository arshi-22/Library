import { get } from "../core/api/coreapi";

export const getBooks = (url) => {
  const respone = get(url);
  return respone;
};

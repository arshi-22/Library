import { useDispatch } from "react-redux";
import { get } from "../core/api/coreapi";
import { bookList } from "../features/slice/bookslice";

export const getBooks = (baseUrl, url) => {
  // const dispatch = useDispatch();
  const respone = get(baseUrl, url);
  return respone;
  // dispatch(bookList(respone));
};

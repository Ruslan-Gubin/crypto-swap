import { fetchGet, topCtyptoURL } from "../../../shared"


const getAllCtypto = <T>(): Promise<T> => {
 return fetchGet(topCtyptoURL)
}

export const CtyptoApi = {
  getAllCtypto,
}
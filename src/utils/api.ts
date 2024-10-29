import { TPromo } from "./types";

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getPromosApi: () => Promise<TPromo[]> = () =>
  fetch(`https://t-pay.iqfit.app/subscribe/list-test`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => checkResponse<TPromo[]>(res));

export type TPromo = {
  name: "1 неделя" | "1 месяц" | "3 месяца" | "навсегда";
  price: number;
  lengthInDays: number;
  isPopular: boolean;
  isEndless: boolean;
  isDiscount: boolean;
  nonDiscountId: null;
  id: string;
  ownerId: string;
  statusId: null;
  creationDateTime: string;
  deleted: boolean;
};

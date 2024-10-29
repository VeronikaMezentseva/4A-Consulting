import { FC, useEffect } from "react";
import { CardMini } from "../card-mini/CardMini";
import { Button } from "../button/Button";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import {
  getPromos,
  selectMonthPromos,
  selectThreeMonthsPromos,
  selectWeekPromos,
} from "@/slices/promos-slice/promos-slice";

export const HotSalesBlock: FC = () => {
  const dispatch = useAppDispatch();

  const weekPromos = useSelector(selectWeekPromos);
  const monthPromos = useSelector(selectMonthPromos);
  const threeMonthsPromos = useSelector(selectThreeMonthsPromos);

  const weekPopularPromo = weekPromos.find(
    (promo) => promo.isDiscount === true
  );
  const monthPopularPromo = monthPromos.find(
    (promo) => promo.isDiscount === true
  );
  const threeMonthsPopularPromo = threeMonthsPromos.find(
    (promo) => promo.isDiscount === true
  );

  const weekFullPricePromo = weekPromos.find(
    (promo) => promo.isPopular === false && promo.isDiscount === false
  );
  const monthFullPricePromo = monthPromos.find(
    (promo) => promo.isPopular === false && promo.isDiscount === false
  );
  const threeMonthsFullPricePromo = threeMonthsPromos.find(
    (promo) => promo.isPopular === false && promo.isDiscount === false
  );

  useEffect(() => {
    dispatch(getPromos());
  }, []);

  return (
    <>
      <div className="mb-[40px] flex flex-col items-center">
        <h2 className="uppercase font-Rubik text-l text-last-chance-title font-bold mb-[30px]">
          Не упусти свой <span className="text-aqua">последний шанс</span>
        </h2>
        <p className="font-PT-Root-UI_Medium text-m text-last-chance-title mb-2">
          Мы знаем, как трудно начать..
          <span className="font-Rubik font-medium text-main-font">
            Поэтому!
          </span>
        </p>
        <div className="pt-[12px] pb-[16px] pl-[30px] pr-[28px] border-[1.5px] border-aqua rounded-[30px]">
          <p className="text-center font-PT-Root-UI_Bold text-main-font text-m">
            Дарим скидку для <span className="text-aqua">лёгкого старта</span>
            🏃‍♂️
          </p>
        </div>
      </div>
      <div className="mb-10">
        <p className="font-PT-Root-UI_Medium text-m text-last-chance-title mb-[20px]">
          Посмотри, что мы для тебя приготовили 🔥
        </p>
        <ul className="flex gap-[20px]">
          <li>
            <CardMini
              itemId={"week"}
              name={weekPopularPromo?.name || ""}
              salePrice={weekPopularPromo?.price || 0}
              price={weekFullPricePromo?.price || 0}
              discountPercent={40}
            ></CardMini>
          </li>
          <li>
            <CardMini
              itemId={"month"}
              name={monthPopularPromo?.name || ""}
              salePrice={monthPopularPromo?.price || 0}
              price={monthFullPricePromo?.price || 0}
              discountPercent={50}
            ></CardMini>
          </li>
          <li>
            <CardMini
              itemId={"threeMonths"}
              name={threeMonthsPopularPromo?.name || ""}
              salePrice={threeMonthsPopularPromo?.price || 0}
              price={threeMonthsFullPricePromo?.price || 0}
              discountPercent={60}
            ></CardMini>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Button text={"Начать тренироваться"}></Button>
      </div>
    </>
  );
};

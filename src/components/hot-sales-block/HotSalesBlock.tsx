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
    (promo) => promo.isDiscount === true,
  );
  const monthPopularPromo = monthPromos.find(
    (promo) => promo.isDiscount === true,
  );
  const threeMonthsPopularPromo = threeMonthsPromos.find(
    (promo) => promo.isDiscount === true,
  );

  const weekFullPricePromo = weekPromos.find(
    (promo) => promo.isPopular === false && promo.isDiscount === false,
  );
  const monthFullPricePromo = monthPromos.find(
    (promo) => promo.isPopular === false && promo.isDiscount === false,
  );
  const threeMonthsFullPricePromo = threeMonthsPromos.find(
    (promo) => promo.isPopular === false && promo.isDiscount === false,
  );

  useEffect(() => {
    dispatch(getPromos());
  }, []);

  return (
    <>
      <div className="mb-[40px] flex flex-col items-center">
        <h2 className="mb-[30px] font-Rubik text-l font-bold uppercase text-last-chance-title">
          Не упусти свой <span className="text-aqua">последний шанс</span>
        </h2>
        <p className="mb-2 font-PT-Root-UI_Medium text-m text-last-chance-title">
          Мы знаем, как трудно начать..
          <span className="font-Rubik font-medium text-main-font">
            Поэтому!
          </span>
        </p>
        <div className="rounded-[30px] border-[1.5px] border-aqua pb-[16px] pl-[30px] pr-[28px] pt-[12px]">
          <p className="text-center font-PT-Root-UI_Bold text-m text-main-font">
            Дарим скидку для <span className="text-aqua">лёгкого старта</span>
            🏃‍♂️
          </p>
        </div>
      </div>
      <div className="mb-10">
        <p className="mb-[20px] font-PT-Root-UI_Medium text-m text-last-chance-title">
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
            />
          </li>
          <li>
            <CardMini
              itemId={"month"}
              name={monthPopularPromo?.name || ""}
              salePrice={monthPopularPromo?.price || 0}
              price={monthFullPricePromo?.price || 0}
              discountPercent={50}
            />
          </li>
          <li>
            <CardMini
              itemId={"threeMonths"}
              name={threeMonthsPopularPromo?.name || ""}
              salePrice={threeMonthsPopularPromo?.price || 0}
              price={threeMonthsFullPricePromo?.price || 0}
              discountPercent={60}
            />
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <Button text={"Начать тренироваться"} />
      </div>
    </>
  );
};

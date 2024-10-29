import { FC, useEffect, useState } from "react";
import { OfferCard } from "../offer-card/OfferCard";
import { OfferCardHorizontal } from "../offer-card-horizontal/OfferCardHorizontal";
import Link from "next/link";
import { Button } from "../button/Button";
import { useAppDispatch } from "@/store/store";
import {
  getPromos,
  selectForeverPromos,
  selectMonthPromos,
  selectThreeMonthsPromos,
  selectWeekPromos,
} from "@/slices/promos-slice/promos-slice";
import { useSelector } from "react-redux";

export const OffersBlock: FC<{ time: number }> = ({ time }) => {
  const dispatch = useAppDispatch();
  const weekPromos = useSelector(selectWeekPromos);
  const monthPromos = useSelector(selectMonthPromos);
  const threeMonthsPromos = useSelector(selectThreeMonthsPromos);
  const foreverPromos = useSelector(selectForeverPromos);

  const weekPopularPromo = weekPromos.find((promo) => promo.isPopular === true);
  const monthPopularPromo = monthPromos.find(
    (promo) => promo.isPopular === true,
  );
  const threeMonthsPopularPromo = threeMonthsPromos.find(
    (promo) => promo.isPopular === true,
  );
  const foreverPopularPromo = foreverPromos.find(
    (promo) => promo.isPopular === true,
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
  const foreverFullPricePromo = foreverPromos.find(
    (promo) => promo.isPopular === false && promo.isDiscount === false,
  );

  useEffect(() => {
    dispatch(getPromos());
  }, []);

  const [isSale, setIsSale] = useState(true);

  useEffect(() => {
    setIsSale(time > 0 ? true : false);
  }, [time]);
  return (
    <>
      <div className="w-auto">
        <div className="grid grid-cols-cardsWidth gap-x-3 gap-y-7">
          <div>
            <OfferCard
              isSale={isSale}
              title={weekPopularPromo?.name || ""}
              discountPercent={30}
              fullPrice={weekFullPricePromo?.price || 0}
              priceWithDiscount={
                isSale
                  ? weekPopularPromo?.price || 0
                  : weekFullPricePromo?.price || 0
              }
              text="Чтобы просто начать 👍🏻"
            />
          </div>
          <div>
            <OfferCard
              isSale={isSale}
              title={monthPopularPromo?.name || ""}
              discountPercent={40}
              fullPrice={monthFullPricePromo?.price || 0}
              priceWithDiscount={
                isSale
                  ? monthPopularPromo?.price || 0
                  : monthFullPricePromo?.price || 0
              }
              text="Привести тело впорядок 💪🏻"
            />
          </div>
          <div>
            <OfferCard
              isSale={isSale}
              title={threeMonthsPopularPromo?.name || ""}
              discountPercent={50}
              fullPrice={threeMonthsFullPricePromo?.price || 0}
              priceWithDiscount={
                isSale
                  ? threeMonthsPopularPromo?.price || 0
                  : threeMonthsFullPricePromo?.price || 0
              }
              text="Изменить образ жизни 🔥"
            />
          </div>
          <div className="col-span-3">
            <OfferCardHorizontal
              isSale={isSale}
              title={foreverPopularPromo?.name || ""}
              discountPercent={70}
              fullPrice={foreverFullPricePromo?.price || 0}
              priceWithDiscount={
                isSale
                  ? foreverPopularPromo?.price || 0
                  : foreverFullPricePromo?.price || 0
              }
              text={"Всегда быть в форме и поддерживать своё здоровье ⭐️"}
            />
            <p className="colors: fontSize: fontFamily: mb-7 mt-3 font-PT-Root-UI_Medium text-xs text-main-font">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <div className="relative mb-[50px] flex flex-row items-center">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                value="privacyPolicy"
                className={`peer appearance-none`}
              ></input>
              <label
                htmlFor="privacyPolicy"
                className="cursor-pointer font-PT-Root-UI_Regular relative inline-block h-6 w-6 rounded border-2 border-solid border-aqua text-gray-200 after:absolute after:h-[20px] after:w-[22px] after:bg-center after:bg-no-repeat after:content-[''] peer-checked:bg-aqua peer-checked:after:bg-[url('/images/check-mark.png')]"
              ></label>
              <p className="ml-3 text-xxs text-gray-200">
                Я соглашаюсь с
                <Link href={"*"} className="text-link">
                  &nbsp;Правилами сервиса&nbsp;
                </Link>
                и условиями <br />
                <Link href={"*"} className="text-link">
                  Публичной оферты.
                </Link>
              </p>
            </div>
            <Button text="Купить" animate={true} textUpperCase={true} />
            <p className="font-PT-Root-UI_Regular text-conditions text-gray-200">
              Нажимая «Купить», Пользователь соглашается на автоматическое
              списание денежных средств по истечению купленного периода.
              Дальнейшие списания по тарифам участвующим в акции осуществляются
              по полной стоимости согласно оферте.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

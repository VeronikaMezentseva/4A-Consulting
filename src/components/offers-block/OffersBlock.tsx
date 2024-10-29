import { FC, useEffect, useState } from "react";
import { OfferCard } from "../offer-card/OfferCard";
import { OfferCardHorizontal } from "../offer-card-horizontal/OfferCardHorizontal";
import Link from "next/link";
import { Button } from "../button/Button";
import { useAppDispatch } from "@/store/store";
import { getPromos, selectForeverPromos, selectMonthPromos, selectPopularPromos, selectThreeMonthsPromos, selectWeekPromos } from "@/slices/promos-slice/promos-slice";
import { useSelector } from "react-redux";

export const OffersBlock: FC<{time: number}> = ({time}) => {
  const dispatch = useAppDispatch();
  const weekPromos = useSelector(selectWeekPromos);
  const monthPromos = useSelector(selectMonthPromos);
  const threeMonthsPromos = useSelector(selectThreeMonthsPromos);
  const foreverPromos = useSelector(selectForeverPromos);

  const weekPopularPromo = weekPromos.find((promo) => promo.isPopular === true);
  const monthPopularPromo = monthPromos.find((promo) => promo.isPopular === true);
  const threeMonthsPopularPromo = threeMonthsPromos.find((promo) => promo.isPopular === true);
  const foreverPopularPromo = foreverPromos.find((promo) => promo.isPopular === true);

  const weekFullPricePromo = weekPromos.find((promo) => promo.isPopular === false && promo.isDiscount === false);
  const monthFullPricePromo = monthPromos.find((promo) => promo.isPopular === false && promo.isDiscount === false);
  const threeMonthsFullPricePromo = threeMonthsPromos.find((promo) => promo.isPopular === false && promo.isDiscount === false);
  const foreverFullPricePromo = foreverPromos.find((promo) => promo.isPopular === false && promo.isDiscount === false);

  useEffect(() => {
    dispatch(getPromos());
  }, []);

  const [isSale, setIsSale] = useState(true)

  useEffect(() => {
    setIsSale(time > 0 ? true : false);
  }, [time]);

  return (
    <>
      <div className="w-auto">
        <div className="grid gap-x-3 gap-y-7 gridTemplateColumns: grid-cols-cardsWidth">
          <div>
            <OfferCard
              isSale={isSale}
              title={weekPopularPromo?.name || ''}
              discountPercent={30}
              fullPrice={weekFullPricePromo?.price || 0}
              priceWithDiscount={isSale ? weekPopularPromo?.price || 0 : weekFullPricePromo?.price || 0}
              text="Чтобы просто начать 👍🏻"
            ></OfferCard>
          </div>
          <div>
            <OfferCard
              isSale={isSale}
              title={monthPopularPromo?.name || ''}
              discountPercent={40}
              fullPrice={monthFullPricePromo?.price || 0}
              priceWithDiscount={isSale ? monthPopularPromo?.price || 0 : monthFullPricePromo?.price || 0}
              text="Привести тело впорядок 💪🏻"
            ></OfferCard>
          </div>
          <div>
            <OfferCard
              isSale={isSale}
              title={threeMonthsPopularPromo?.name || ''}
              discountPercent={50}
              fullPrice={threeMonthsFullPricePromo?.price || 0}
              priceWithDiscount={isSale ? threeMonthsPopularPromo?.price || 0 : threeMonthsFullPricePromo?.price || 0}
              text="Изменить образ жизни 🔥"
            ></OfferCard>
          </div>
          <div className="col-span-3">
            <OfferCardHorizontal
              isSale={isSale}
              title={foreverPopularPromo?.name || ''}
              discountPercent={70}
              fullPrice={foreverFullPricePromo?.price || 0}
              priceWithDiscount={isSale ? foreverPopularPromo?.price || 0 : foreverFullPricePromo?.price || 0}
              text={"Всегда быть в форме и поддерживать своё здоровье ⭐️"}
            ></OfferCardHorizontal>
            <p className="colors: text-main-font fontSize: text-xs fontFamily: font-PT-Root-UI_Medium mt-3 mb-7">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <div className="flex items-center flex-row relative mb-[50px]">
              <input
                type="checkbox"
                id="privacyPolicy"
                name="privacyPolicy"
                value="privacyPolicy"
                className={`peer appearance-none`}
              ></input>
              <label
                htmlFor="privacyPolicy"
                className="inline-block relative w-6 h-6 after:w-[22px] after:h-[20px] after:absolute cursor-pointerfont-PT-Root-UI_Regular text-gray-200 peer-checked:bg-aqua border-2 border-solid border-aqua rounded peer-checked:after:bg-[url('/images/check-mark.png')] after:bg-center after:bg-no-repeat after:content-['']"
              ></label>
              <p className="ml-3 text-gray-200 text-xxs">
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
            <Button text="Купить" animate={true} textUpperCase={true}></Button>
            <p className="text-gray-200 font-PT-Root-UI_Regular text-conditions">
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

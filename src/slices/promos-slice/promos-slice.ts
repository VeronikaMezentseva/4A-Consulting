import { getPromosApi } from "@/utils/api";
import { TPromo } from "@/utils/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";

export const getPromos = createAsyncThunk("promos/getAll", getPromosApi);

type TState = {
  data: TPromo[];
  weekPromos: TPromo[];
  monthPromos: TPromo[];
  threeMonthsPromos: TPromo[];
  foreverPromos: TPromo[];
};

export const initialState: TState = {
  data: [],
  weekPromos: [],
  monthPromos: [],
  threeMonthsPromos: [],
  foreverPromos: [],
};

export const promosSlice = createSlice({
  name: "promos",
  initialState,
  reducers: {},
  selectors: {
    selectPromos: (state) => state.data,
    selectPopularPromos: (state) =>
      state.data.filter((promo) => {
        return promo.isPopular === true;
      }),
    selectWeekPromos: (state) => state.weekPromos,
    selectMonthPromos: (state) => state.monthPromos,
    selectThreeMonthsPromos: (state) => state.threeMonthsPromos,
    selectForeverPromos: (state) => state.foreverPromos,
  },
  extraReducers: (builder) => {
    builder.addCase(getPromos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.weekPromos = action.payload.filter((promo) => {
        return promo.name === "1 неделя";
      });
      state.monthPromos = action.payload.filter((promo) => {
        return promo.name === "1 месяц";
      });
      state.threeMonthsPromos = action.payload.filter((promo) => {
        return promo.name === "3 месяца";
      });
      state.foreverPromos = action.payload.filter((promo) => {
        return promo.name === "навсегда";
      });
    });
  },
});

export const {
  selectPromos,
  selectPopularPromos,
  selectWeekPromos,
  selectMonthPromos,
  selectThreeMonthsPromos,
  selectForeverPromos,
} = promosSlice.selectors;

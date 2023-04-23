import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { UserType } from "@/components/post/types";

export interface companyState {
    incomeStateMent:[],
    chartData:any,
    balanceShheet:[]
}

const initialState: companyState = {
    incomeStateMent:[],
    chartData:{},
    balanceShheet:[]
};

export const companyReducer = createSlice({
  name: "companyReducer",
  initialState,
  reducers: {
    saveIncomeStateMent: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.token = action.payload;
    },
    saveChartData: (state, action: PayloadAction<object>) => {
      console.log(action,"actionnnnnnnnnnnnn")
      // state.token = "";
      // state.user = null;
      state.chartData = action.payload
    },
    saveBalanceSheet:(state, action: PayloadAction<string>)=>{
        
    }
  },
});

// Action creators are generated for each case reducer function
export const { saveIncomeStateMent, saveChartData,saveBalanceSheet } = companyReducer.actions;

export default companyReducer.reducer;

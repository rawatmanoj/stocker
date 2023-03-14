import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
    reducerPath:"searchApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://www.alphavantage.co"}),
    endpoints:(builder)=>({
        searchCompany: builder.query({
            query: (value ) => ({
                url: `query?function=SYMBOL_SEARCH&keywords=${value}&apikey=KD810N393AZ6VSRK`,
            })
        })
    })
})


export const {useSearchCompanyQuery} = searchApi
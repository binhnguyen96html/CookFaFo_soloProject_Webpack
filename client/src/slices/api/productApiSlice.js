import { apiSlice } from "./apiSlice";
import {PRODUCTS_URL} from '../constants'


const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductsBasedMenuKey: builder.query({
            query: (menuKey) => ({
                url: `${PRODUCTS_URL}/${menuKey}`
            })
        })
    })
})

export const {
    useGetProductsBasedMenuKeyQuery
} = productApiSlice;
import { apiSlice } from "./apiSlice";
import { MENU_URL } from "../constants";

/*
Accepts an options object containing the same endpoints builder callback 
you would pass to createApi.endpoints. 
Any endpoint definitions defined using that builder will be merged 
into the existing endpoint definitions for this API slice using a shallow merge, 
so any new endpoint definitions will override existing endpoints with the same name.
*/
const menuApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchMenu: builder.query({
            query:() => ({
                url: MENU_URL,
            }),
            //This is how long RTK Query will keep your data cached for after the last component unsubscribes
            keepUnusedDataFor: 5,
        }),
        getMenuById: builder.query({
            query:(id) => ({
                url:`${MENU_URL}/${id}`
            }),
            keepUnusedDataFor: 5,
        })
    })
})     


export const {
 useFetchMenuQuery,
 useGetMenuByIdQuery
} = menuApiSlice;
import { configureStore } from "@reduxjs/toolkit";
import categories from "../features/categoriesSlice";
import doorhandles from "../features/doorhandlesSlice";


export const store = configureStore({
    reducer: {
        categories,
        doorhandles,
        
        
    }
})
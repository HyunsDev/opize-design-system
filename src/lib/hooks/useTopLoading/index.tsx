import React, { useContext } from "react";
import { TopLoadingContext } from "../../context/topLoading/topLoadingContext";


export function useTopLoading() {
    return useContext(TopLoadingContext)
}
import React, { useCallback, useContext, useMemo } from "react";
import { TopLoadingContext } from "./context";


export function useTopLoading() {
    return useContext(TopLoadingContext)
}
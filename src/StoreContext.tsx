import React, { ReactNode } from "react";
import { Store } from "redux";

export const StoreContext = React.createContext<Store>({} as Store)

type PropsType = {
    store: Store
    children: ReactNode
}

export const Provider = (props: PropsType) => {
    return (
        <StoreContext.Provider value={props.store} >
            {props.children}
        </StoreContext.Provider >
    )
} 
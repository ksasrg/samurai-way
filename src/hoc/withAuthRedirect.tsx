import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { StoreType } from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: StoreType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    // class RedirectComponent extends React.Component<MapStatePropsType> {
    //     render() {
    //         const { isAuth, ...restProps } = this.props

    //         if (!isAuth) return <Redirect to={'/login'} />

    //         return <Component {...restProps as T} />
    //     }
    // }

    const RedirectComponent = (props: MapStatePropsType) => {

        const { isAuth, ...restProps } = props

        if (!isAuth) return <Redirect to={'/login'} />
   
        return <Component {...restProps as T} />

    }

    return connect(mapStateToProps)(RedirectComponent)
}
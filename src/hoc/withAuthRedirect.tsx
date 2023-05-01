import { ComponentType } from "react";
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

export function withAuthRedirect(Component: any) {
    const RedirectComponent = (props: MapStatePropsType) => {
        const { isAuth, ...restProps } = props

        return isAuth
            ? <Component {...restProps} />
            : <Redirect to={'/login'} />
    }

    return connect(mapStateToProps)(RedirectComponent)
}


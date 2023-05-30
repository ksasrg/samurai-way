import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutTC } from "../../redux/auth-reducer";
import { StoreType } from "../../redux/redux-store";

export type HeaderAPIContainerPropsType = mapStateToPropsType & {
    logoutTC: () => void
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    render() {
        return <Header {...this.props} />
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type HeaderPropsType = mapStateToPropsType
const mapStateToProps = (state: StoreType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    logoutTC
})(HeaderAPIContainer)
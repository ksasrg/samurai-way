import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logoutTC } from "../../redux/auth-reducer";
import { StoreType } from "../../redux/redux-store";

export type HeaderAPIContainerPropsType = mapStateToPropsType & {
    getAuthUserData: () => void
    logoutTC: () => void
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount(): void {
        this.props.getAuthUserData()
    }

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
    getAuthUserData,
    logoutTC
})(HeaderAPIContainer)
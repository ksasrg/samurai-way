import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { UserAuthDispatchActionType, setAuthUserData } from "../../redux/auth-reducer";
import { StoreType } from "../../redux/redux-store";

export type HeaderAPIContainerPropsType = mapStateToPropsType & {
    setAuthUserData: (userId: number, email: string, login: string) => void
}

class HeaderAPIContainer extends React.Component<HeaderAPIContainerPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                // debugger
                if (response.data.resultCode === 0) {
                    const { id, email, login } = response.data.data
                    this.props.setAuthUserData(id, email, login)
                    console.log(id, email, login);

                }


            })
    }

    render() {
        return <Header {...this.props}/>
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

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData })(HeaderAPIContainer)
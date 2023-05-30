import React, { ComponentType } from 'react';
import { Profile } from './Profile';
import { StoreType } from '../../redux/redux-store';
import { getStatus, getUserProfile, profileType, updateStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


type PathParamsType = {
    userId: string
}

type PropsType =
    RouteComponentProps<PathParamsType> &
    {
        profile: profileType
        status: string
        getUserProfile: (userId: number) => void
        getStatus: (userId: number) => void
        updateStatus: (status: string) => void
        authorizedUserId: number,
        isAuth: boolean,
    }

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId.toString()
        }

        this.props.getUserProfile(Number(userId))
        this.props.getStatus(Number(userId))
    }


    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}


export const ProfileContainer = compose<ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(ProfileAPIContainer)


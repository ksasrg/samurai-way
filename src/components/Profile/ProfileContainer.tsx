import React from 'react';
import { Profile } from './Profile';
import { StoreType } from '../../redux/redux-store';
import { getUserProfile, profileType } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


type PathParamsType = {
    userId: string
}

type PropsType =
    RouteComponentProps<PathParamsType> &
    {
        profile: profileType
        getUserProfile: (userId: number) => void
    }

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'

        this.props.getUserProfile(Number(userId))
    }


    render() {
        return (
            <div>
                <Profile profile={this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps = (state: StoreType) => {
    return {
        profile: state.profilePage.profile,
    }
}

const WithRouterProfileAPIContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    getUserProfile,
})(withAuthRedirect(WithRouterProfileAPIContainer))

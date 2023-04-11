import React from 'react';
import { Profile } from './Profile';
import axios from 'axios';
import { StoreType } from '../../redux/redux-store';
import { profileType, setUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type PropsType =
    RouteComponentProps<PathParamsType> &
    {
        profile: profileType
        setUserProfile: (profile: profileType) => void
    }

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <div>
                {/* <Profile {...this.props} /> */}
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
    setUserProfile,
})(WithRouterProfileAPIContainer)

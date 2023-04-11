import React from 'react';
import { Profile } from './Profile';
import axios from 'axios';
import { StoreType } from '../../redux/redux-store';
import { profileType, setUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';

type PropsType = {
    profile: profileType
    setUserProfile: (profile: profileType) => void
}

export class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
})(ProfileAPIContainer)

import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUsersProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {userId=2}

    this.props.getUsersProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
 profile: state.profilePage.profile
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect(mapStateToProps,{ getUsersProfile } )(WithUrlDataContainerComponent);

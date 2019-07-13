import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      followers,
      following,
      public_repos,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>{bio}</div>;
  }
}

export default User;

import React, { Component, Fragment } from "react";

export class User extends Component {
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
      html_url,
      followers,
      following,
      public_repos,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return (
      <Fragment>
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Bio:</strong> {bio}
          </li>
          <li>
            <strong>Login:</strong> {login}
          </li>
          <li>
            <strong>Location:</strong> {location}{" "}
          </li>
          <li>
            <strong>Following:</strong> {following}{" "}
          </li>
          <li>
            <strong>Public Repositories:</strong> {public_repos}{" "}
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default User;

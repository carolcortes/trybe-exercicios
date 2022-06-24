import React from "react";
import Image from './Image'

class UserProfile extends React.Component {
  render() {
    const { id, name, email, avatar } = this.props.user;
    return (
      <div className="user">
        <Image source={avatar} alternativeText="User Avatar" />
        <ul className={id}>
          <li>Nome: {name}</li>
          <li>Id: {id}</li>
          <li>E-mail: {email}</li>
        </ul>
      </div>
    )
  }
}

export default UserProfile;
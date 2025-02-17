import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>Profile
        <hr />
        <br />
        <hr />
        <Link to='/profile/myaccount'>My Accounts</Link><br /><br />
        <Link to='/profile/mysetting'>My Settings</Link>

        <Outlet/>
    </div>
  )
}

export default Profile
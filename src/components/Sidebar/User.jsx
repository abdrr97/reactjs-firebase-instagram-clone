import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

// we can use memo to optimize this ... :TODO

const User = ({ fullName, username }) => {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className='grid grid-cols-4 gap-4 mb-6 items-center'
    >
      <div className='flex items-center justify-between col-span-1'>
        <img
          src={`images/avatars/${username}.jpg`}
          alt={`${username} profile`}
          className='rounded-full mr-3 w-16 flex'
        />
      </div>
      <div className='col-span-3'>
        <p className='font-bold text-sm'>{username}</p>
        <p className='text-sm'>{fullName}</p>
      </div>
    </Link>
  )
}

export default User

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
}

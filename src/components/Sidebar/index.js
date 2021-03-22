import React from 'react'
import useUser from '../../hooks/useUser'
import User from './User'
import Suggestions from './Suggestions'

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser()
  console.log(fullName, username, userId)

  return (
    <div className='p-4'>
      <User />
      <Suggestions />
    </div>
  )
}

export default Sidebar

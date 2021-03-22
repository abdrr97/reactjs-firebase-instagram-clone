import React from 'react'
import useUser from '../../hooks/useUser'
import User from './User'
import Suggestions from './Suggestions'

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser()
  const user = { fullName, username, userId }

  return (
    <div className='p-4'>
      <User {...user} />
      <User {...user} />
      <Suggestions {...user} />
    </div>
  )
}

export default Sidebar

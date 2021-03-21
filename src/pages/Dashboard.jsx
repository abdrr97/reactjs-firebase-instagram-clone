import React, { useEffect } from 'react'
import { Header, Sidebar, Timeline } from '../components'

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Instagram'
  }, [])
  return (
    <div className='bg-gray-background'>
      <Header />
      <div className='grid'>
        <Timeline />
        <Sidebar />
      </div>
    </div>
  )
}

export default Dashboard

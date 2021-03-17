import React, { useEffect } from 'react'

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found • Instagram'
  }, [])
  return (
    <div className='bg-gray-background'>
      <div className='mx-auto max-w-screen-lg'>
        <h1 className='text-center text-2xl'>
          Sorry, this page isn't available.
        </h1>
        <p className='text-center '>
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </p>
      </div>
    </div>
  )
}

export default NotFound

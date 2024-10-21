import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center bg-slate-800 text-amber-400'>
        <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go back to the home page</a>
    </div>
  )
}

export default NotFound

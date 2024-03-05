import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const isLoggedIn = useSelector((state) => state.auth.status)
  return (
    <>
      {isLoggedIn? <>
        <h2>Thanks for looging in !! All post are available</h2>
        
        </>
        :
        <h2>Login to read post</h2> }
    </>
  )
}

export default Home
import React from 'react'

export default function NavBar({nbLike}) {
  return (
    <div className='entete'> 
        <h3>
            Les Posts Liker sont : {nbLike()}
        </h3>
    </div>
  )
}

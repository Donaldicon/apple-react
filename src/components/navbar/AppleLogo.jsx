import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'

const AppleLogo = () => {
  return (
    <div>            
        <FontAwesomeIcon icon={faApple} className='text-gray-300 text-xl transition-all duration-300 cursor-pointer hover:text-white'/>
    </div>
  )
}

export default AppleLogo
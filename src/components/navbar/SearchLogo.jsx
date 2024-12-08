import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchLogo = () => {
  return (
    <div>            
        <FontAwesomeIcon icon={faSearch} className='text-gray-300 text-sm transition-all duration-300 cursor-pointer hover:text-white'/>
    </div>
  )
}

export default SearchLogo
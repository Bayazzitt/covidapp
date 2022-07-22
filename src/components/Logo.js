import React from 'react'
import PropTypes from "prop-types"

function Logo({logo,title}) {
  return (
    <div className='flex items-center'>
        <img className='mr-3 h-6' src={logo} alt={title}/>
        <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            {title}
        </span>
        </div>
  )
}






Logo.propTypes={
    title:PropTypes.string,
    logo:PropTypes.string
}

Logo.defaultProps={
    title:"Corona Live",
    logo:"https://media.istockphoto.com/vectors/coronavirus-inscription-typography-design-logo-concept-vector-vector-id1213559740?k=20&m=1213559740&s=170667a&w=0&h=1CaLyZcoNfjTFGDQxjCaId9pp6F7mEriBSdL0tBeTUc="
}
export default Logo
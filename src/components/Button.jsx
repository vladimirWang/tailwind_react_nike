import React from 'react'

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border 
    font-montserrat text-lg leading-none rounded-full w-full2
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red  text-white border-coral-red'}
    `}>
      {label}
      {iconURL && <img src={iconURL} alt="" />}
    </button>
  )
}

export default Button
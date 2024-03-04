import React from 'react'

function Button({
    type="button",
    className="",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    text,
    ...props
}) {
  return (
    <>
        <button 
            type={type}
            className={`${bgColor} ${textColor} ${className}`}>
            {text}
        </button>
    </>
  )
}

export default Button
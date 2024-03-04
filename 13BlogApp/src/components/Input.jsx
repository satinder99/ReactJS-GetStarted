import React, { forwardRef, useId } from 'react'

function Input({
    label,
    className='',
    placeholder,
    type = "text",
    ...props
},ref) {
    const Id= useId();
  return (
    <>
        {label && <label 
                    htmlFor={Id}>
                        {label}
                    </label>}
        <input 
            type={type} 
            placeholder={placeholder} 
            className={`${className}`}
            id={Id}
            ref={ref}
            {...props}
            >
        </input>
    </>
  )
}

export default forwardRef(Input);
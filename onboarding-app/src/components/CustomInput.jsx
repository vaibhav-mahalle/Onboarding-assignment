import React from 'react'

export const CustomInput = ({placeholderName= "placeholder",labelName = "LabelName"}) => {
    
  return (
    <div>
    <h6><label htmlFor="name">{labelName} : </label></h6>
    <input type="text" placeholder={placeholderName} />
    </div>
  )
}
